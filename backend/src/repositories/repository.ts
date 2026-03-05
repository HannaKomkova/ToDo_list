import pool from '../../src/db.js'
import {ITask} from '../interfaces/interface.js'

async function getAllTaskRep(): Promise<ITask[]> {
    const connection = await pool.connect();
    try {
        await connection.query("BEGIN");
        const sql = 'select * from tasks'
        const result = await connection.query(sql)
        await connection.query("COMMIT");
        return result.rows
    } catch (error) {
        await connection.query("ROLLBACK");
        throw new Error();
    }
}

async function postNewTaskRep(title:string, description:string, completed:boolean, createdAt:string): Promise<ITask[]>{
    const connection = await pool.connect()
    try {
       await connection.query("BEGIN"); 
       const sql = 'INSERT INTO tasks (title, description, completed, createdAt) VALUES ($1, $2, $3, $4) returning *';
       const result = await connection.query(sql, [title, description, completed, createdAt])
       await connection.query("COMMIT");
       return result.rows
    } catch (error) {
        await connection.query("ROLLBACK");
        throw new Error();
    }
}

async function updateTaskRep(id:number, title:string, description:string, completed:boolean, createdAt:string): Promise<ITask[]>{
    const connection = await pool.connect()
    try {
         await connection.query("BEGIN"); 
        const sql = 'UPDATE tasks SET title = $1, description = $2, completed = $3, createdAt = $4  where id = $5 returning *';
        const result = await connection.query(sql, [title, description, completed, createdAt, id])
        await connection.query("COMMIT");
        return result.rows
    } catch (error) {
        await connection.query("ROLLBACK");
        throw new Error();
    }
}

async function deleteTaskRep(id:number): Promise<ITask[]>{
    const connection = await pool.connect()
    try {
        await connection.query("BEGIN"); 
        const sql = "delete from tasks where id = $1 returning *";
        const result = await connection.query(sql, [id]);
        await connection.query("COMMIT");
        return result.rows
        
    } catch (error) {
        await connection.query("ROLLBACK");
        throw new Error();
    }
}

export {getAllTaskRep, postNewTaskRep, updateTaskRep, deleteTaskRep}