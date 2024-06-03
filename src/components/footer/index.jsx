const Footer = () => {
  const year = new Date().getFullYear();

  return (  
    <footer className="px-2 py-5 w-full bg-[#0a0416]">
      <div className="flex items-center justify-center">
        <p className=" px-20">Developed by Ruslan Suzanskyi</p>
        <span className=" px-20"> Copyright © {year} RS </span>
      </div>
    </footer>
  );
}
 
export default Footer;