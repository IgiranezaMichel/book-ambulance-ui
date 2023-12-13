import { Link } from "react-router-dom";

const UserHistory=()=>{
return(
<>
<section className="container">
<section className="card p-0 rounded-0 mb-3 col-sm-6 border-2 border-danger-subtle " style={{borderColor:'transparent'}} >
    <div className="row g-0">
        <div className="col-sm-4 card rounded-0 p-0" style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <i className="display-1 bi bi-truck"></i>
        </div>
        <div className="col-sm-8  rounded-0 bg-primary p-0">
            <div className="card-body">
                <h5 className="card-title">Booking status</h5>
                <p className="card-text">
                    <i className="rounded-pill fs-4 bg-success text-white  py-1 px-2 bi bi-people-fill"></i>
                    <span className="fw-bolder text-bg-success p-1 rounded-2 mx-3"> 
                        <span className="badge bg-light text-dark fw-bolder"
                        > 3</span>Success booking 
                    </span>
                </p>
                <p className="card-text">
                    <i className="rounded-pill fs-4 bg-warning text-white  py-1 px-2 bi bi-people-fill"></i>
                    <span className="fw-bolder text-bg-danger p-1 rounded-2 mx-3"> 
                        <span className="badge bg-light text-dark fw-bolder"
                        > 3</span>Canceled booking 
                    </span>
                </p>
            </div>
        </div>
    </div>
</section>
    <div className="table-responsive  m-auto">
        <table className="table table-light">
            <thead>
                <tr>
                    <th colSpan={4} className="bg-primary">
                    <p className="card-text">
                    <Link to={'/'} >
                        <button className="text-bg-dark p-2 rounded-2 nav-item fw-bolder">Book now <i className="bi bi-plus rounded bg-light text-dark px-1 rounded-pill" aria-hidden="true"></i> </button>
                    </Link>
                </p>
                        <span className="display-6">Booking List History</span></th>
                </tr>
                <tr>
                    <th scope="col">Car plate number</th>
                    <th scope="col">Destination</th>
                    <th scope="col">Booking Date</th>
                    <th scope="col">Status</th>
                </tr>
            </thead>
            <tbody>
                <tr className="">
                    <td scope="row">R1C1</td>
                    <td>R1C2</td>
                    <td>R1C2</td>
                    <td>R1C2</td>
                </tr>
            </tbody>
                </table>
    </div>
</section>
</>
)
}
export default UserHistory;