import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import SignUp from './pages/Visitor/SignUp'
import { Admin } from './pages/Admin/Admin'
import { CrudHospital } from './Component/Admin/CrudHospital'
import UserHome from './pages/User/UserHome'

function App() {
  return (
    <>
 <Router>
  <Routes>
    <Route path='/admin' element={<Admin/>}/>
      <Route path='/admin/hospital/:id/:action' element={<CrudHospital/>}/>
      <Route path='/' element={<SignUp/>}/>
      <Route path='/user' element={<UserHome/>}/>
    </Routes>
 </Router>
    </>
  )
}

export default App
