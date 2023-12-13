import {useState} from 'react'
import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../../GraphQl/Mutation';
import { ToastContainer,toast } from 'react-toastify';
import { Link } from 'react-router-dom';
const SignUp=()=>{
    const[name,setName]=useState('');
    const[gender,setGender]=useState('');
    const[phoneNumber,setPhoneNumber]=useState('');
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const [showReset,setShowReset]=useState(false);
  var userInput:UserInput={
    email:email,
    gender:gender,
    name:name,
    password:password,
    phoneNumber:phoneNumber,
  }
  const handleReset = () => {
  setName('');setEmail('');setGender('');setPassword('');setPhoneNumber('');
  };
  
    const submitHandler=()=>{
      name.length==0?toast.error("Please specify your name",{delay:200,})
     :gender.length==0?toast.error('Please Select your Gender')
     :phoneNumber.length==0?toast.error('Please specify your Phone number')
     :email.length==0?toast.error("Please specify your Email address",{delay:200,})
     :password.length==0 ?toast.error('Please specify your password'):
     handleAddUser(userInput)
    }
    const [addUser,{loading,error,data}] = useMutation(CREATE_USER);
    const handleAddUser = async (userData:UserInput) => {
        setShowReset(!showReset);
        try {
          await addUser({
            variables: {
              input: userData,
            },
          });
        } catch (error) {
          console.error('Error adding user:', error);
        }
        if(data){
          toast.success(data.addUser.name+" Added successfully");
          handleReset();
        }
        if(error){
          toast('Unable to reach the server')
        }
      };

      
      
return (
<>
<main>
<div className="container-fluid pt-lg-0 bg-primary overflow-auto mb-5 fixed-top h-100" >
        <div className="container pt-lg-1">
            <div className="row g-5 pt-1 mb-2">
                <section className="col-lg-6 align-self-center text-center text-lg-start mb-lg-5">
                    <h1 className="display-4 text-white mb-4 fw-bolder">
                        Find Hospital Ambulance online
                    </h1>
                    <p className="text-white mb-4">Tempor rebum no at dolore lorem clita rebum rebum ipsum
                        rebum stet dolor sed justo kasd. Ut dolor sed magna dolor sea diam. Sit diam sit</p>
                    <Link to={'/'} className="btn btn-light py-sm-3 px-sm-5 rounded-pill me-3">Home</Link>
                    <Link to={'/login'} className="btn btn-outline-light py-sm-3 px-sm-5 rounded-pill">login</Link>
                </section>
                <section className="col-lg-6">
                  <div className="border  text-dark  mt-lg-5" style={{backgroundColor:'rgb(0,0,0,0.5)'}}>
                      <h4 className="card-title border-bottom p-3 text-white">Sign up</h4>
                      <section className='p-4'>
                          <div className="mb-3">
                            <span  className="form-span text-white">Name</span>
                            <input type="text" name="name" value={name} onChange={e=>setName(e.target.value)} className="form-control" placeholder="Enter your name ..." />
                          </div>
                          <div className="mb-3">
                              <span className='text-white'>Select Gender</span>
                              <select className="form-select"  value={gender}  onChange={(e)=>{setGender(e.target.value)}}  required name="gender">
                                  <option value="">--Select gender--</option>
                                  <option value="Male">Male</option>
                                  <option value="Female">Female</option>
                              </select>
                          </div>
                          <div className="mb-3">
                            <span  className="form-span text-white">Phone Number</span>
                            <input type="tel" value={phoneNumber}  onChange={e=>setPhoneNumber(e.target.value)} name="phoneNumber" className="form-control"/>
                          </div>
                          <div className="mb-3">
                            <span  className="form-span text-white">Email</span>
                            <input type="email" value={email} onChange={e=>setEmail(e.target.value)} className="form-control" name="email"/>
                          </div>
                          <div className="mb-3">
                            <span  className="form-span text-white">Password</span>
                            <input type="password" value={password} onChange={e=>setPassword(e.target.value)} className="form-control" name="password"/>
                          </div>
                          <div className="modal-footer">
                              <button type="button" onClick={submitHandler} className="btn btn-outline-light">
                                {loading?<div className="spinner-border text-primary" role="status">
                                <span className="visually-hidden">Loading...</span>
                              </div>:<span className='fw-bolder'>Submit</span>}</button>
                          </div>
                      </section>
                  </div>
                </section>
            </div>
        </div>
</div>
      <ToastContainer />
</main>
</>
)
}
export default SignUp;