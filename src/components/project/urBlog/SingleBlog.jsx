

const SingleBlog = ({blogs, title}) => {
  return (
    <div>
      <h2>{title}</h2>
      {
        blogs.map(blog => (
          <div className='single_blog'>
            <p>{blog.title}</p>
            <p>{blog.body}</p>
            <p>{blog.author}</p>
          </div>
          
        ))}
    </div>
  )
}

export default SingleBlog;
