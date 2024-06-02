import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';
import Header1 from "./components/Header1";
import ContextProvider from "./context/Context1.js";
import StudentPage from "./pages/StudentPage";
import Form1 from "./components/Form1.js";

function App() {

  return (
    <ContextProvider>
      <BrowserRouter>
        <Header1 />
        <Routes>
          <Route path="/student" element={<StudentPage />} />
          <Route path="/form" element={<Form1 />} />
        </Routes> 
      </BrowserRouter>
    </ContextProvider>

  );
}

export default App;
