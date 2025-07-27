import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

const ArticlePage = () => {
  const { id } = useParams();
  console.log(id);

  const [data, setData] = useState({
    id: "",
    title: "",
    date: "",
    content: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:4000/blogContent/${id}`);
        if (!response.ok) throw new Error("Failed to fetch data");
        const data = await response.json();
        console.log(data);
        setData(data);
      } catch (err) {
        (err as Error).message;
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <h6 className="text-right align-item-left px-40 pt-18">{data.date}</h6>
      <div className="px-40 py-18">
        <h1>
          {" "}
          {id} {data.title}
        </h1>
        <br />
        <article>
          <p>{data.content}</p>
        </article>
      </div>
    </>
  );
};

export default ArticlePage;
