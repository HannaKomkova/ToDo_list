import express, {Request, Response} from 'express';
import {getAllTask, postNewTask, updateTask, deleteTask} from '../services/service'
import {checkTaskBody, checkTaskId} from '../middlewares/middleware'

const route = express.Router()

route.get('/', async (req:Request, res:Response)=>{
    try {
        const data = await getAllTask()
        res.status(200).send(data)
        
    } catch (error:any) {
        res.status(500).send(error.message)
    }
})

route.post('/', checkTaskBody, async (req:Request, res:Response)=>{
    try {
        const {title, description, completed, createdAt} = req.body;
        const data = await postNewTask(title, description, completed, createdAt)
        res.status(201).send(data)
    } catch (error:any) {
        res.status(500).send(error.message)
    }
})

route.put('/:id', checkTaskBody, checkTaskId, async(req:Request, res:Response)=>{
    try {
        const {id} = req.params;
        const{title, description, completed, createdAt} = req.body;
        const data = await updateTask(id, title, description, completed, createdAt)
        res.status(200).send(data)
    } catch (error:any) {
        res.status(500).send(error.message)
    }
})

route.delete('/:id', checkTaskId, async (req:Request, res:Response) =>{
    try {
        const {id} = req.params;
        const data = await deleteTask(id)
        res.status(200).send(data)
    } catch (error:any) {
        res.status(500).send(error.message)
    }
})


export default route