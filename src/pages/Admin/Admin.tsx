import AdminHome from "../../Component/AdminHome"
import { Hospital } from "../../Component/Hospital/Hospital"
export const Admin=()=>{
return(
<main className="overflow-auto" style={{position:'fixed',width:'100%',height:'100%',backgroundImage:'url(/visitor/doctors.jpg)',backgroundSize:'cover',backgroundRepeat:'no-repeat',backgroundPosition:'fixed'}}>
<nav
    className="navbar navbar-expand-md navbar-info"
    
>
    <a className="navbar-brand mx-2" href="#">
        <img  src="/icon/hospital.png" width={100} alt="" />
    </a>
    <button
        className="navbar-toggler d-lg-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapsibleNavId"
        aria-controls="collapsibleNavId"
        aria-expanded="false"
        aria-label="Toggle navigation"
    ></button>
    <div className="collapse navbar-collapse container" id="collapsibleNavId">
        <ul className="navbar-nav me-auto mt-2 mt-lg-0">
        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
  <li className="nav-item" role="presentation">
    <button className="nav-link hover-me active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">
    <i className="bi bi-house-door-fill display-6"></i>
    </button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link hover-me p-4 hover-me rounded-pill" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">
    <i className="bi bi-hospital-fill display-6"></i>
    </button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link hover-me" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">
    <i className="bi bi-gear-fill display-6"></i>
    </button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link hover-me p-4 hover-me rounded-pill" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">
    <i className="bi bi-people-fill display-6"></i>
    </button>
  </li>
</ul>

        </ul>
        <span>Mike</span>
    </div>
</nav>
<main>
<div className="tab-content overflow-auto" id="pills-tabContent">
  <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
    <AdminHome/>
  </div>
  <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
    <Hospital/>
  </div>
  <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">Settings</div>
</div>
</main>
    </main>
)
 }