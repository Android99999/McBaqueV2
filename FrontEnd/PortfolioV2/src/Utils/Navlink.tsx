// react-scroll
import  React  from 'react';
import { Link as ScrollLink} from "react-scroll";


interface Navlinktype {
    children?: React.ReactNode;
    to?: string;
    offset?: number;
    mobileMenu?: boolean;
    Linkto: string;
}


const Navlink = ({ children, Linkto, offset, mobileMenu}: Navlinktype) => {

  const className = mobileMenu 
  ? 'text-lg font-black cursor-pointer w-full text-center relative group transition-all duration-300 hover:duration-1000'
    : 'text-lg font-black lg:text-xl p-2 cursor-pointer  relative group transition-all duration-300 hover:duration-1000';

  return (

  <ScrollLink 
    to = {Linkto}
    spy={true}
    smooth={true}
    offset={offset}
    duration={1000}
    className={className}
  >
    {children}
    
  </ScrollLink>
  )
};

export default Navlink;