import { socialImgs } from "../constant_v2/index_v2"

socialImgs

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="flex flex-col justify-center items-center md:items-start"></div>
            <div className="socials">
               {socialImgs.map((social) => (
                <a href= {social.url} target="_blank" rel="noopener noreferrer" key={social.name} className="footer-social-link">
                    <img key={social.name} src={social.imgPath} alt={social.name} />
                </a>
                 
               ))} 

            </div>
            <div className="flex flex-col justify-center ">
                
                <p className="text-center md:text-end">© {new Date().getFullYear()} Magnus Chan. All rights reserved.</p>
            </div>
        </div>
    </div>
  )
}

export default Footer