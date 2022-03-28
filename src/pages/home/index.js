import "./style.css";
import useFetch from "../../api/useFetch";
function Home() {
  const { donnee } = useFetch("https://backtest01.herokuapp.com/");
  return (
    <>
      <div className="container">
        <h1 className="title">Todo list</h1>
        <ul>
          {donnee.map((value, index) => (
            <li key={index}>
              {value.title} {value.description} {value.date}{" "}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Home;
