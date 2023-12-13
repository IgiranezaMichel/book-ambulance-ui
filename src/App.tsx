import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import SignUp from './pages/Visitor/SignUp'
import { Admin } from './pages/Admin/Admin'
import { CrudHospital } from './Component/Admin/CrudHospital'
import UserHome from './pages/User/UserHome'
import { DriverHome } from './pages/Driver/DriverHome'
import Index from './pages/Visitor/Index'
import Login from './pages/Visitor/Login'

function App() {
  return (
    <>
 <Router>
    <Routes>
      <Route path='/' element={<Index/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/admin' element={<Admin/>}/>
      <Route path='/admin/hospital/:id/:action' element={<CrudHospital/>}/>
      <Route path='/user' element={<UserHome/>}/>
      <Route path='/driver' element={<DriverHome/>}/>
    </Routes>
 </Router>
    </>
  )
}

export default App
