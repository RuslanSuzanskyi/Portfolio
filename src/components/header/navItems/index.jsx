import { Link } from "react-router-dom";
import Icon from "../../../assets/Icon";

const NavItems = ({ text }) => {
  return (  
    <>
      <li>
        <Link to='/'>
          <Icon id="home"/>
          <span>{ text }</span>
        </Link>
      </li>
    </>
  );
}
 
export default NavItems;