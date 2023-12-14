import React from "react"
import { Link } from 'react-router-dom'
import axios from 'axios'
import DeleteAuthor from "./DeleteAuthor"
import "./allAuthors.css"

const AllAuthors = () => {
    const [authors, setAuthors] = React.useState([])
    const [isDeleted, setIsDeleted] = React.useState(false)

    React.useEffect(() => {
        axios.get(`http://localhost:8000/api/authors`)
            .then(res => setAuthors(res.data.authors))
            .catch(err => console.log(err))
    }, [isDeleted])
    console.log('here')
    const handleDelete = (id) => {
        setAuthors(authors.filter(a => a._id == id))
        setIsDeleted(true)
    }
    return (
        <div className="container">
            <Link  to='/new'>Add Author</Link>
            
            <table className="table">
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {authors.map(author =>
                        <tr key={author._id}>
                            <td>{author.name}</td>
                            <td>
                                <Link to={`/edit/${author._id}`}>Edit</Link>
                                <DeleteAuthor id={author._id} handleDelete={() => handleDelete(author._id)} />
                            </td>
                        </tr>)}
                </tbody>
            </table>
        </div>
    )
}

export default AllAuthors