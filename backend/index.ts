import express from 'express';
import {Response, Request, NextFunction} from 'express'
import bodyParser from 'body-parser'
import route from './src/controller/controller'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use('/tasks', route)

app.use('/', (err:any, req:Request, res:Response, next:NextFunction)=>{
    res.status(404).send(err.message)
})

app.listen(3000, ()=>{
    console.log('success');
    
})