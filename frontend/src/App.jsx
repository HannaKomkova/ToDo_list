import {useEffect, useState} from 'react'
import style from '../src/App.module.css'
import axios from 'axios'

function App() {
  const[arrayOfAllTasks, setArrayOfAllTasks] = useState([])
  const [input1, setInput1] = useState('')
  const [input2, setInput2] = useState('')
  
async function getAllTasks(){
  const res = await axios.get('http://localhost:3000/tasks')
  setArrayOfAllTasks(res.data)
}


async function createData(){
  const res = await axios.post('http://localhost:3000/tasks', {title: input1 , description: input2, completed: false, createdAt: '2026-03-05 14:20:00.000'})
  console.log(res);
}

useEffect(()=>{
  getAllTasks()
},[])


  return (
    <>
    <input placeholder='title' onChange={(e)=> setInput1(e.target.value)}></input>
    <input placeholder='description' onChange={(e)=> setInput2(e.target.value)}></input>
    <button onClick={createData}>Add</button>
    <div>
      {arrayOfAllTasks.map((el)=> <p>{el.title}</p>)}
    </div>
    </>
  )
}

export default App
