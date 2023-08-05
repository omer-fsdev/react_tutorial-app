import { useEffect, useState } from "react";
import AddTutorial from "../components/AddTutorial";
import ListTutorial from "../components/ListTutorial";
import axios from "axios";

const Home = () => {
  const [tutorial, setTutorial] = useState([]);

  const url = "https://tutorial-api.fullstack.clarusway.com/tutorials/";

  const getTutorial = async () => {
    const { data } = await axios.get(url);
    setTutorial(data);

    //* 2.way:
    // axios
    //   .get(url)
    //   .then((response) => setTutorial(response.data))
    //   .catch((error) => console.error(error));
  };

  useEffect(() => {
    getTutorial();
  }, []);
  // console.log(tutorial)

  //* post, create
  const postTutorial = async (newTutorial) => {
    await axios.post(url, newTutorial);
    //* update the list "tutorial" to update display:
    getTutorial();
  };

  return (
    <div className="">
      <h1 className="display-1 mb-0 bg-success text-light ps-5 pt-4">
        Tutorial App
      </h1>
      <AddTutorial postTutorial={postTutorial} />

      <ListTutorial tutorial={tutorial} getTutorial={getTutorial} />
    </div>
  );
};

export default Home;
