import Geo from "./Geo";

export default function Address({street, suite, city, zipcode}) {
  return (
    <div>
    <h3>
      <h2>Address : </h2>
      Street - {street};<br/>
      Suite - {suite};<br/>
      City - {city};<br/>
      Zipcode - {zipcode};<br/>
    </h3>
    <Geo lat={'-37.3159'}
      lng={'81.1496'}/>
    </div>
  );
}