import { Link, useParams } from "react-router-dom"
import { GET_USER_BY_ID } from "../../GraphQl/Query";
 

export const CrudUser=()=>{
    const {id,action}=useParams();
    console.log(id)
const datas=GET_USER_BY_ID('1').data;
   
 console.log(datas)
    return(
        <main>
        <div className="container-fluid justify-content-center d-flex bg-primary overflow-auto mb-5 fixed-top h-100" style={{alignItems:'center'}}>
            <div className="" >
            <section className="row col-12 gap-5 p-5">
            <div className="card col-sm-4 m-auto">
                <div className="card-body">
                    <h4 className="card-title text-center"><i className="bi bi-person-fill"></i></h4>
                    <p className="card-text">
                        <i className="bi bi-person-fill"></i> name
                    </p>
                    <p className="card-text">
                        <i className="bi bi-person-fill"></i> gender
                    </p>
                    <p className="card-text">
                        <i className="bi bi-envelope-fill"></i> email
                    </p>
                    <p className="card-text">
                        <i className="bi bi-phone-fill"></i> tel
                    </p>
                </div>
            </div>
            <div className="card col-sm-6">
                <div className="card-body">
                    <h4 className="card-title text-center">
                        <span className="text-bg-primary p-1 rounded-3">{action} account</span>
                    </h4>
                    <section className="card-text">
                        <form className="row g-3 needs-validation" >
                          <div className="col-md-4">
                            <span  className="form-span">First name</span>
                            <input type="text" className="form-control border-2 rounded-0 border-dark" id="validationCustom01" value="Mark" required/>
                            <div className="valid-feedback">
                              Looks good!
                            </div>
                          </div>
                          <div className="col-md-4">
                            <span  className="form-span">Last name</span>
                            <input type="text" className="form-control border-2 rounded-0 border-dark" id="validationCustom02" value="Otto" required/>
                            <div className="valid-feedback">
                              Looks good!
                            </div>
                          </div>
                          <div className="col-md-4">
                            <span  className="form-span">Username</span>
                            <div className="input-group">
                              <span className="input-group-text" id="inputGroupPrepend">@</span>
                              <input type="text" className="form-control border-2 rounded-0 border-dark" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required/>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <span  className="form-span">Phone Number</span>
                            <input type="text" className="form-control border-2 rounded-0 border-dark" id="validationCustom03" required/>
                          </div>
                          <div className="col-md-3">
                            <span  className="form-span">Gender</span>
                            <select className="form-select border-2 rounded-0 border-dark" id="validationCustom04" required>
                              <option selected disabled value="">select gender...</option>
                              <option>Male</option>
                              <option>Female</option>
                            </select>
                          </div>
                          <div className="col-md-3">
                            <span  className="form-span">Zip</span>
                            <input type="text" className="form-control border-2 rounded-0 border-dark" id="validationCustom05" required/>
                          </div>
                          <div className="col-12 modal-footer">
                          <Link to={'/admin'} className="btn btn-primary mx-2" type="submit">Cancel</Link>
                            {
                                action=='update'?<button className="btn btn-primary" type="submit">Update</button>
                                :action=='delete'?<button className="btn btn-danger" type="submit">Delete</button>
                                :null
                            }
                          </div>
                        </form>
                    </section>
                </div>

            </div>
        </section>
            </div>
        </div>
    </main>
    )
}