import Address from "./Address";

export default function User({id, name, username, email}) {
  return (
    <div>
    <h2>
      Id - {id};<br/>
      Name - {name};<br/>
      Username - {username}<br/>
      Email - {email}<br/>
    </h2>
    <Address street={'Kulas Light'}
      suite={'Apt. 556'}
      city={'Gwenborough'}
      zipcode={'92998-3874'}/>
    </div>
  );
}