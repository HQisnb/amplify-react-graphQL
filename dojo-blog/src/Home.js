import { useState, useEffect } from 'react';
import BlogList from './bloglist';
import useFetch from './useFetch';


const Home = () => {
    // let name = 'mario';

    const [name, setName] = useState('mario');
    const [age, setAge] = useState(25);


    const {data: blogs, pending, error} = useFetch('http://localhost:8000/blogs');

//   const [blog, setBlog] = useState(null);    

    const handleClick = () => {
    //    name = 'luigi';
      //  console.log(name);
      setName('luigi');
      setAge(age + 5);
    }

    const handleClickAgain = (name, e) => {
        console.log('hello ' + name, e.target, e.target);
    }

    const handleDelete = (id) => {
     //   const newBlogs = blog.filter((blog1) => blog1.id !== id);
     //   setBlog(newBlogs);
    }

    

   

    return (  
        <div className="home">
            <h2>Homepage</h2>

            {error && <div>{error}</div>}

            {pending && <div>Loading...</div>}


            {blogs && <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />}
            <button onClick={() => setName('luigi')}>change name</button>
            { /*blogs && <BlogList blogs={blogs.filter((blog) => blog.author === 'a')} title="A's Blogs" />}*/}  
            <p>{ name } is { age } years old</p>
            <button onClick={handleClick}>Click me</button>
            <button onClick={(e) => {
                handleClickAgain('mario', e);
            }}>Click me again</button>
        </div>
    );
}
 
export default Home;