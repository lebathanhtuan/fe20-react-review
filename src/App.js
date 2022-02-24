import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import List from "./List";
import Detail from "./Detail";
import PrivateLayout from "./PrivateLayout";

function App() {
  const navigate = useNavigate();

  const name = "Tuấn";
  const productList = [
    {
      id: 1,
      name: "iPhone X",
      price: 100,
    },
    {
      id: 2,
      name: "iPhone XS",
      price: 150,
    },
    {
      id: 3,
      name: "iPhone 12",
      price: 300,
    },
  ];

  return (
    <div className="App">
      <Routes>
        <Route element={<PrivateLayout />}>
          <Route
            path="/"
            element={
              <div>
                <div>Home</div>
                <button
                  onClick={() =>
                    navigate("/list", {
                      state: {
                        name: "Tuấn",
                      },
                    })
                  }
                >
                  Go to List
                </button>
              </div>
            }
          />
          <Route
            path="/list"
            element={
              <List name={name} class="FE20" productList={productList}>
                123
              </List>
            }
          />
          <Route path="/list/:id" element={<Detail />} />
        </Route>
        <Route path="/login" element={<div>Login</div>} />
      </Routes>
    </div>
  );
}

export default App;
