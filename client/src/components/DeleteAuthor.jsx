import axios from "axios"

const DeleteAuthor = (props) => {
    const handleClick = () => {
        axios.delete(`http://localhost:5000/api/authors/delete/${props.id}`)
            .then( props.handleDelete(props.id))
            .catch( err => console.log(err))
    }
    return (
        <input type="submit" className="btn btn-dark" value="Delete" onClick={handleClick}/>
    )
}

export default DeleteAuthor