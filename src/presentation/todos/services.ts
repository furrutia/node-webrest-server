const todos: Todo[] = [
    { id: 1, name: 'Test API', createdAt: new Date() },
    { id: 2, name: 'Test API 2', createdAt: new Date() },
    { id: 3, name: 'Test API 3', createdAt: new Date() },
];

export class TodosService {

    public getTodos(): Todo[] {

        return todos;

    }

    public getTodoById(id: number): Todo | undefined {

        return todos.find(todo => todo.id === id);

    }

    public addTodo(todo: Todo): number {

        const newId = todos.length + 1;
        
        const todoAdd = { 
            id: newId, 
            name: todo.name, 
            createdAt: new Date() 
        };

        todos.push(todoAdd);
        return newId;

    }

    public updateTodo(id: number, updateTodo: Todo): boolean {

        const index = todos.findIndex(todo => todo.id === id);
        if (index === -1) return false;
        todos[index] = { ...todos[index], ...updateTodo };
        return true;

    }

    public deleteTodo(id: number): boolean {

        const index = todos.findIndex(todo => todo.id === id);
        if (index === -1) return false;
        todos.splice(index, 1);
        return true;

    }

    public clearTodos(): void {

        todos.forEach((todo, index) => {
            todos.splice(index, 1);
        });
        todos.length = 0; 

    }

    public getTodosCount(): number {

        return todos.length;

    }

}

export interface Todo {
    id: number;
    name: string;
    createdAt: Date;
}