import React, {useContext} from 'react'
import { UserContent } from '../Context'
import {recipeInstance} from '../axios/axiosHttp'
import axios from "axios";

const Home = () => {
    const {name} = useContext(UserContent)

    const prevData = axios.get('https://api.edamam.com/api/recipes/v2?type=public&q=egg&app_id=4a350f7d&app_key=cfdae792d4d158adae1d93c999ae6517')
    const data = recipeInstance.get('?q=carrot')

    console.log(data)

    
  return (
    <div>
      welcome {name}
    </div>
  )
}

export default Home
