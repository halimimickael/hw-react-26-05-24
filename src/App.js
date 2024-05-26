import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';
import Header1 from "./components/Header1";
import ContextProvider from "./context/Context1.js";
import StudentPage from "./pages/StudentPage";




function App() {

  return (
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StudentPage />} />
        </Routes> 
      </BrowserRouter>
    </ContextProvider>

  );
}

export default App;
