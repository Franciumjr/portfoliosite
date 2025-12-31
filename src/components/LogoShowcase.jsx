
import {logoIconsList} from "../constant_v2/index_v2"

const LogoIcons = ({icon}) => {
    return (
        <div className="flex-none flex-center marquee-item">
            <img src={icon.imgPath} alt={icon.name} />
        </div>
    );
};


const LogoShowcase = () => {
  return (
    <div className='md:my-20 my-10 relative'>
        <div className="gradient-edge"></div>
        <div className="gradient-edge"></div>

        <div className="marquee h-52">
            <div className="marquee-box gap-5 md:gap-12 ">
                {logoIconsList.map((icon, index) => (
                    <LogoIcons key = {index} icon = {icon}></LogoIcons>
                ))}
                {logoIconsList.map((icon, index) => (
                    <LogoIcons key = {index} icon = {icon}></LogoIcons>
                ))}
            </div>
        </div>
    </div>
  )
}

export default LogoShowcase
