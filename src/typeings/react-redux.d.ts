import { TodoModal } from '../domain/todo.d';

declare module 'react-redux' {
    interface DefaultRootState {
        todoModal: TodoModal;
        visibilityFilter: string;
    }
    export function useSelector<TState = DefaultRootState, TSelected = unknown>(
        selector: (state: TState) => TSelected,
        equalityFn?: (left: TSelected, right: TSelected) => boolean,
    ): TSelected;
}
