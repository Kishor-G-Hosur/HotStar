import '../Styles/movies.css'
import { useEffect, useState } from 'react'
import MoviesLogic from './moviesLogic'



const Movies = () => {
   
    // let favourites=[
    //     {
        
    //         title:"The Boys",
    //         genre:"action",
    //         lanaguage:"english",
    //         rating:4,
    //         id:1
    //     },
    //     {
    //         title:"Dark",
    //         genre:"sci-fi/mystery",
    //         lanaguage:"german",
    //         rating:4.5,
    //         id:2
    //     },
    //     {
    //         title:"The Family Man",
    //         genre:"Thriller",
    //         lanaguage:"hindi",
    //         rating:4,
    //         id:3
    //     },
    //     {
    //         title:"Malgudi Days",
    //         genre:"Philosophy",
    //         lanaguage:"hindi",
    //         rating:4.8,
    //         id:4
    //     },
    //     {
    //         title:"The office",
    //         genre:"sitchcom",
    //         lanaguage:"english",
    //         rating:4.4,
    //         id:5
    //     },
    // ]
    let [favouritesData,setFavsData]=useState([])
    useEffect(()=>{
        let fetchData=async()=>{
            let reponse=await fetch('http://localhost:1999/favourites')
            let data=await reponse.json()
            setFavsData(data)

        }
        fetchData()
    },[])
     let handleRemove=(id,title)=>{
    //  alert(`${id},${title}`)
     setFavsData(favouritesData.filter(x=>x.id != id))
       alert(`${title} has been removed from favourties`)
     }
    return ( 
        <div className="movies">
        {/* //      <h1>Favourites of All time movies</h1>
        //      <div className="favs">
             {favouritesData.map((data)=>( */}
        {/* //             <div className="fav_list">
        //                 <h2>{data.title}</h2>
        //                 <p>{data.lanaguage}/{data.genre}</p>
        //                 <p>{data.rating}⭐</p>
        //                 <button onClick={()=>handleRemove(data.id,data.title)}>Remove</button>
        //             </div>
        //         ))}
        //     </div> */}
        <MoviesLogic title="favourties of all time" data={favouritesData} fn={handleRemove}/>
        <MoviesLogic title="top rated " data={favouritesData.filter(x=>x.rating>=4.5) } fn={handleRemove}/>
        <MoviesLogic title="language english" data={favouritesData.filter(x=>x.lanaguage=="english")} fn={handleRemove}/>
         </div>
     );
    }
export default Movies;

