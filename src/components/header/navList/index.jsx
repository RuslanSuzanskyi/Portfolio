import { ExternalLink } from "react-external-link";
import { Link } from "react-router-dom";

const NavList = ({ items = [] }) => {
  return (  
    <>
     <ul className="flex gap-6"> 
        {items.map((item, index) => 
          <li key={item.id} className="flex items-center justify-center">
            {index === items.length - 1 ? 
            (
              <ExternalLink href="https://github.com/RuslanSuzanskyi/Portfolio" 
                className="
                bg-[#934cce5e] 
                  flex 
                  items-center 
                  py-3 
                  h-9 
                  rounded-md 
                  border-none 
                  px-7 
                  relative 
                  transition 
                  duration-[400ms]
                hover:bg-[#623686]
                  hover:-translate-y-0.5
                "
              >
                <div>{item.icon}</div>
              </ExternalLink>
            ) : 
            ( 
              <Link to={item.link} className="flex items-center px-4 py-2 transition duration-[400] underline-animation">
                <div>{item.icon}</div>
                <span className="pl-1">{item.text}</span>
              </Link>
            )}
          </li>)}
      </ul>
    </>
  );
}
 
export default NavList;