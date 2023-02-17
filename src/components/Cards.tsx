import React, {FC} from "react";

interface iCards{
    image: string
    title: string
    desc?: string
}

const Cards: FC<iCards> = ({image, title,desc}) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          {desc}
        </p>
  
      </div>
    </div>
  );
};

export default Cards;
