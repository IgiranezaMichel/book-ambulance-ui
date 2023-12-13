import { ToastContainer} from "react-toastify";
import { useState } from "react";
import {useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'
import { GET_ALL_PROVINCE, GET_HOSPITAL_BY_ID } from "../../GraphQl/Query";
export const CrudHospital=()=>{
  const [hosp_name,sethosp_Name]=useState('');
  const [hosp_locationId,sethosp_locationId]=useState('');
  const [locationId,setLocationId]= useState('');
  const [hospitalId,setHospitalId]= useState('');
  const [hospitalName,setHospitalName]= useState('');
  const {id,action}=useParams();
  
  const fetchData = async () => {
    try {
      const hospitalData = await GET_HOSPITAL_BY_ID(id);
      setHospitalId(hospitalData.data.getHospitalById.id);
      setHospitalName(hospitalData.data.getHospitalById.name);
    } catch (error) {}};

 const fetchProvince=async()=>{
 try { const provinceData= await GET_ALL_PROVINCE();
 return provinceData.data;} catch (error) {}}

  fetchData();
  fetchProvince();
  var isLoading=false;
return (
<>
{isLoading?<div className="spinner-border text-primary" role="status">
  <span className="visually-hidden">Loading...</span>
</div>:<main >
    <div className="card  text-white fixed-top border-0" style={{height:"100dvh"}}>
        <img className="card-img rounded-0" src="/visitor/authentication.png" alt="Title" />
        <div className="card-img-overlay overflow-auto" style={{display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'rgb(0,0,0,0.7)'}}>
           <div className="bg-white border col-lg-6 text-dark  border-0 mt-lg-5">
                <h4 className="card-title border-bottom p-3 bg-primary"><img width={60} src="/admin/hospital-location.png" alt="" />{action}  Hospital</h4>
                {hospitalName!=''?<h3 className="text-center">
                  <i className="rounded-pill border fs-4 bg-primary text-white py-1 px-2 bi bi-hospital-fill"></i>
                  {hospitalName}</h3>:null}
                <section className="p-4">
                    <div className="mb-3">
                    <span  className="form-span">Name</span>
                    <input type="text" name="name" value={hosp_name} onChange={e=>sethosp_Name(e.target.value)} className="form-control rounded-0" placeholder="Enter Hospital  ..." />
                    </div>
                    <section className="row col-sm-12 m-auto">
                    <div className="mb-3 col-sm-6">
                        <span >Select Province</span>
                        {/* <select
                            className="form-select text-center rounded-0"
                            value={userInput.gender}
                            onChange={(e)=>{setGender(e.target.value)}}
                            required
                            name="gender"  
                            >
                            <option value="">--Select province--</option>
                            {datas.map((loc:any)=>{
                              return(<option key={loc.id} value={loc.id}>{loc.name}</option>)
                            })}
                        </select> */}
                    </div>
                    <div className="mb-3 col-sm-6">
                        <span >Select District</span>
                        {/* <select
                            className="form-select text-center rounded-0"
                            value={userInput.gender}
                            onChange={(e)=>{setGender(e.target.value)}}
                            required
                            name="gender"  
                            >
                            <option value="">--Select District--</option>
                        </select> */}
                    </div>
                    <div className="mb-3 col-sm-12">
                        <span >Select Sector</span>
                        <select
                            className="form-select text-center rounded-0"
                            value={hosp_locationId}
                            onChange={(e)=>{sethosp_locationId(e.target.value)}}
                            required
                            name="gender"  
                            >
                            <option value="">--Select sector--</option>
                        </select>
                    </div>
                    </section>
                    <div className="modal-footer">
                        <Link className="btn btn-primary mx-3 rounded-0" to={'/admin'}>close</Link>
                    </div>
                </section>
           </div>
        </div>
    </div>
    
        <ToastContainer/>
</main>}
</>
)
}