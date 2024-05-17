import NavItems from "../navItems";

const NavList = () => {
  return (  
    <>
     <ul className="flex items-center justify-between gap-4">
      <NavItems text="Home"/>
      <NavItems text="About"/>
      <NavItems text="Projects"/>
      <NavItems text="Resume"/>
      <NavItems/>
     </ul>
    </>
  );
}
 
export default NavList;