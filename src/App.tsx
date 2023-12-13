import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import SignUp from './pages/Visitor/SignUp'
import { Admin } from './pages/Admin/Admin'
import { CrudHospital } from './Component/Admin/CrudHospital'

function App() {
  return (
    <>
 <Router>
  <Routes>
  <Route path='/admin' element={<Admin/>}/>
  <Route path='/admin/hospital/:id/:action' element={<CrudHospital/>}/>
    <Route path='/' element={<SignUp/>}/>
  </Routes>
 </Router>
    </>
  )
}

export default App
