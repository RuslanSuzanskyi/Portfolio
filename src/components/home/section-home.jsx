import Wrapper from "../wrapper/Wrapper";
import HomeMainImg from "../../assets/home-main.png";
import Type from "../Type";

const SectionHome = () => { 
  return (  
    <section className="pt-60 mb-60">
      <Wrapper>
        <div className="flex justify-between">
          <div>
            <div className="px-3 pt-20 text-5xl font-medium mb-16">
              <h1 className="pb-4 mb-2">Hello There! </h1>
              <h1 className="pb-4 mb-2">I'm <span className="text-[#cd5ff8] font-bold">Ruslan Suzanskyi</span></h1>
            </div>
            <div className="px-3">
              <Type />
            </div>
          </div>
          <div className="pb-5 px-3">
            <img src={HomeMainImg} alt="home pic" className="max-h-[450px] max-w-[450px]"/>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
 
export default SectionHome;