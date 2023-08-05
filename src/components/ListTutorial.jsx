import { AiTwotoneEdit } from "react-icons/ai";
import { MdDeleteForever } from "react-icons/md";
import EditTutorial from "./EditTutorial";
import axios from "axios";
import { useState } from "react";

const ListTutorial = ({ tutorial, getTutorial }) => {
  const [modalEdit, setModalEdit] = useState("");
  const url = "https://tutorial-api.fullstack.clarusway.com/tutorials/";

  const deleteTutorial = async (id) => {
    await axios.delete(`${url}${id}/`);
    getTutorial();
  };

  return (
    <div className="container mt-4">
      <h1 className="display-6 mt-5 mb-4 text-success text-center fst-italic">
        The List
      </h1>
      <table className="table table-striped border-success">
        <thead>
          <tr>
            <th scope="col" className="bg-success-subtle text-primary">
              #id
            </th>
            <th scope="col" className="bg-success-subtle text-primary">
              Title
            </th>
            <th scope="col" className="bg-success-subtle text-primary">
              Description
            </th>
            <th
              scope="col"
              className="text-center bg-success-subtle text-primary"
            >
              Edit/Del
            </th>
          </tr>
        </thead>
        <tbody>
          {tutorial.map((i) => {
            return (
              <tr key="id">
                <th>{i.id}</th>
                <td>{i.title}</td>
                <td>{i.description} </td>
                <td className="text-center text-nowrap">
                  <AiTwotoneEdit
                    //! modal (next 2 lines)
                    data-bs-toggle="modal"
                    data-bs-target="#edit-modal"
                    size={23}
                    className="me-2 text-warning cursor-pointer"
                    type="button"
                    onClick={() => setModalEdit(i)}
                  />

                  <MdDeleteForever
                    size={22}
                    className="text-danger cursor-pointer"
                    onClick={() => deleteTutorial(i.id)}
                    type="button"
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <EditTutorial
        modalEdit={modalEdit}
        setModalEdit={setModalEdit}
        getTutorial={getTutorial}
      />
    </div>
  );
};

export default ListTutorial;
