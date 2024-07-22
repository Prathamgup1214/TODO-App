import AppName from "./components/app-name";
import AddToDo from "./components/AddToDo";
import TodoItemsCont from "./components/ToDoItemsContainer";
import WelcomeMessage from "./components/WelcomeMessage";
import "./app.css";
import { useState } from "react";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`New Item Added :${itemName}  Date :${itemDueDate}`);
    const newTodoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setTodoItems(newTodoItems);
  };

  const handleDeleteButton = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };
  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddToDo onNewItem={handleNewItem}></AddToDo>
      {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
      <TodoItemsCont
        todoItems={todoItems}
        onClickDelete={handleDeleteButton}
      ></TodoItemsCont>
    </center>
  );
}

export default App;
