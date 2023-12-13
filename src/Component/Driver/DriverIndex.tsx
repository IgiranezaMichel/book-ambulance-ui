import { Link } from "react-router-dom"

export const DriverIndex=()=>{
    return(
        <div className="table-responsive  m-auto container">
            <section className="card p-0 rounded-0 mb-3 col-sm-6 border-2 border-danger-subtle " style={{borderColor:'transparent'}} >
    <div className="row g-0">
        <div className="col-sm-4 card rounded-0 p-0" style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <i className="display-1 bi bi-truck"></i>
        </div>
        <div className="col-sm-8  rounded-0 bg-primary p-0">
            <div className="card-body">
                <h5 className="card-title">Ambulance status</h5>
                <p className="card-text">
                    <i className="rounded-pill fs-4 bg-success text-white  py-1 px-2 bi bi-people-fill"></i>
                    <span className="fw-bolder text-bg-success p-1 rounded-2 mx-3"> 
                        <span className="badge bg-light text-dark fw-bolder"
                        > 3</span>active
                    </span>
                </p>
                <p className="card-text">
                    <i className="rounded-pill fs-4 bg-warning text-white  py-1 px-2 bi bi-truck"></i>
                    <span className="fw-bolder text-bg-info p-1 rounded-2 mx-3"> 
                        <span className="badge bg-light text-dark fw-bolder"
                        > 3</span> available booking
                    </span>
                </p>
            </div>
        </div>
    </div>
</section>
        <table className="table table-light">
            <thead>
                <tr>
                    <th colSpan={5} className="bg-primary">
                    <p className="card-text">
                    <Link to={'/'} >
                        <button className="text-bg-dark p-2 rounded-2 nav-item fw-bolder">
                            <div className="form-check form-switch">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="flexSwitchCheckDefault"
                                />
                                <label className="form-check-label"
                                    >off</label>
                            </div>
                            <div className="form-check form-switch">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="flexSwitchCheckChecked"
                                    checked
                                />
                                <label className="form-check-label" 
                                    >on</label>
                            </div>
                            </button>
                    </Link>
                </p>
                        <span className="display-6">Booking List</span></th>
                </tr>
                <tr>
                    <th scope="col">Patirnce</th>
                    <th scope="col">Contact</th>
                    <th scope="col">Location</th>
                    <th scope="col">Date</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr className="">
                    <td>
                        <i className="bi bi-person-fill"></i>
                    </td>
                    <td>
                        <i className="bi bi-phone-fill"></i>
                    </td>
                    <td>
                        <i className="bi bi-geo-alt-fill"></i>
                    </td>
                    <td>
                        <i className="bi bi-calendar"></i>
                    </td>
                    <td>
                        <i className="bi bi-check rounded-pill bg-success px-1 text-light fs-3"></i>
                    </td>
                </tr>
            </tbody>
                </table>
    </div>
    )
}