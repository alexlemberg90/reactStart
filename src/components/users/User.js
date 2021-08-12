export default function User({oneUser}) {
  return (
    <div>
      name - {oneUser.name};<br/>
      username - {oneUser.username};<br/>
      email - {oneUser.email};<br/>
      address:<br/>
        street - {oneUser.address.street}<br/>
        suite - {oneUser.address.suite}<br/>
        city - {oneUser.address.city}<br/>
        zipcode - {oneUser.address.zipcode}<br/>
        geo: lat -{oneUser.address.geo.lat} lng - {oneUser.address.geo.lng}<br/>
      phone - {oneUser.phone}<br/>
      website - {oneUser.website}<br/>
      company:<br/>
        name - {oneUser.company.name}<br/>
        catchPhrase - {oneUser.company.catchPhrase}<br/>
        bs -{oneUser.company.bs}
        <hr/>
    </div>
  );
}