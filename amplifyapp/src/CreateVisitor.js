import { useState } from "react";
import { useHistory } from 'react-router-dom';

const Visitor = () => {

    const [name, setName] = useState('');
    const [body, setBody] = useState('');
    const [rate, setRate] = useState('Love it');
    const [job, setJob] = useState('Other');

    const history = useHistory();
    

    const handleSubmit = (e) => {
        e.preventDefault();
        const visitor = { name, body, rate, job };
        console.log(visitor);
        console.log("added");
    }

    return (
        <div className="make-visitor">
            <h2>You don't have to, but...</h2>
            <p>Wish you can leave some infomation about you!</p>
            <h1>Thanks for your time, but this is not done yet.</h1>
        </div>
      );
}
 
export default Visitor;