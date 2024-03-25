import React,{useState} from 'react'
import { MdDelete } from "react-icons/md";


function App() {
  const [num, setNum] = useState("")
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [register, setRegister] = useState([])

  // Fun

  const handle = (e) =>{
    e.preventDefault();

    let contact ={
      name,
      num,
      email,
    };
    
    setRegister([...register, contact]);
    console.log(contact);

   
  }
  const deletee = (i) =>{
    setRegister(register.filter((e) =>{
        return e !== i;
      })
    )
  }
  return (
    <div>

  <div className='main1'>
      <div className='header'>
          <h1>Contact Register</h1>
      </div>
    <div className='main'>
      <div className='text'>
        <h1>Enter Your Info Below</h1>
        <input type='text' placeholder='Name' name='name' onChange={(e)=>{
          setName(e.target.value)
        }}></input>
        <input type='tel'  placeholder='Phone.no' name='num' onChange={(e) =>{
          setNum(e.target.value);
        }}></input>
        <input type="email"  placeholder='email' name='email' onChange={(e)=>{
          setEmail(e.target.value);
        }}/>
        <button onClick={handle}>Register</button>
      </div>
    
       


      <div className='text2'>
        {register.map((i) => {
           return(
            <>
            <div className='textmain'>
              <div className='text-center'>
                <h1>Name</h1>
                <hr />

                {i.name}
              </div>
              <div className='text-center'>
                <h1>Email</h1>
                <hr/>

                {i.email}
              </div>
              <div className='text-center'>
              <button onClick={()=>{
                  deletee(i)
                }}
          
              >
              <MdDelete  />
              </button>
              </div>
              </div>
            </>
           )
        })}
      </div>
    </div>
  </div> 
    </div>
  )
}

export default App
