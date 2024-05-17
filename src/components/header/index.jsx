import { Link } from "react-router-dom";
import { ReactComponent as LogoIcon } from "../../assets/logo.svg";
import Wrapper from "../wrapper/Wrapper";
import NavList from "./navList";

const Header = () => {
  return (  
    <header className=" h-20 p-2 flex items-center">
      <Wrapper>
        <nav className="flex items-center justify-between">
          <div className="w-12 h-12">
            <Link to='/'>
              <LogoIcon />
            </Link>
          </div>
          <NavList />
        </nav>
      </Wrapper>
    </header>
  );
}
 
export default Header;