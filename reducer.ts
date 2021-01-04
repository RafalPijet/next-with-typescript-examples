import { FetchTasksAction } from "./actions";
import { Task } from "./types";

export interface AppState {
    tasks: Task[]
}

const defaultState = {
    tasks: []
}

export const reducer = (state: AppState = defaultState, action: FetchTasksAction) => {
    switch (action.type) {
        case 'FETCH_TASKS':
            return { ...state, tasks: action.tasks };
        default:
            return state
    }
}