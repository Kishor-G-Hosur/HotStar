import { useState } from 'react';
import '../Styles/addFavourties.css'
import { useNavigate } from 'react-router-dom';

const AddFavourties = () => {
    let[title,setTitle]=useState('')
    let[genre,setGenre]=useState('')
    let[language,setLanguage]=useState('')
    let[rating,setRating]=useState('')
    let navigate=useNavigate()

    let handleSubmit=(e)=>
    {
        e.preventDefault()
        let data={title,genre,language,rating}
        fetch(' http://localhost:1999/favourites' ,{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(data)
        })
        alert('added successfully ')
        navigate('/movies')
        // console.log(data);
    }
    let remove=()=>
    {
        setTitle("")
        setGenre("")
        setLanguage("")
        setRating("")
    }
    return ( 
        <div className="addFavourites">
            <h1>Add to Favourties</h1>
        <div className="form">
            <div className="form_image">
        <img height={450} width={500} style={{border:'20px 0px 0px 20px'}} src="images/img16.jpg" alt="" />
            </div>
            <div className="form_input">
                   <form action="" onSubmit={handleSubmit}>
                    <div className="title">
                        <input type="text" required value={title}  placeholder="enter title" onChange={(e)=>setTitle(e.target.value)} />
                        
                    </div>
                    <br />
                    <div className="genre">
                        <input type="text" required value={genre}  placeholder="enter genre" onChange={(e)=>setGenre(e.target.value)} />
                    </div>
                    <br />
                    <div className="language">
                        <input type="text" required value={language}  placeholder="enter language" onChange={(e)=>setLanguage(e.target.value)} />
                        
                    </div>
                    <br />
                    <div className="rating">
                        <input type="text" required value={rating}  placeholder="enter rating" onChange={(e)=>setRating(e.target.value)}/>
                    </div>
                    <br />
                    <button id="i1" type="sumbit">Add to Favourites</button>
                    <button id="i1" type="reset" onClick={remove}>Reset</button>
                    </form> 
                </div>
        </div>
        </div>
     );
}
 
export default AddFavourties;