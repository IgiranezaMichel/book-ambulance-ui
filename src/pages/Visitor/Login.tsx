import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Login=()=>{
const [email,setEmail]=useState('');
const [password,setPassword]=useState('');
const loginHandler=()=>{
    if(email.length==0) toast.error('Email is required');
    else if(password.length==0) toast.error('Password is required');
    else toast('loading');
}
 
return(
<main>
    <div className="container-fluid pt-lg-5 bg-primary overflow-auto mb-5 fixed-top h-100" >
        <div className="container pt-lg-5">
            <div className="row g-5 pt-1 mb-2">
                <section className="col-lg-6 align-self-center text-center text-lg-start mb-lg-5">
                    <h1 className="display-4 text-white mb-4 fw-bolder">Find Hospital Ambulance online</h1>
                    <p className="text-white mb-4">Tempor rebum no at dolore lorem clita rebum rebum ipsum
                        rebum stet dolor sed justo kasd. Ut dolor sed magna dolor sea diam. Sit diam sit
                    </p>
                    <Link to={'/'} className="btn btn-light py-sm-3 px-sm-5 rounded-pill me-3">Home</Link>
                    <Link to={'/signup'} className="btn btn-outline-light py-sm-3 px-sm-5 rounded-pill">SignUp</Link>
                </section>
                <section className="col-lg-6">
                    <div className="bg-white border  text-dark  mt-lg-5">
                        <span className="bi bi-person d-block text-center display-6 mt-3"></span>
                        <nav className="card-title border-bottom fw-bolder text-center fs-3 p-3">Login</nav>
                        <section className='p-4'>
                            <div className="mb-3">
                                <span  className="form-span">Email</span>
                                <input type="email" value={email} onChange={e=>setEmail(e.target.value)} className="form-control rounded-0" placeholder="example@gmail.com" />
                            </div>
                            <div className="mb-3">
                                <span  className="form-span">Password</span>
                                <input type="password" value={password} onChange={e=>setPassword(e.target.value)} className="form-control rounded-0" placeholder="Enter password" />
                            </div>
                            <div className="modal-footer">
                                    <button type="button" onClick={loginHandler} className="btn btn-outline-success fw-bolder">Submit</button>
                            </div>
                        </section>
                    </div>
                </section>
            </div>
        </div>
    </div>
    <ToastContainer />
</main>
)
}
export default Login;