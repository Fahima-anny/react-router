import { Link } from "react-router-dom";


const User = ({user}) => {

const {id, name, email, website} = user ;

const userStyle = {
    border: '2px solid black ',
padding: '10px',
margin: '10px',
backgroundColor: 'cyan',
borderRadius: '20px'
}

    return (
        <div style={userStyle}>
            <h2>{id}: {name}</h2>
            <h3>{email}</h3>
            <h3>{website}</h3>
            <Link to={`/users/${id}`}>Show Details</Link>
        </div>
    );
};

export default User;