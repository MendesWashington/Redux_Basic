import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../store";

export function AddTodoList() {
  const [newTodo, setNewTodo] = useState("");

  const despatch = useDispatch();

  function handleNewTodo(event: FormEvent) {
    event.preventDefault();

    despatch(add({ newTodo }));
  }

  return (
    <form onSubmit={handleNewTodo}>
      <input
        type="text"
        id="todo"
        placeholder="Novo todo"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}
