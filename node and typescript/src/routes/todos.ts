import {Router} from 'express';
import { Todo } from '../models/todo';
type RequestBody = { text :string};
type RequestParams = {todoId:string};

let todos: Todo[] = [];
const router = Router();
router.get('/',(req,res,next) => {
res.status(200).json({todos :todos });
});

router.post('/todo',(req,res,next) => {
    try{
        const body = req.body as RequestBody;
    const newTodo:Todo = {
        id:new Date().toISOString(),
        text:body.text,
    };
    todos.push(newTodo);
    res.status(201).json({todo:newTodo,message:'added todo',todos:todos});
}
catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
}
});

router.put('/todo/:todoId',(req,res,next) => {
    const params = req.params as RequestParams;
    const body = req.body as RequestBody;
    const todoIndex = todos.findIndex(todoItem => todoItem.id === params.todoId);
    if(todoIndex >= 0){
        todos[todoIndex] = {id:todos[todoIndex].id,text:body.text};
        return res.status(200).json({message:'updated todo',todos:todos});
    }
    res.status(404).json({message:'could not find todo for this id.'});
});

router.delete('/todo/:todoId',(req,res,next) => {
    const tid = req.params.todoId;
    const params = req.params as RequestParams;
   todos = todos.filter(todoItem => todoItem.id !== params.todoId);
   res.status(200).json({message:'Deleted todo',todos:todos });
});
export default router;