import { Link } from 'react-router-dom';
import { useState } from "react";

const Carrer = () => {

    const [subject, setSubject] = useState('CS');

    const course = "Many CS, STAT and MATH..."; 

    const [show, setShow] = useState(false);

    return (
        <div className="carrer">
          <h2>Education</h2>
          <div className="edu">
            <p>Undergraduate Study: <a href="https://uwaterloo.ca/">University of Waterloo</a></p>
            <p>Program: BMath Data Science</p>
            <Link to="/carrer/education">Summary</Link>
          </div>
          <h2>Work</h2>
          <div className="work">
            <p>I did some marker job in University</p>
            <p>Here are some project I made, please visit my <a href="https://github.com/HQisnb">Github</a></p>
            <p>No extra page for it so far...</p>
          </div>

          <div className="edu-data">
            <p>This is the place to show more detailed info about the courses that I have taken: </p>
            <label>Subject: </label>
            <select
            required 
            value={subject} 
            onChange={(e) => setSubject(e.target.value)}>
                <option value="CS">CS</option>
                <option value="STAT">STAT</option>
                <option value="OTHER">OTHER</option>
            </select>
            <button onClick={() => setShow(true)}>Show</button>
            <button onClick={() => setShow(false)}>Close</button>
            <h1>{course}</h1> 
           
          </div>
        </div>
        
      );
}
 
export default Carrer;
