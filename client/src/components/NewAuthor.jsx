import React from "react";
import axios from "axios";
import FormAuthor from './FormAuthor';
import { Link } from 'react-router-dom';


const NewAuthor = () => {
    const [author, setAuthor] = React.useState({
        name: ''
    });
    const [isCreated, setIsCreated] = React.useState(false);
    const [errors, setErrors] = React.useState([]);

    const handleChange = (e) => {
        setIsCreated(false);
        setAuthor({ ...author, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:5000/api/authors/new`, author)
            .then(res => {
                setIsCreated(true);
                
                window.location.href = '/';
            })
            .catch(err => {
                const data = err.response.data;
                const errorMessages = [];
                if ("errors" in data) {
                    for (let field in data.errors) {
                        const validationError = data.errors[field];
                        errorMessages.push(validationError.message);
                    }
                }
                setErrors(errorMessages);
            });
    };

    return (
        <div>
            <Link className="linked" to="/">Home</Link>
            <div className="containerDiv">
                <h3 className="mt-5">Add a new author</h3>
                {errors.map((errorMessage, index) => (
                    <div key={index}>{errorMessage}</div>
                ))}
                <FormAuthor author={author} handleChange={handleChange} handleSubmit={handleSubmit} />
            </div>
        </div>
    );
};

export default NewAuthor;