import { Link } from "react-router-dom"

export const Err404=()=>{
return(
<main>
    <div className="container-fluid justify-content-center d-flex bg-primary overflow-auto mb-5 fixed-top h-100" style={{alignItems:'center'}}>
        <div className="" >
            <span className="display-1 d-block text-center fw-bolder ">404</span>
            <span className="d-block text-center mt-4 mb-1 text-bg-dark text-light fw-bold rounded-3">Page not found</span>
            <div className="">
                <Link to={'/'} className="btn btn-light rounded-pill me-3">Home</Link>
                <Link to={'/signup'} className="btn btn-light rounded-pill me-3">SignUp</Link>
                <Link to={'/login'} className="btn btn-light rounded-pill">Login</Link>
            </div>
        </div>
    </div>
</main>
)
}