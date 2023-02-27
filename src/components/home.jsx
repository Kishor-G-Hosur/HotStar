import '../Styles/home.css'


const Home = () => {
    
    return ( 
        <div className="home">
            <div className="banner">
                <div className="description">
                    <p>All the best worthy Movies in just one click</p>
                    <button>Subscribe Now</button>
                </div>
                <div className="banner_image">
                    <img src="images/Logo.jpg" alt="" />
                </div>
            </div>
            <div className='movies_list'>
                <h1>Recommended for you</h1>
                <img src="images/img1.jpg" height="400" width="250" alt="" />
                <img src="images/img2.jpg" height="400" width="250" alt="" />
                <img src="images/img3.jpg" height="400" width="250" alt="" />
                <img src="images/img4.jpg"  height="400" width="250"alt="" />
                <img src="images/img5.jpg" height="400" width="250" alt="" />
            </div>
        </div>
     );
}
 
export default Home;
