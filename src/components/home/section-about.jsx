import Wrapper from "../wrapper/Wrapper";

const SectionAbout = () => {
  return (  
    <section className="mb-60">
      <Wrapper>
        <div className="flex items-center justify-between">
          <div className="flex max-w-3xl flex-col px-3">
            <h1 className="uppercase mb-3 text-4xl text-center">LET ME <span className="text-[#cd5ff8] font-bold">INTRODUCE</span> MYSELF</h1>
            <p className="pt-12">
              I'm obsessed of programming. <br />
              <br />
              I mainly work with <span className="text-[#cd5ff8] font-bold">Javascript</span> and other <span className="text-[#cd5ff8] font-bold">Libraries</span> and <span className="text-[#cd5ff8] font-bold">Frameworks.</span> <br />
              <br />
              My field of interests are building <span className="text-[#cd5ff8] font-bold">Websites</span> and <span className="text-[#cd5ff8] font-bold">Web Applications.</span><br />
              <br />
              I also apply my passion for developing with <span className="text-[#cd5ff8] font-bold">PHP, Typescript, Node.js, Python, etc.</span>
            </p>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
 
export default SectionAbout;