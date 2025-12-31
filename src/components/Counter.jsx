
import {counterItems, techStackIcons} from "../constant_v2/index_v2"
import CountUp from "react-countup";



const Counter = () => {
  return (
    <div id="counter" className="padding-x-lg xl:mt-0 mt-32">
        <div className="mx-auto grid-4-cols">
          {counterItems.map((item) => (
            <div className="bg-black rounded-lg p-10 flex flex-col justify-center">
              <div key = {counterItems.label} className="counter-number text-white text-5xl font-extrabold mb-2">
                0 
                <CountUp suffix = {item.suffix} end = {item.value}></CountUp> 
                <div className="text-lg font-light p-5">
                  {item.label}
                </div>
              </div>
            </div>
          ))}
          
        </div>
        
    </div>
  )
}

export default Counter;
