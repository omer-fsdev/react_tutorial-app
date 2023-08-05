import { useState } from "react";

const AddTutorial = ({ postTutorial }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  // const postTutorial = async (newTutorial) => {
  //   await axios.post(url, newTutorial)
  // }
  const mySend = (i) => {
    i.preventDefault();
    //* data to database:
    postTutorial({ title: title, description: desc });
    setTitle("");
    setDesc("");
  };

  return (
    <div className="container">
      <h1 className="display-6 mt-5 text-success text-center fst-italic">
        Add New Tutorial
      </h1>
      <form onSubmit={mySend}>
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
            onChange={(i) => setTitle(i.target.value)}
            required
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
            value={desc}
            onChange={(i) => setDesc(i.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary mb-4 fst-italic">
          Submit
        </button>
      </form>
      <hr className="text-success" />
    </div>
  );
};

export default AddTutorial;
