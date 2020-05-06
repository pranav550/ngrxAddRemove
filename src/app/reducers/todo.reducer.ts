import { ActionParent } from './../actions/todo.actions';
import { TodoActionTypes } from './../shared/enum/todo-action-types.enum';
import { Todo } from './../shared/models/todo';

const initialState: Todo[] = [
    { title: "Todo 1" },
    { title: "Todo 2" },
    { title: "Todo 3" }
]

export function TodoReducer(state = initialState, action: ActionParent) {
    switch (action.type) {
        case TodoActionTypes.Add:
            return [...state, action.payload]
        case TodoActionTypes.Remove:
            return [
                ...state.slice(0, action.payload),
                ...state.slice(action.payload + 1)
            ];
        default:
            return state
    }
}