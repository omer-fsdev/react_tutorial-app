import axios from "axios";

const EditTutorial = ({ modalEdit, setModalEdit, getTutorial }) => {
  const { id, title, description } = modalEdit;

  const url = "https://tutorial-api.fullstack.clarusway.com/tutorials/";

  const putTutorial = async (editedTutorial) => {
    await axios.put(`${url}${editedTutorial.id}/`, editedTutorial);
    getTutorial();
  };

  return (
    <div className="modal " tabIndex="-1" id="edit-modal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title text-success display-5">Edit</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          <div className="modal-body">
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Title:
              </label>
              <input
                type="text"
                className="form-control text-primary border-success"
                id="title"
                placeholder="Enter a title"
                value={title}
                required
                onChange={(it) =>
                  setModalEdit({ ...modalEdit, title: it.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <label htmlFor="desc" className="form-label">
                Description:
              </label>
              <input
                type="text"
                className="form-control text-primary border-success"
                id="desc"
                placeholder="Enter a description"
                value={description}
                required
                onChange={(it) =>
                  setModalEdit({ ...modalEdit, description: it.target.value })
                }
              />
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary fst-italic"
              data-bs-dismiss="modal"
              onClick={() =>
                putTutorial({ id: id, title: title, description: description })
              }
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditTutorial;
