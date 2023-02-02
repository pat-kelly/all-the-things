import ThingCard from "../../components/ThingCard/ThingCard";

const NatureThings = ({things}) => {
  return (  
    <>
      <h3>Mary's Nature Things</h3>
      {things.map(thing => (
        <ThingCard thing={thing}/>
      ))}
    </>
  );
}

export default NatureThings