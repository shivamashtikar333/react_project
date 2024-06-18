import { useState, useCallback,useEffect, useRef } from 'react'



function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setPassword] = useState(" ")

  const passwordRef = useRef(null)


  const passwordGenerator = useCallback(()=>{
let pass = ""
let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

if(numberAllowed) str+= "0123456789"
if(charAllowed) str+= "!@#$%^&*-+=[]{}~"

for(let i = 1; i <=  length ;i++ ){
  let char =  Math.floor(Math.random()* str.length + 1)
  pass += str.charAt(char)

}



setPassword(pass)


  },[length,numberAllowed,charAllowed,setPassword]);

  useEffect(()=>{
    passwordGenerator();
  },[length,numberAllowed,charAllowed,passwordGenerator]);

  const copyPassword = useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password);
      },[password])

 



  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md
    rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>

    <h1 className='text-white text-center py-2'>Password Generator</h1>
      

      <div className='flex shadow rounded-lg overflow-hidden mb-4 py-2'>
      <input 
        type='text'
        value={password}
        className='outline-none w-full py-1 px-3 rounded-lg'
        placeholder='password'
        readOnly
        ref={passwordRef}
      />

      <button onClick={copyPassword}
      className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 rounded-lg'>
        copy
      </button>
    </div>
    <div className='flex items-center gap-x-2'>
    <input 
      type='range'
      min={8}
    max={100}
    value={length}
    className='cursor-pointer'
    onChange={(e)=>{setLength(e.target.value)}}
    />
    <label>Length: {length}</label>

    <input 
      type='checkbox'
     defaultChecked = {numberAllowed}
     id='numberInput'
    onChange={()=>{setNumberAllowed((prev)=>!prev)}}
    />
     <label>Numbers</label>

     <input 
      type='checkbox'
     defaultChecked = {charAllowed}
     id='charInput'
    onChange={()=>{setcharAllowed((prev)=>!prev)}}
    />
     <label>Characters</label>

    </div>
    </div>

   


    </>
  )
}

export default App
