import { Link } from "react-router-dom";
import { GET_ALL_HOSPITAL, GET_ALL_USERS } from "../../../GraphQl/Query"
const AppUserHome=()=>{
    var userList:UserData[]=new Array();
    const getAllUsers=async()=>{
        try {
         const users=GET_ALL_USERS();
           const userData: UserData[] = users.data.getAllUser.map((users: any) => ({
            id: users.id,
            name: users.name,
            email:users.email,
            role:users.role
          }));
          userList=userData;
        } catch (error) {
            
        }
    }
    getAllUsers();
return(
<main className="container">
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
                        <span className="fw-bolder text-bg-success p-1 rounded-2 border border-light mx-2"> <span
                            className="badge bg-light text-dark fw-bolder"
                            >{userList.length}</span> users 
                        </span>
                    </p>
                    <p className="card-text">
                        <i className="rounded-pill border fs-4 bg-primary text-white py-1 px-2 bi bi-hospital-fill"></i>
                    </p>
                    
                    <p className="card-text">
                        <small className="text-muted"
                            >Last updated 3 mins ago {userList.length}</small>
                    </p>
                </div>
            </div>
        </div>
    </div>
    {/* table */}
    <div
        className="table-responsive"
    >
        <table
            className="table table-primary"
        >
            <thead>
                <tr>
                    <th colSpan={4} className="p-3 bg-primary">
                        <button type="button" className="btn btn-outline-light rounded-pill px-2 py-1"><i className="bi bi-plus"></i></button>
                        <span className="d-block text-center fs-3">List of users</span>
                    </th>
                </tr>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Contacts</th>
                    <th scope="col">Role</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {userList.map((user)=>{
                    return(
                <tr className="" key={user.id}>
                    <td scope="row"><i className="bi bi-people"></i> {user.name}</td>
                    <td><i className="bi bi-envelope"></i> {user.email}</td>
                    <td>{user.role}</td>
                    <td>
                        <Link to={'user/'+user.id+'/update'} className="btn"><i className="bi bi-pencil"></i></Link>
                        <Link to={'user/'+user.id+'/delete'} className="btn"><i className="bi bi-trash"></i></Link>
                    </td>
                </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
            
</main>
)
}
export default AppUserHome;