import { TaskState } from "./task/task-state";
import { UserState } from "./user/user-state";
export interface AppState {
    user : UserState;
    tasks : TaskState;
}