import { Provider } from "react-redux";
import { TodoList } from "./components/TodoList";
import { AddTodoList } from "./components/AddTodoList";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <TodoList />
      <AddTodoList />
    </Provider>
  );
}

export default App;
