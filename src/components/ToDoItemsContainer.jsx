import AddItems from "./addItems";
import styles from "./ToDoItemsContainer.module.css";

const TodoItemsCont = ({ todoItems, onClickDelete }) => {
  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => (
        <AddItems
          addDate={item.dueDate}
          addItem={item.name}
          onClickDelete={onClickDelete}
        ></AddItems>
      ))}
    </div>
  );
};

export default TodoItemsCont;
