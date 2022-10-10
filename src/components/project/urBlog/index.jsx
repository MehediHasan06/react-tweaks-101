import { useState } from "react";
import GetBlog from "./getBlogs";
import SingleBlog from "./SingleBlog";

const BlogSite = () => {
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
  ]);

  return (
    <div>
      <SingleBlog blogs={blogs} title={blogs.title}/>
      <SingleBlog blogs={blogs.filter( blog => blog.author === "mario")}/>

      <GetBlog/>
    </div>

    
  )
}

export default BlogSite;
