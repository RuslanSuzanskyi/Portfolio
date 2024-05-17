import Icons from "./sprite.svg";

const Icon = ({ id, classname }) => {
  return (  
    <svg className={classname}>
      <use href={Icons + '#icon-' + id}></use>
    </svg>
  );
}
 
export default Icon;