import { useState } from 'react'
import './App.css'
import Notes from './components/Notes'


function App()  {
 
  const [notes,setNotes] = useState([
    {
      id:1,
      text:"check the description for my frontend Interview Prep course",
    },
    {
      id:2,
      text:"Like this video and Subcribe to chai Aur code",
    },
  ])

 

  return (
   <div >
        <Notes notes={notes}  setNotes={setNotes}/>
   </div>
  )
}

export default App
