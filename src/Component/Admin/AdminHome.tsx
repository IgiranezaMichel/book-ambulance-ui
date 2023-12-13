import { GET_ALL_HOSPITAL } from "../../GraphQl/Query";
const AdminHome=()=>{
    var numberOfAvailableHospital=0;
    const getAllHospital=async()=>{
        try {
         const hospital=GET_ALL_HOSPITAL();
         numberOfAvailableHospital=hospital.data.getAllHospital.length;
          
        } catch (error) {
            
        }
    }
    getAllHospital();
    return(
  <main className="overflow-auto gap-2 row col-sm-10 m-auto">
    <div className="card p-0 rounded-0 mb-3 col-sm-6 border-0 " style={{maxWidth: "540px",borderColor:'transparent'}} >
        <div className="row g-0">
            <div className="col-sm-4 card rounded-0 p-0" style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <i className="display-1 bi bi-people-fill"></i>
            </div>
            <div className="col-sm-8 card rounded-0 bg-primary p-0">
            <div className="card-body">
                    <h5 className="card-title">User</h5>
                    <p className="card-text">
                        <i className="rounded-pill fs-4 bg-success text-white  py-1 px-2 bi bi-people-fill"></i>
                    </p>
                    <p className="card-text">
                        <i className="rounded-pill border fs-4 bg-primary text-white py-1 px-2 bi bi-hospital-fill"></i>
                    </p>
                    
                    <p className="card-text">
                        <small className="text-muted"
                            >Last updated 3 mins ago</small>
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div className="card p-0 rounded-0 mb-3 col-sm-6 border-0 " style={{maxWidth: "540px",borderColor:'transparent'}} >
        <div className="row g-0">
            <div className="col-sm-4 card rounded-0 p-0" style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <i className="display-1 bi bi-hospital"></i>
            </div>
            <div className="col-sm-8 card rounded-0 bg-info p-0">
                <div className="card-body">
                    <h5 className="card-title">Hospital</h5>
                    <p className="card-text">
                        <i className="rounded-pill fs-4 bg-success text-white  py-1 px-2 bi bi-hospital-fill"></i> 
                        <span className="fw-bolder text-bg-success p-1 rounded-2"> <span
                            className="badge bg-light text-dark fw-bolder"
                            >{numberOfAvailableHospital}</span> Hospital 
                        </span>
                    </p>
                    <p className="card-text">
                        <i className="rounded-pill fs-4 bg-primary text-white py-1 px-2 bi bi-truck"></i>
                    </p>
                    
                    <p className="card-text">
                        <small className="text-muted"
                            >Last updated 3 mins ago</small>
                    </p>
                </div>
            </div>
        </div>
    </div>
  </main>
    )
}
export default AdminHome;