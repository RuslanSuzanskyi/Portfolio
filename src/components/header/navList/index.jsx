import { Link } from "react-router-dom";

const NavList = ({ items = [] }) => {
  return (  
    <>
     <ul className="flex gap-6"> 
        {items.map((item, index) => 
          <li key={item.id} className="flex items-center justify-center">
            {index === items.length - 1 ? 
            (
              <Link to={item.to} 
                className="
                bg-[#934cce5e] 
                  flex 
                  items-center 
                  py-3 
                  h-9 
                  rounded-md 
                  border-none 
                  px-6 relative 
                  transition 
                  duration-[400ms]
                hover:bg-[#623686]
                  hover:-translate-y-0.5
                "
              >
                <div>{item.icon}</div>
              </Link>
            ) : 
            ( 
              <Link to={item.to} className="flex items-center px-4 py-2 transition duration-[400] underline-animation">
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