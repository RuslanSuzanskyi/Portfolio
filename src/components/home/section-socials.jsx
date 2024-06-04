import Wrapper from "../wrapper/Wrapper";
import { Link } from "react-router-dom";
import { socials } from "../constants";

const SectionSocials = () => {
  return (  
    <section className="mb-60">
      <Wrapper>
        <div className="flex flex-col items-center gap-4">
          <h1>FIND ME ON</h1>
          <p>Fill free to <span className="text-[#cd5ff8] font-bold">connect</span> with me</p>
            <ul className="flex items-center justify-center gap-4">
              {socials.map(social => 
                <li key={social.id}>
                  <Link to={social.link} target="_blank">
                    {social.icon}
                  </Link>
                </li>
              )}
            </ul>
        </div>
      </Wrapper>
    </section>
  );
}
 
export default SectionSocials;