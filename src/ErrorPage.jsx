import { useNavigate, useRouteError } from "react-router-dom";


const ErrorPage = () => {

    const navigate = useNavigate() ;

    const handleGoBack = () => {
        navigate(-1)
    }

    const error = useRouteError() ;
console.log(error)
    return (
        <div>
            <h1>Oops..!!!</h1>
            <h2>{error.status}</h2>
            <h2>{error.statusText}</h2>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default ErrorPage;