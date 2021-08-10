export default function Simpson({name, surname, age, info, photo}) {
  return (
    <div>
      <h2>
        Name - {name};<br/>
        Surname - {surname};<br/>
        Age - {age};<br/>
      </h2><br/>
        <h3>
          Info:
            {info}
        </h3>
        <img src={photo} alt={'img'}/>
      <hr/>
    </div>
  );
}