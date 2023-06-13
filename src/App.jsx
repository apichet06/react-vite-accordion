import "./App.css";
import { Item } from "./components/item";

import logo from "./assets/images/logo.png";
import constant from "./data/contents";
function App() {
  return (
    <div className="App">
      <img src={logo} />
      <h3>เครื่องมือพัฒนาเว็บปี 2023 (React + Vite)</h3>
      {constant.map((data) => {
        return (
          <Item
            key={data.id}
            title={data.title}
            description={data.description}
          />
        );
      })}
    </div>
  );
}

export default App;
