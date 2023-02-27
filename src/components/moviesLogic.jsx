

const MoviesLogic = (props) => {
    let header=props.title
    let oldData=props.data
    let handleRemove=props.fn
    
    return ( 
        <div className="favs">
        <h1>{header}</h1>
        <div className="favs">
            {oldData.map((data)=>(
                <div className="fav_list">
                    <h2>{data.title}</h2>
                    <p>{data.lanaguage}/{data.genre}</p>
                    <p>{data.rating}⭐</p>
                    <button onClick={()=>handleRemove(data.id,data.title)}>Remove</button>
                </div>
            ))}
        </div>
    </div>
     );
}
 
export default MoviesLogic;


// const MoviesLogic = (props) => {
//     // let headers=props.title
//     let oldData=props.data
//     let remove=props.fn
//     return (
        
//             <div className="favs">
//                 {/* <h1>{headers}</h1> */}
//                 <div className="favs">
//                 {
//                     oldData.map((data)=>
//                     (
//                         <div className="fav_list">
//                             <h2>{data.title}</h2>
//                             <button onClick={()=>remove(data.id,data.title)}>remove</button>
//                         </div>

//                     ))
//                 }
//             </div>
//             </div>
        

//       );
// }
 
// export default MoviesLogic;