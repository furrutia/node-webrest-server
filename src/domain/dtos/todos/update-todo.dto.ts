

export class UpdateTodoDto {

    private constructor(
        public readonly id?: number,
        public readonly text?: string,
        public readonly completedAt?: Date
    ){}

    get values() {
        const returnObj: {[key: string]: any} = {};

        if ( this.text ) returnObj.text = this.text;
        // if ( this.completedAt ) returnObj.completedAt = this.completedAt;
        returnObj.completedAt = this.completedAt;

        return returnObj;
    }

    static create( props: {[key: string]: any} ): [string?, UpdateTodoDto?]  {

        const { id, text, completedAt } = props;

        console.log('updateTodo completedAt:', completedAt);

        let newCompletedAt = completedAt;

        if ( !id || isNaN(id) ) {
            return ['ID is required and must be a number', undefined];
        }

        if ( completedAt ) {
            newCompletedAt = new Date(completedAt);
            if (isNaN(newCompletedAt.getTime())) {
                return ['completedAt is not a valid date', undefined];
            }
        }

        console.log('updateTodo newCompletedAt:', newCompletedAt);

        return [undefined, new UpdateTodoDto(id, text, newCompletedAt)];
    }
}