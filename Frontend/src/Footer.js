
import './App.css';

function Footer() {
  return (
    <div className="footer">
    <div className="container">
        <div className="w3_footer_grids">
            <div className="col-md-3 w3_footer_grid">
                <h3>Contact</h3>
                <p><b><h4>London </h4><br/> </b>Headquartered in London, MiQ has offices across North America, Europe and Asia Pacific. We work with the world's leading brands and media agencies.</p>
                <ul className="address">
                    <li><a href ="https://www.linkedin.com/company/miq-india/"><i className="glyphicon glyphicon-map-marker" aria-hidden="true"></i></a>MIQ, <span>Bangalore.</span></li>
                    <li><i className="glyphicon glyphicon-envelope" aria-hidden="true"></i><a href="mailto:info@example.com">abc@miqdigital.com</a></li>
                    <li><i className="glyphicon glyphicon-phone-alt" aria-hidden="true"></i>+1234 567 567</li>
                </ul>
            </div>
            <div className="col-md-3 w3_footer_grid">
                <h3>Information</h3>
                <ul className="info"> 
                    <li><a href="about.html">B2S-Book To Shop</a></li>
                    <p>We offer a tremendous gathering of books in the various classifications of Fiction, Non-fiction, Biographies, History, Religions, Self – Help, Children. We likewise move in immense accumulation of Investments and Management, Computers, Engineering, Medical, College and School content references books proposed by various foundations as schedule the nation over.</p>
                </ul>
            </div>
            <div className="col-md-3 w3_footer_grid">
                <h3>Category</h3>
                <ul className="info"> 
                    <li><a href="products.html">Thriller</a></li>
                    <li><a href="products1.html">Romance</a></li>
                    <li><a href="products.html">Adventure</a></li>
                    <li><a href="products1.html">Classic</a></li>
                    <li><a href="products2.html">Suspense and mystery</a></li>
                </ul>
            </div>
            <div className="col-md-3 w3_footer_grid">
                <h3>Profile</h3>
                <ul className="info"> 
                    <li><a href="index.html">Home</a></li>
                    <li><a href="products.html">Today's Deals</a></li>
                </ul>
                <h4><a href ="https://github.com/RonitaM/Book-to-Shop">Follow Us</a></h4>
                <div className="agileits_social_button">
                    <ul>
                        <li><a href="https://www.facebook.com/" className="facebook"> </a></li>
                        <li><a href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D" className="twitter"> </a></li>
                        <li><a href="https://www.google.com/" className="google"> </a></li>
                        <li><a href="https://in.pinterest.com/" className="pinterest"> </a></li>
                    </ul>
                </div>
            </div>
            <div className="clearfix"> </div>
        </div>
    </div>
    <div className="footer-copy">
        <div className="footer-copy1">
            <div className="footer-copy-pos">
                <a href="#home1" className="scroll"><img src="../assets/images/arrow.png" alt=" " className="img-responsive" /></a>
            </div>
        </div>
        <div className="container">
            <p>&copy;  Book Store. All rights reserved | <a href ="https://www.linkedin.com/feed/">sachi</a>||<a href ="https://www.linkedin.com/in/ronita-mitra-4b560b169/">ronita</a></p>
        </div>
    </div>
</div>
  )
}
export default Footer;