import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    setTimeout(() => {
      navigate(-1)
    }, 1000)
  }, [navigate]);

  return ( 
    <>
      <h1>404 - Not Found</h1>
      <p>Opps! Sorry, the page you are looking for does not exist.</p>
    </>
  );
}
 
export default NotFound;