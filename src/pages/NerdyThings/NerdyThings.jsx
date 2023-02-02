import ThingCard from "../../components/ThingCard/ThingCard";
import { Link } from "react-router-dom";

const NerdyThings = ({things}) => {
  return ( 
    <>
      <h1>Nerdy Things</h1>
      <Link to='/'>Home</Link>

      {things.map((thing, idx) =>(
        <ThingCard key={idx} thing={thing} />
      ))}
    </>
  );
}

export default NerdyThings;