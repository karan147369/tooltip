import "./App.css";
import Tooltip from "./Components/Tooltip";

function App() {
  return (
    <>
      <div id="container">
        <button id="myButton">Hover over me</button>
        {/*change the position property in values props to 'Top', 'Left, 'Right','Bottom'*/}
        <Tooltip
          values={{
            id: "myButton",
            message: "Thanks for hovering! I'm a tooltip",
            position: "Top",
          }}
        ></Tooltip>
      </div>
    </>
  );
}

export default App;
