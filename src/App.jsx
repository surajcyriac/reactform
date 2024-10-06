import { useState } from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import './App.css'
import { Stack, TextField, Button } from '@mui/material'


function App() {
  const[firstName,setfirstName] = useState("")
  const[SecondName,setSecondName]=useState("")
  const[phone,setPhone]=useState("")
  const[Email,setEmail]=useState("")
  const[Password,setPassword]=useState("")
  const[Confirmpassword,setConfirmpassword]=useState("")
  const[radio,setGenderCheck]=useState("")

const[firstnameInvalid,setfirstnameInvalid]=useState(false)
const[secondnameInvalid,setsecondnameInvalid]=useState(false)
const[phoneInvalid,setphoneInvalid]=useState(false)

  const userInput =(inputTag)=>{
  const {name,value}=inputTag
    console.log(name,value);
    if(name=="firstName"){
      setfirstName(value)
      !!value.match(/^[a-zA-Z]+$/)  ? setfirstnameInvalid(false) : setfirstnameInvalid(true)


  }else if(name=="SecondName")  {
    setSecondName(value)
    !!value.match(/^[a-zA-Z]+$/)  ? setsecondnameInvalid(false) : setsecondnameInvalid(true)

  }  else if (name=="phone"){
    setPhone(value)    
    !!value.match(/^\d*\.?\d+$/) ? setphoneInvalid(false) : setphoneInvalid(true)

  }  else if (name=="Email"){
    setEmail(value)
  }else if(name=="radio"){
    setGenderCheck(value)

  } else if (name=="Password"){
    setPassword(value)
  } else if (name=="ConfirmPassword"){
    setConfirmpassword(value)
  }

}
  const handleReset=()=>{
    setfirstName("")
    setfirstnameInvalid(false)
    setSecondName("")
    setsecondnameInvalid(false)
    setGenderCheck("")
    setPhone("")
    setEmail("")
    setPassword("")
    setConfirmpassword("")

  }
  const  handleSubmit=()=>{
    if(firstName && SecondName && phone && Email && Password && Confirmpassword){
      alert(`Form Submitted Successfully!👍
        Name: ${firstName}
        Phone: ${SecondName}
        Email Id: ${phone}
        Gender: ${radio}
        UserName: ${Email}
        Password: ${Password}
`)
      }
    }
  
  return (
    <div style={{minHeight:"100vh"}} className='d-flex justify-content-center align-items-center bg-dark'>
      <div style={{width:'600px'}} className='bg-light rounded p-5'>
      <h3 className='text-center'>Register yourself</h3>
   
<form  className='mt-3'>
<div className='mb-3'>
<TextField type='text' value={firstName||""} onChange={e=>userInput(e.target)} name='firstName' id="outlined-basic" label="First Name" variant="outlined" className='w-100'/>
</div>
{
            firstnameInvalid && <div className="mb-3 fw-bolder text-danger">*Invalid name</div>
          }

<div className='mb-3'>
<TextField value={SecondName||""} onChange={e=>userInput(e.target)} id="outlined-basic" label="SecondName" name='SecondName' variant="outlined" className='w-100'/>
</div>
{
            secondnameInvalid && <div className="mb-3 fw-bolder text-danger">*Invalid name</div>
          }
<div className='mb-3'>
<TextField value={phone||""} onChange={e=>userInput(e.target)} id="outlined-basic" label="Phone" name='phone' variant="outlined" className='w-100' />
</div>
{
            phoneInvalid && <div className="mb-3 fw-bolder text-danger">*Invalid name</div>
          }
<div className='mb-3'>
<TextField value={Email||""} onChange={e=>userInput(e.target)} id="outlined-basic" name='Email' label="Email" variant="outlined" type='email' className='w-100' />
</div>

<RadioGroup row  aria-labelledby="demo-row-radio-buttons-group-label" value={radio||""} onChange={e=>userInput(e.target)} name="row-radio-buttons-group radio"   className='mb-3' >
        <FormControlLabel value="female" control={<Radio />}  name='radio' label="Female" />
        <FormControlLabel value="male" control={<Radio />}  name='radio' label="Male" />     
   </RadioGroup>
<div className='mb-3'>
<TextField  value={Password||""} onChange={e=>userInput(e.target)}id="outlined-basic" name='Password' label="Password" variant="outlined" type='password' className='w-100' />
</div>
<div className='mb-3'>
<TextField  value={Confirmpassword||""} onChange={e=>userInput(e.target)}id="outlined-basic" name='ConfirmPassword' label="ConfirmPassword" variant="outlined" type='password' className='w-100'/>
</div>

   <Stack direction="row" spacing={2}>
            <Button  className='bg-dark' style={{width:"50%", height:"70px"}} variant="contained" onClick={handleSubmit} >REGISTER</Button>
            <Button className='border-dark text-dark' style={{width:"50%", height:"70px"}} variant="outlined"  onClick={handleReset}>Cancel</Button>
          </Stack>
</form>

</div>

  </div>

  )
}

export default App
