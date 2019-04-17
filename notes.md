Core principles to Redux

- There is 1 global state object that manages the state for your entire application. It is the single source of truth.
- The only way to modify the state is through emitting an action, which is an object that describes what should change. Action Creators are the functions that are dispatched to emit a change – all they do is return an action.
- When an action is dispatched, a Reducer is the function that actually changes the state appropriate to that action – or returns the existing state if the action is not applicable to that reducer.
- Reducers are “pure functions”. They should not have any side-effects nor mutate the state — they must return a modified copy.
- Individual reducers are combined into a single rootReducer to create the discrete properties of the state.
- The Store is the thing that brings it all together: it represents the state by using the rootReducer, any middleware (Thunk), and allows you to actually dispatch actions.
- For using Redux in React, the <Provider /> component wraps the entire application and passes the storedown to all children.