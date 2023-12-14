import { ToastContainer, toast} from "react-toastify";
import { useState } from "react";
import {useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'
import { GET_ALL_PROVINCE, GET_HOSPITAL_BY_ID } from "../../GraphQl/Query";
export const CrudHospital=()=>{
  const [hosp_name,sethosp_Name]=useState('');
  const [provinceId,setProvinceId]=useState('');
  const [districtId,setDistrictId]=useState('');
  const [sectorId,setsectorId]= useState('');
  const [hospitalId,setHospitalId]= useState('');
  const [hospitalName,setHospitalName]= useState('');
  const {id,action}=useParams();
  const addHospitalHandler=()=>{
    if(hospitalName.length==0)toast.error('Hospital Name is required')
    else if(sectorId.length==0)toast.error('Please sector is required')
  }
  const updateHospitalHandler=()=>{
    if(hospitalName.length==0)toast.error('Hospital Name is required')
    else if(hospitalId.length==0)toast.error('Please select hospital to be updated')
    else if(sectorId.length==0)toast.error('Please sector is required')
  }
  const deleteHospitalHandler=()=>{
   if(hospitalId.length==0)toast.error('Please select hospital to be deleted')
  }
  const fetchHospitalData = async () => {
    try {
      const hospitalData = await GET_HOSPITAL_BY_ID(id);
      setHospitalId(hospitalData.data.getHospitalById.id);
      setHospitalName(hospitalData.data.getHospitalById.name);
    } catch (error) {}};
var arr=new Array();
 const fetchProvinceData=()=>{
 try { const provinceData=GET_ALL_PROVINCE();
  provinceData.data.getAllProvince.map((data:any,index:any)=>{
    arr[index]=data;
  });
  console.log(arr)
    } catch (error) {}}

  fetchHospitalData();
  fetchProvinceData();
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
                    
                    <section className="row col-sm-12 m-auto">
                    <div className="mb-3">
                    <span  className="form-span">Name</span>
                        <input type="text" name="name" value={hospitalName} onChange={e=>setHospitalName(e.target.value)} className="form-control rounded-0" placeholder="Enter Hospital  ..." />
                    </div>
                    <div className="mb-3 col-sm-6">
                        <span >Select Province</span>
                        <select onChange={e=>setProvinceId(e.target.value)} className="form-select text-center rounded-0" required>
                            <option value="">--Select province--</option>
                             {arr.map((data:any,index)=>{
                              return(<>
                                 <option key={index} value={data.id}>{data.name}</option>
                              </>)
                             })}
                        </select>
                    </div>
                    <div className="mb-3 col-sm-6">
                        <span >Select District</span>
                        <select className="form-select text-center rounded-0" required>
                            <option value="">--Select District--</option>
                             {provinceId.length!==0?
                             arr[parseInt(provinceId)].locationList.map((data:any)=>{
                              return(<option>{data.name} {alert(data)}</option> )
                             })
                             :null}
                        </select>
                    </div>
                    <div className="mb-3 col-sm-12">
                        <span >Select sector</span>
                        <select className="form-select text-center rounded-0" required>
                            <option value="">--Select sector--</option>
                             
                        </select>
                    </div>
                    </section>
                    <div className="modal-footer">
                        <Link className="btn btn-primary mx-3 rounded-0" to={'/admin'}>close</Link>
                        {action=='add'?<button onClick={addHospitalHandler} className="btn btn-info fw-bolder">Add</button>
                        :action=='delete'?<button onClick={deleteHospitalHandler} className="btn btn-danger fw-bolder">Delete</button>
                        :action=='update'?<button onClick={updateHospitalHandler} className="btn btn-success fw-bolder">Update</button>:null
                      }
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