import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    // const handleClick = (e) => {
    //     console.log("Hello, Ninja", e);
    // }

    // const handleClickAgain = (name, e) => {
    //     console.log("Hello " + name, e.target);
    // }

    // const [name, setName] = useState("ruby");
    // const [age, setAge] = useState(25)

    // const handleClickName = () =>{
    //     setName("savita");
    // }

    // const [blogs, setBlogs] = useState([
    //     {title: "blog1", body: "writting logs 1", author: "uday 1", id: 1},
    //     {title: "blog2", body: "writting logs 2", author: "uday 2", id: 2},
    //     {title: "blog3", body: "writting logs 3", author: "uday 1", id: 3}
    // ]);

    // const [blogs, setBlogs] = useState(null);
    // const [isPending, setIsPending] = useState(true);
    // const [error, setError] = useState(null);

    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id);
    //     setBlogs(newBlogs);
    // }

   {/* useEffect(() => {
        console.log("You rendered...... useEffect call")
    }, [name]) */}

    // useEffect(() => {
    //     setTimeout(() => {
    //         fetch("http://localhost:8000/blogs")
    //         .then(res => {
    //             if(!res.ok){
    //                 throw Error('Could not fetch data from resource');
    //             }
    //             return res.json();
    //         })
    //         .then(data =>{
    //             console.log(data);
    //             setBlogs(data);
    //             setIsPending(false);
    //         })
    //         .catch(err => {
    //             console.log(err.message);
    //             setError(err.message);
    //         })
    //     }, 1000)
    // },[])

    const {data: blogs, isPending, error} = useFetch("http://localhost:8000/blogs");

    return ( 
        <div className="home">
            {error && <div> {error} </div>}
            {isPending && <div>loading...</div>}
             {/* { blogs && <BlogList blogs={blogs} title={"All Blogs"} handleDelete={handleDelete} />} */}
             { blogs && <BlogList blogs={blogs} title={"All Blogs"} />}
            {/*<BlogList blogs={blogs.filter((blog) => blog.author === "uday 1")} title={"All Blogs"} /> */}

            {/* pass the function as reference not invoked */}
            {/* <button onClick={handleClick}> Click me</button>
            {name} is {age} year old.
            <button onClick={(e) =>handleClickAgain("ok...", e)}>CLick me again</button>
             */}
             {/* <button onClick={handleClickName}>Change Name</button> */}
        </div>
     );
}
 
export default Home;
