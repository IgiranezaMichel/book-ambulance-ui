import React from "react"
import { Link } from "react-router-dom"
type NavData={
data:NavigationBarData[]
}
export const AuthorizedNavBar:React.FC<NavData>=(data)=>{
return (
<nav className="navbar navbar-expand-md navbar-info sticky-top mb-4"  style={{backgroundColor:'rgb(50,10,20,.8)'}}>
    <Link className="navbar-brand mx-2" to={'/'}>
        <img  src="/icon/hospital.png" width={100} alt="" />
    </Link>
    <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId"  aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation"><i className="bi bi-three-dots"></i></button>
    <div className="collapse navbar-collapse container" id="collapsibleNavId">
        <ul className="navbar-nav me-auto mt-2 mt-lg-0">
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link hover-me active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">
                        <i className="bi bi-house-door-fill display-6"></i>
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link hover-me p-4 hover-me rounded-pill" id="hospital-tab" data-bs-toggle="pill" data-bs-target="#hospital" type="button" role="tab" aria-controls="hospital" aria-selected="false">
                        <img src="/parchment.png" width={70} alt="" />
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link hover-me" id="pills-setting-tab" data-bs-toggle="pill" data-bs-target="#pills-setting" type="button" role="tab" aria-controls="pills-setting" aria-selected="false">
                        <i className="bi bi-gear-fill display-6"></i>
                    </button>
                </li>
            </ul>
        </ul>
        <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="bi bi-person display-5"></i>
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li><Link className="dropdown-item" to={'/'}>Admin</Link></li>
                <li><Link className="dropdown-item" to={'/'}>Logout</Link></li>
            </ul>
        </div>
    </div>
</nav>
)
}