import { Link } from "react-router";

const Error = () => {
    return(
        <div className="h-screen flex flex-col items-center justify-center gap-2">
            <h1 className="text-3xl font-bold">Error has occured</h1>
            <p>Maybe you have come through a wrong path </p>
            <Link to="/" className="btn btn-neutral">Go back</Link>
        </div>
    )
}

export default Error;