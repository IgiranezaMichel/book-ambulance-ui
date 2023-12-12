import {Link} from 'react-router-dom'
export const Hospital=()=>{
return(
<main className="container">
<div className="row g-0 col-sm-5">
    <div className="col-sm-4 card rounded-0 p-0" style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        <i className="display-1 bi bi-hospital-fill"></i>
    </div>
    <div className="col-sm-8 card rounded-0 bg-primary p-0">
        <div className="card-body">
            <h5 className="card-title fw-bolder text-light">Hospital</h5>
            <p className="card-text">
                <i className="rounded-pill fs-4 bg-success text-white  py-1 px-2 bi bi-people-fill"></i>
            </p>
            <p className="card-text">
                <i className="rounded-pill border fs-4 bg-primary text-white py-1 px-2 bi bi-hospital-fill"></i>
            </p>       
            <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
            </p>
        </div>
    </div>
</div>  
<Link to={'hospital/0/add'} type="button" className="btn btn-outline-light rounded-pill px-2 border-3 py-1 my-3"><i className="bi bi-plus" aria-hidden="true"></i></Link> 

<div className="table-responsive m-auto">
    <table
        className="table table-striped table-hover table-borderless table-primary align-middle"
    >
        <thead className="table-light">
            <tr>
                <th>Name</th>
                <th>Location</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody className="table-group-divider">
            <tr className="table-primary">
                <td scope="row"><i className="bi bi-hospital-fill"></i></td>
                <td><i className="bi bi-house-fill"></i></td>
                <td >
                    <Link to={'hospital/2/update'} className='btn'><i className="bi bi-pencil" aria-hidden="true"></i></Link>
                    <Link to={'hospital/0/delete'} className='btn'><i className="bi bi-trash" aria-hidden="true"></i></Link>
                </td>
            </tr>
        </tbody>
        <tfoot> 
        </tfoot>
    </table>
</div>
{/* modals */}
</main>
)
 }