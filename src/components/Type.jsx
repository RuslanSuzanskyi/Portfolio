import Typewriter from 'typewriter-effect';

const Type = () => {
  return (  
    <Typewriter
      options={{
        strings: [
          'Front-End Developer',
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
        delay: 85,
      }}
    />
  );
}
 
export default Type;