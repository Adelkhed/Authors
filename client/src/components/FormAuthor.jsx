import { Link } from "react-router-dom"
const FormAuthor = (props) => {
    const { author, handleChange, handleSubmit, value } = props

    return (
        <form className="containerForm" onSubmit={handleSubmit}>
            <div className="containerDiv">
                <label>Name:</label>
                <input  value={author.name} name="name" onChange={handleChange} />
            </div>
            <div className="containerDiv">
                <input  value={value} type="submit" />
                <Link  to="/">Cancel</Link>
            </div>
        </form>
    )
}

export default FormAuthor;