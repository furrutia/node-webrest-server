import { prisma } from "../../data/postgres";
import { CreateTodoDto, UpdateTodoDto } from "../../domain/dtos";
import { Todo } from "./interface";

// const todos: Todo[] = [
//     { id: 1, name: 'Test API', completedAt: new Date() },
//     { id: 2, name: 'Test API 2', completedAt: new Date() },
//     { id: 3, name: 'Test API 3', completedAt: new Date() },
// ];

export class TodosRepository {

    public async getTodos(): Promise<Todo[]> {

        const todos = await prisma.todo.findMany();

        return todos.map(todo => ({
            id: todo.id,
            text: todo.text,
            completedAt: todo.completedAt ?? new Date()
        }));

    }

    public async getTodoById(id: number): Promise<Todo | null> {

        const todo = await prisma.todo.findUnique({
            where: { id }
        });

        if (!todo) return null;

        return {
            id: todo.id,
            text: todo.text,
            completedAt: todo.completedAt ?? new Date()
        };

    }

    public async addTodo(todo: CreateTodoDto): Promise<number> {

        const createdTodo = await prisma.todo.create({
            data: {
                text: todo.text,
                completedAt: new Date()
            }
        });

        return createdTodo.id;

    }

    public async updateTodo(id: number, updateTodo: UpdateTodoDto): Promise<boolean> {

        console.log('updateTodo in Repository Values', updateTodo.values);

        const result = await prisma.todo.updateMany({
            where: { id },
            data: updateTodo.values
        });

        console.log('result:', result);

        return result.count > 0;

    }

    public async deleteTodo(id: number): Promise<boolean> {

        const result = await prisma.todo.deleteMany({
            where: { id }
        });

        return result.count > 0;

    }

    public async clearTodos(): Promise<void> {

        await prisma.todo.deleteMany({});

    }

    public async getTodosCount(): Promise<number> {

        return await prisma.todo.count();

    }

}