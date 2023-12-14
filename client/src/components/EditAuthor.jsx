import React, { useState, useEffect } from "react";
import axios from "axios";
import FormAuthor from './FormAuthor';
import { Link, useParams } from 'react-router-dom';

const EditAuthor = () => {
    const [author, setAuthor] = useState({
        name: ''
    });
    const [isCreated, setIsCreated] = useState(false);
    const [errors, setErrors] = useState([]);
    const { id } = useParams();
    const [isIdExist, setIsIdExist] = useState(true);

    useEffect(() => {
        axios.get(`http://localhost:5000/api/authors/${id}`)
            .then(res => setAuthor(res.data.author))
            .catch(err => setIsIdExist(false));
    }, [id]);

    const handleChange = (e) => {
        setIsCreated(false);
        setAuthor({ ...author, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:5000/api/authors/update/${id}`, author)
            .then(res => {
                setIsCreated(true);
                // Use window.location to navigate to the home page
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
            {!isIdExist ?
                <div className="containerDiv">
                    <p>"We're sorry, but we could not find the author you are looking for. Would you like to add this author to our database?</p>
                    <Link to='/new'>Click here please</Link>
                </div> :
                <div className="containerDiv">
                    <h3>Edit this author</h3>
                    {errors.map((errorMessage, index) => (
                        <div key={index}>{errorMessage}</div>
                    ))}
                    <FormAuthor author={author} handleChange={handleChange} handleSubmit={handleSubmit} />
                </div>
            }
        </div>
    );
};

export default EditAuthor;