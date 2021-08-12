export default function Comment({oneComment: comment}) {
  return (
    <div>
      <h2>ID - {comment.id}</h2>
      email - {comment.email}<br/>
      name - {comment.name}<br/>
      body - {comment.body}
      <hr/>
    </div>
  );
}