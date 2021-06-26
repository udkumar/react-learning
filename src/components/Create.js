import { useState } from "react";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState("mario");

    const [isPending, setIsPending] = useState(false);
    
    // Submit the form
    const handSubmit = (e) => {
        e.preventDefault();
        const blogs = { title, body, author};
        console.log(blogs);
        setIsPending(true);
        fetch("http://localhost:8000/blogs", { 
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blogs)
        })
        .then(() => {
            console.log("blog added");
            setIsPending(true);
        })
    }

    return ( 
        <div className="create">
            <h2>Add New Blog</h2>
            <form onSubmit={handSubmit}>
                <label> Blog Title:</label>
                <input 
                type="text"
                required 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
                <label> Blog Body:</label>
                <textarea
                required
                value={body}
                onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Author</label>
                <select
                value={author}
                onChange={(e) => setAuthor(e.target.value)}>
                    <option value="mario">Mario</option>
                    <option value="yoshi">Yoshi</option>
                </select>
                <button>Add blog</button>
                <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p>
            </form>
        </div>
     );
}
 
export default Create;