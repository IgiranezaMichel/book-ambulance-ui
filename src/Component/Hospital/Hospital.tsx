import {Link} from 'react-router-dom'
import {useState} from 'react'
import { GET_ALL_HOSPITAL } from '../../GraphQl/Query'
type hospitalData={
    id:string;
    name:string;
    location:string[];
};
export const Hospital=()=>{
const [provinceData, setProvinceData] = useState<hospitalData[]>([]);
const [hospData, setHospData] = useState<hospitalData>();
var data:hospitalData[]=new Array();
const getAllHospital=async()=>{
    try {
     const hospital=GET_ALL_HOSPITAL();
       const hospitalsFormatted: hospitalData[] = hospital.data.getAllHospital.map((hospital: any) => ({
        id: hospital.id,
        name: hospital.name,
        location: hospital.location,
      }));
      data=hospitalsFormatted;
    } catch (error) {
        
    }
}
getAllHospital();
// const datas=getAllHospital().then(data=>{data.getAllHospital.map((res:any)=>{
//     setHospData({id:res.id,location:res.location,name:res.name});
// })});
// console.log(datas.then(d=>{d.getAllHospital.map((q:any)=>console.log(q.id+q.name+q.location))}))
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
                <button
                    className="btn btn-primary position-relative"
                >
                  <i className="rounded-pill border fs-4 bg-primary text-white py-1 px-2 bi bi-hospital-fill"></i> 
                    <span
                        className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-white text-primary"
                    >
                        {data.length}
                        <span className="visually-hidden">unread messages</span>
                    </span>
                </button>
                
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
            {
                data.map((data,index)=>{
                    return(
                        <>
                        <tr className="table-primary">
                            <td scope="row"><i className="bi bi-hospital-fill"></i> {data.name}</td>
                            <td><i className="bi bi-house-fill"></i> {data.location.name}</td>
                            <td >
                                <Link to={'hospital/'+data.id+'/update'} key={index} className='btn'><i className="bi bi-pencil" aria-hidden="true"></i></Link>
                                <Link to={'hospital/'+data.id+'/delete'} key={index+'/'} className='btn'><i className="bi bi-trash" aria-hidden="true"></i></Link>
                            </td>
                        </tr>
                        </>
                    )
                })
            }
        </tbody>
        <tfoot> 
        </tfoot>
    </table>
</div>
{/* modals */}
</main>
)
 }