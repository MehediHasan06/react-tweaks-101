export const DeleteTask = (props) => {
  const {id, deleteTask} = props;

  return (
    <div>
      <button onClick={() => deleteTask(id)}>X</button>
    </div>
  );
};
