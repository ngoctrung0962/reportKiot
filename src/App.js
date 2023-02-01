import { Route, Routes } from "react-router-dom";
import "./App.css";
import CustomLayout from "./layouts/CustomLayout";

function App() {
  return (
    <Routes>
      <Route path="/*" exact element={<CustomLayout />} />
    </Routes>
  );
}

export default App;
