 export const Settings=()=>{
    return(
        <section className="container bg-light mb-5">
        <span className="display-5 d-block fw-bold text-center py-2"><i className="bi bi-gear-fill"></i> Settings</span>
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
                        <span className="text-bg-primary p-1 rounded-3">Update/<span className="text-danger">Delete</span> account</span>
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
                              <div className="invalid-feedback">
                                Please choose a username.
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <span  className="form-span">Phone Number</span>
                            <input type="text" className="form-control border-2 rounded-0 border-dark" id="validationCustom03" required/>
                            <div className="invalid-feedback">
                              Please provide a valid city.
                            </div>
                          </div>
                          <div className="col-md-3">
                            <span  className="form-span">Gender</span>
                            <select className="form-select border-2 rounded-0 border-dark" id="validationCustom04" required>
                              <option selected disabled value="">select gender...</option>
                              <option>Male</option>
                              <option>Female</option>
                            </select>
                            <div className="invalid-feedback">
                              Please select a valid state.
                            </div>
                          </div>
                          <div className="col-md-3">
                            <span  className="form-span">Zip</span>
                            <input type="text" className="form-control border-2 rounded-0 border-dark" id="validationCustom05" required/>
                            <div className="invalid-feedback">
                              Please provide a valid zip.
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-check">
                              <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
                              <span className="form-check-span">
                                Agree to terms and conditions
                              </span>
                              <div className="invalid-feedback">
                                You must agree before submitting.
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <button className="btn btn-primary" type="submit">Submit form</button>
                          </div>
                        </form>
                    </section>
                </div>

            </div>
        </section>
    </section>
    )
 }
 