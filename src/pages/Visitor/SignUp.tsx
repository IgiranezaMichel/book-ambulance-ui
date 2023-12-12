import {useState} from 'react'
import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../../GraphQl/Mutation';
import { ToastContainer,toast } from 'react-toastify';
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
     userInput.name==''?toast.error("Please specify your name",{delay:200,})
     :userInput.email==''?toast.error("Please specify your Email address",{delay:200,}):
     userInput.gender==''?toast.error('Please Select your Gender'):
     userInput.phoneNumber==''?toast.error('Please specify your Phone number'):
     userInput.password=='' ?toast.error('Please specify your password'):
     handleAddUser(userInput)
    }
    
    const [addUser,{loading,error,data}] = useMutation(CREATE_USER);
    const handleAddUser = async (userData:UserInput) => {
        setShowReset(!showReset);
        try {
          const { data } = await addUser({
            variables: {
              input: userData,
            },
          });
          console.log('User added:', data.addUser);
        } catch (error) {
          console.error('Error adding user:', error);
        }
      };

      if(data){
        toast.success(data.addUser.name+" Added successfully")
      }
      if(error){
        toast('Unable to reach the server')
      }

// const addUser=gql`
// mutation{
//     addUser($input:userInput):User
// }
// `;
//  const { loading, error, data } = useQuery(GET_LOCATIONS);
//  if(error)
//  {
//     console.log(error)
//  }
//  if(loading)
//  {
//     console.log("...Loading");
//  }
//  if(data)
//  console.log(data);
return (
<>
<main>
    <div className="card bg-dark text-white fixed-top border-0" style={{height:"100dvh"}}>
        <img className="card-img rounded-0" src="/visitor/authentication.png" alt="Title" />
        <div className="card-img-overlay overflow-auto" style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
           <div className="bg-white border col-lg-6 text-dark p-lg-5 mt-lg-5">
                <h4 className="card-title border-bottom p-3">Sign up</h4>
                <div className="mb-3">
                  <span  className="form-span">Name</span>
                  <input type="text" name="name" value={userInput.name} onChange={e=>setName(e.target.value)} className="form-control" placeholder="Enter your name ..." />
                </div>
                <div className="mb-3">
                    <span >Select Gender</span>
                    <select
                        className="form-select"
                        value={userInput.gender}
                        onChange={(e)=>{setGender(e.target.value)}}
                        required
                        name="gender"  
                        >
                        <option value="">--Select gender--</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </div>
                <div className="mb-3">
                  <span  className="form-span">Phone Number</span>
                  <input type="tel" value={userInput.phoneNumber}  onChange={e=>setPhoneNumber(e.target.value)} name="phoneNumber" className="form-control"/>
                </div>
                <div className="mb-3">
                  <span  className="form-span">Email</span>
                  <input type="email" value={userInput.email} onChange={e=>setEmail(e.target.value)} className="form-control" name="email"/>
                </div>
                <div className="mb-3">
                  <span  className="form-span">Password</span>
                  <input type="password" value={userInput.password} onChange={e=>setPassword(e.target.value)} className="form-control" name="password"/>
                </div>
                <div className="modal-footer">
                {showReset?<button className="btn btn-outline-success" onClick={handleReset}>Reset</button>:null}
                    <button type="button" onClick={submitHandler} className="btn btn-outline-primary">{loading?<div className="spinner-border text-primary" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>:<i>Submit</i>}</button>
                </div>
           </div>
        </div>
    </div>
    
        <ToastContainer />
</main>
</>
)
}
export default SignUp;