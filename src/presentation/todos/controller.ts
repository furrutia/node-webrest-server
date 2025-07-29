import { Request, Response } from "express"
import { TodosService } from "./services"

export class TodosController {
    
    constructor() {}

    public getTodos = (req: Request, res: Response) => {

        const todos = new TodosService().getTodos();
        res.json(todos);

    }

    public getTodoById = (req: Request, res: Response) => {

        const id = parseInt(req.params.id, 10);
        const todo = new TodosService().getTodoById(id);
        
        (todo) 
            ? res.json(todo)
            : res.status(404).json({ message: "Todo not found" });

    }

    public addTodo = (req: Request, res: Response) => {

        const todo = req.body;
        const id = new TodosService().addTodo(todo);
        res.status(201).json({ id });

    }

    public updateTodo = (req: Request, res: Response) => {

        const id = parseInt(req.params.id, 10);
        const updateTodo = req.body;

        const success = new TodosService().updateTodo(id, updateTodo);
        if (!success) {
            return res.status(404).json({ message: "Todo not found" });
        }

        res.json({ message: "Todo updated successfully" });

    }

    public deleteTodo = (req: Request, res: Response) => {

        const id = parseInt(req.params.id, 10);
        const success = new TodosService().deleteTodo(id);

        if (!success) {
            return res.status(404).json({ message: "Todo not found" });
        }

        res.json({ message: "Todo deleted successfully" });

    }

    public clearTodos = (req: Request, res: Response) => {

        new TodosService().clearTodos();
        res.json({ message: "All todos cleared" });

    }

    public getTodosCount = (req: Request, res: Response) => {

        const count = new TodosService().getTodosCount();
        res.json({ count });

    }
}