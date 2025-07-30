import { CreateTodoDto, UpdateTodoDto } from "../../domain/dtos";
import { Todo } from "./interface";
import { TodosRepository } from "./repository";

export class TodosService {

    public async getTodos(): Promise<Todo[]>{

        const todos = await new TodosRepository().getTodos();
        return todos;
    }

    public async getTodoById(id: number): Promise<Todo | null> {

        return await new TodosRepository().getTodoById(id);

    }

    public async addTodo(todo: CreateTodoDto): Promise<number> {

        return await new TodosRepository().addTodo(todo);

    }

    public async updateTodo(id: number, updateTodo: UpdateTodoDto): Promise<boolean> {

        const result = await new TodosRepository().updateTodo(id, updateTodo);
        return result;

    }

    public async deleteTodo(id: number): Promise<boolean> {

        return await new TodosRepository().deleteTodo(id);

    }

    public async clearTodos(): Promise<void> {

        return await new TodosRepository().clearTodos();

    }

    public async getTodosCount(): Promise<number> {

        return await new TodosRepository().getTodosCount();

    }

}
