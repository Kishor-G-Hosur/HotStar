import { useState } from "react";
import '../Styles/celebs.css'

const Celebs = () => {

    //database

    let stars=[
        {
         img:"images/img11.webp",
            name:"Sudeep",
            id:"11"
        },
       
        {
            img:"images/img13.jpg",
            name:"MR.Bean",
            id:"13"
        },
        {
            img:"images/img14.jpg",
            name:"jr.NTR",
            id:"14"
        },
        {
            img:"images/img15.jpg",
            name:"Yash",
            id:"15"
        },
    ]
    let [starsData,setData]=useState(stars)
    let handleRemove=(id,name)=>{
        setData(starsData.filter(x=>x.id!= id))
        alert(`${name} has been Removed`)
    }
        return ( 
        <div className="celebs">
            <h1>Top Celebrities</h1>
            {starsData.map(data=>(
                <div className="celebs_list">
                 <div className="image">
                 <img src={data.img} alt="" />
                 </div>
                 <div className="info">
                 <h1>{data.name}</h1>
                 <button onClick={()=>handleRemove(data.id,data.name)}>Remove</button>
                 </div>
                   
                </div>
            ))}
        </div>

     );
}
 
export default Celebs;