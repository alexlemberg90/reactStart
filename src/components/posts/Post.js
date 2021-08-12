export default function Post({onePost: post}) {
  return (
    <div>
      id - {post.id}<br/>
      title - {post.title}<br/>
      body - {post.body}
      <hr/>

    </div>
  );
}