import { Link } from "react-router-dom";
// const BlogList = (props) => {
// const BlogList = ({blogs, title, handleDelete}) => {
const BlogList = ({blogs, title}) => {
    // const blogs = props.blogs;
    // const title = props.title;

    return ( 
        <div className="blog-list">
            {title}
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                        <h3>{blog.title}</h3>
                        <p>Author by: {blog.author }</p>
                        {/* <button onClick={() => handleDelete(blog.id)}> delete </button> */}
                    </Link>
                    
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;