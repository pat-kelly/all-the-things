import ThingCard from "../../components/ThingCard/ThingCard";
import { Link } from "react-router-dom";

const NatureThings = ({things}) => {
  return (  
    <>
      <h3>Mary's Nature Things</h3>
      <Link to='/'>Home</Link>
      {things.map(thing => (
        <ThingCard thing={thing}/>
      ))}
    </>
  );
}

export default NatureThings