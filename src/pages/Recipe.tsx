import React, {useEffect, useState} from "react";
import { recipeInstance } from "../axios/axiosHttp";
import { AxiosResponse } from "axios";
import Cards from "../components/Cards";
import { RecipeNameSpace } from "../types";
import { nanoid } from 'nanoid'

const fetchData = async (recipeName: string) => {
  const data = await recipeInstance.get(`?q=${recipeName}`);
  console.log(data);
  return data;
};

const Recipe = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [results, setResults] = useState<any>([])

  console.log("xyz", results)

  useEffect(()=>{

    if(searchTerm === '') return 
    else{
      (async ()=>{
        const x = await fetchData(searchTerm)
        setResults(x?.data?.hits)
      })()
    }
    
  },[searchTerm])

  return (
    <div className="container">
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        aria-label="Username"
        aria-describedby="basic-addon1"
        // onChange={(e)=>setSearchTerm(e.target.value)}
        onKeyDown={(e)=>{
          if(e.key === 'Enter'){
            setSearchTerm((e.target as any).value)
          }
        }}
      ></input>

      {results?.map((item: RecipeNameSpace.iRecipeRoot)=>{
        const {recipe} =item || {}
        return <Cards key={nanoid()} desc={recipe?.source} title={recipe?.label} image={recipe?.image}/>
      })}
    
    </div>
    
  );
};

export default Recipe;
