import React, { useState } from 'react'
import './FormInput.css'

const FormInput = () => {
const [name,setname] = useState("");
const [email,setemail] = useState("");
const [mobile,setmobile] = useState("");
const [password,setpassword] = useState("");

const [show,setshow] = useState(true)

const handleForm = (()=>{
    if(name!="" && mobile!=""&& email!="" && password!=""){
        setshow(false)
    }
})
const clearData = (()=>{
    setemail("")
    setpassword("")
    setmobile("")
    setname("")
})
  return (
    <div className='main_form'>
      <h3>React Form</h3>
      <form >
       {show===true?
         <div className="input_field">
         <input type="text" value={name} onChange={(e)=>setname(e.target.value)} required placeholder='Username' />
         <input type="email" value={email} onChange={(e)=>setemail(e.target.value)} required placeholder='Emial' />
         <input type="number" value={mobile} onChange={(e)=>setmobile(e.target.value)} required placeholder='Mobie NO' />
         <input type="password" value={password} onChange={(e)=>setpassword(e.target.value)} required placeholder='Password' />
         <button  onClick={handleForm}>submit</button>
         </div>
         :
         <div className="input_field">
            <h3>Form Successfully Submited</h3>
            <button onClick={clearData}>Data Clear</button>
         </div>
       }
        
  
      </form>
      <div className="input_field">
          <p>  name:{name}</p>
          <p>  email:{email}</p>
          <p>  mobile no:{mobile}</p>
          <p>  password:{password}</p>
        </div>
    </div>
  )
}

export default FormInput
