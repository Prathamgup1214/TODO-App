function AddItems({ addItem, addDate, onClickDelete }) {
  return (
    <div className="container">
      <div className="row custom-row">
        <div className="col-6">{addItem}</div>
        <div className="col-4">{addDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger custom-button"
            onClick={() => onClickDelete(addItem)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddItems;
