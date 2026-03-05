import { ITask } from '../interfaces/interface'
import {getAllTaskRep, postNewTaskRep, updateTaskRep, deleteTaskRep} from '../repositories/repository'

async function getAllTask(): Promise<ITask[]>{
    const dataRep: ITask[] = await getAllTaskRep()
    return dataRep 
}

async function postNewTask(title:string, description:string, completed:boolean, createdAt:string): Promise<ITask[]> {
    const dataPostNewTask: ITask[] = await postNewTaskRep(title, description, completed, createdAt)
    return dataPostNewTask
}

async function updateTask(id:number, title:string, description:string, completed:boolean, createdAt:string): Promise<ITask[]>{
    const dataUpdateTask: ITask[] = await updateTaskRep(id, title, description, completed, createdAt);
    return dataUpdateTask
}

async function deleteTask(id:number): Promise<ITask[]>{
    const dataDeleteTask: ITask[] = await deleteTaskRep(id)
    return dataDeleteTask
}

export {postNewTask, getAllTask, updateTask, deleteTask}