import '../Styles/footer.css'

const Footer = () => {
    return ( 
        <div className="footer">
            <div className="footer_logo">
            <img height={50} width={160} src="images/download.png" alt="" /> 
            </div>
            <div className="footer_links">
                <ul>
                    <li><a href="">Terms and Privacy Notice</a></li>
                    <li><a href="">Send us feedback</a></li>
                    <li><a href="">Help</a>
                    </li>
                </ul>
            </div>
            <div className="desc">
                <p>© 1996-2022, Amazon.com, Inc. or its affiliates</p>
            </div>
            
        </div>
     );
}
 
export default Footer