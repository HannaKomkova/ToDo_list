import { Request, Response, NextFunction } from "express";

function checkTaskBody(req: Request, res: Response, next: NextFunction){
    const { title, description, completed} = req.body;
        if (!title || typeof title !== 'string' ) throw new Error("Title is required and must be a string");
        if(description && typeof description !== 'string') throw new Error('Description must be a string')
        if(typeof completed !== 'boolean')  throw new Error("Completed must be a boolean")
        next()
}

function checkTaskId(req: Request, res: Response, next: NextFunction){
    const {id} = req.params;
    if(isNaN(id) || id <= 0) throw new Error("ID must be a positive number!")
    next()
}

export {checkTaskBody, checkTaskId}