import { Request, Response } from "express"
import { TodosService } from "./services"
import { CreateTodoDto, UpdateTodoDto } from "../../domain/dtos";

export class TodosController {
    
    constructor() {}

    public getTodos = async (req: Request, res: Response) => {

        const todos = await new TodosService().getTodos();
        res.json(todos);

    }

    public getTodoById = async (req: Request, res: Response) => {

        const id = parseInt(req.params.id, 10);
        if (isNaN(id)) return res.status(400).json({ message: `Invalidad ID` });

        const todo = await new TodosService().getTodoById(id);
        
        (todo) 
            ? res.json(todo)
            : res.status(404).json({ message: `TODO with id ${id} not found` });

    }

    public addTodo = async(req: Request, res: Response) => {

        const [ error, createTodoDTO ] = CreateTodoDto.create(req.body);

        if (error) return res.status(400).json({ message: error });

        const id = await new TodosService().addTodo(createTodoDTO!);
        res.status(201).json({ id });

    }

    public updateTodo = async (req: Request, res: Response) => {

        const id = parseInt(req.params.id, 10);
        const [ error, updateTodo ] = UpdateTodoDto.create({ id, ...req.body });
        if (error) return res.status(400).json({ message: error });

        const success = await new TodosService().updateTodo(id, updateTodo!);

        (success)
            ? res.json({ message: "Todo updated successfully" })
            : res.status(404).json({ message: `TODO with id ${id} not found` });

    }

    public deleteTodo = async (req: Request, res: Response) => {

        const id = parseInt(req.params.id, 10);
        if (isNaN(id)) return res.status(400).json({ message: `Invalidad ID` });

        const success = await new TodosService().deleteTodo(id);

        ( success )
            ? res.json({ message: "Todo deleted successfully" })
            : res.status(404).json({ message: `TODO with id ${id} not found` });
               

    }

    public clearTodos = async (req: Request, res: Response) => {

        await new TodosService().clearTodos();
        res.json({ message: "All todos cleared" });

    }

    public getTodosCount = async (req: Request, res: Response) => {

        const count = await new TodosService().getTodosCount();
        res.json({ count });

    }
}