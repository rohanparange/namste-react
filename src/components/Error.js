import { useRouteError } from "react-router-dom";

const Error = ()=>{
    const err = useRouteError();
    return (
        <div>
            <h1>Error Page</h1>
            <h2>{err.statusText}</h2>

        </div>
    )
}

export default Error;