import "./App.css";
import Day1 from "./components/Day1";
import Day2 from "./components/Day2";

function App() {
  const sampleArray = [<Day1 />, <Day2 />];

  return (
    <div className="app">
      <div className="app__header">
        <h1 className="app__headerTitle">CSS SAMPLES</h1>
      </div>
      <div className="app__body">
        {sampleArray.map((sample) => {
          return <div className="app__sample">{sample}</div>;
        })}
      </div>
    </div>
  );
}

export default App;
