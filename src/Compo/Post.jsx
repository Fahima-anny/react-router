import { Link, useNavigate } from "react-router-dom";

const Post = ({post}) => {

    const postStyle = {
        border: '2px solid black ',
    padding: '10px',
    margin: '10px',
    backgroundColor: 'cyan',
    borderRadius: '20px'
    }

    const navigate = useNavigate() ;

    const handleShowDetails = () => {
navigate(`/posts/${post.id}`)
    }

    const handleGoBack = () => {
        navigate(-1)
    }

    return (
        <div style={postStyle}>
            <h2> {post.title}</h2>
            <button><Link to={`/posts/${post.id}`}>See Details</Link></button>
            <button onClick={handleShowDetails}>Show post Details</button>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default Post;