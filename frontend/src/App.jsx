import {useEffect, useState} from 'react'
import HeroStyles from './Hero.module.css'
import axios from 'axios'
import './index.css'
import pencil from '../img/hero-img/pencil.svg'
import trash from '../img/hero-img/trash.svg'

function App() {
  const[arrayOfAllTasks, setArrayOfAllTasks] = useState([])
  const [input1, setInput1] = useState('')
  const [input2, setInput2] = useState('')
  
async function getAllTasks(){
  try {
    const res = await axios.get('http://localhost:3000/tasks')
    setArrayOfAllTasks(res.data)
  } catch (error) {
    console.log(error.message);
  }
}

async function createData(){
  try {
    if (!input1.length) throw new Error("Title пуст");
    if (!input2.length) throw new Error("Description пуст");
    const res = await axios.post('http://localhost:3000/tasks', {title: input1 , description: input2, completed: false, createdAt: '2026-03-05 14:20:00.000'});
    console.log(res);
    setArrayOfAllTasks([...arrayOfAllTasks, ...res.data])
  } catch (error) {
    console.log(error.message);
    
  }
}

useEffect(()=>{
  getAllTasks()
},[])


  return (
    <>
      <section className={HeroStyles.hero}>
        <div className='container'>
          <div className={HeroStyles['hero-wrapper']}>
            <h1>TODO LIST</h1>
            <div className={HeroStyles['hero-wrapper-create-block']}>
                <input placeholder='Create note...' className={HeroStyles['hero-wrapper-create-input']} onChange={(e)=> setInput1(e.target.value)}></input>
                <input placeholder='Create description note...' className={HeroStyles['hero-wrapper-create-input']} onChange={(e)=> setInput2(e.target.value)}></input>
                <button onClick={createData}>create</button>
            </div>
            <div className={HeroStyles['hero-wrapper-tasks-list']}>
                {arrayOfAllTasks.map((el,index) => (
                  <div className={HeroStyles['hero-wrapper-task-item']} key={index}>
                    <input type='checkbox'></input>
                    <h2>{el.title}</h2>
                    <p>{el.description}</p>
                    <div className={HeroStyles['hero-wrapper-task-item-icons']}>
                      <div className={HeroStyles['hero-wrapper-task-item-icon']}>
                        <img src={pencil}></img>
                      </div>
                      <div className={HeroStyles['hero-wrapper-task-item-icon']}>
                        <img src={trash}></img>
                      </div>
                    </div>
                  </div>
                ) )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
