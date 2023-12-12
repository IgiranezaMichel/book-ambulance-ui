import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import SignUp from './pages/Visitor/SignUp'
import QueryExample from './pages/Visitor/QueryExample'
import { Admin } from './pages/Admin/Admin'
import { CrudHospital } from './Component/Hospital/crudHospital'

function App() {
  return (
    <>
 <Router>
  <Routes>
  <Route path='/admin' element={<Admin/>}/>
  <Route path='/admin/hospital/:id/:action' element={<CrudHospital/>}/>
    <Route path='/' element={<SignUp/>}/>
    <Route path='/q' element={<QueryExample/>}/>
  </Routes>
 </Router>
    </>
  )
}

export default App
