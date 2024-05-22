import { Link } from "react-router-dom";

const NavItems = ({ text, icon, to }) => {
  return (  
    <>
      <ul>
        <li>
          <Link to={to} className="flex items-center px-4 py-2">
            <div className="px-1 py-1">{ icon }</div>
            <span className="pl-1">{ text }</span>
          </Link>
        </li>
      </ul>
    </>
  );
}
 
export default NavItems;