import { useLoaderData } from "react-router-dom";


const UserDetails = () => {

    const user = useLoaderData() ;

    return (
        <div>
            <h2>User Details: {user.name}</h2>
        </div>
    );
};

export default UserDetails;