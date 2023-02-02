import { Link } from "react-router-dom"

const Landing = () => {
  return (
    <>
      {/* All the <Link> components should live here */}
      <h1>All-The-Things</h1>
      <Link to="/the-manliest-things">Ben's Things</Link><br/>
      <Link to="/the-well-styled-things">Rosebud's Things</Link><br/>
      <Link to="/the-silly-things">Hunter's Things</Link><br/>
      <Link to="/the-nerdy-things">Patrick's THings</Link><br/>
      <Link to='/the-nature-things'>Mary's Things</Link><br />
    </>
  )
}
 
export default Landing