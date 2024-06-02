import { createContext, useLayoutEffect, useState } from "react";
export const AppContext = createContext(null);

export default function ContextProvider({children}){
  const [student_ar, setStudentAr] = useState([
    {name: "Luiz", score: "50", id: 1},
    {name: "Tiago", score: "80", id: 2},
    {name: "Rodrigo", score: "90", id: 3},
  ]);
  const [showEdit, setShowEdit] = useState(false);
  const [currentStudentEdit, setCurrentEdit] = useState({});

  useLayoutEffect(() => {
    if (localStorage.getItem("student_ar")) {
      setStudentAr(JSON.parse(localStorage.getItem("student_ar")));
    }
  }, []);

  const addStudent = (newItem) => {
    setStudentAr([...student_ar, newItem]);
    localStorage.setItem("student_ar", JSON.stringify([...student_ar, newItem]));
  };

  const resetList = () => {
    if (window.confirm("Delete all?")) {
      setStudentAr([]);
      localStorage.setItem("student_ar", JSON.stringify([]));
    }
  };

  const deleteStudent = (_id) => {
    const filter_ar = student_ar.filter(item => item.id !== _id);
    setStudentAr(filter_ar);
    localStorage.setItem("student_ar", JSON.stringify(filter_ar));
  };

  const updatedStudent = (id, updatedStudent) => {
    const updatedArray = student_ar.map(student => 
      student.id === id ? { ...student, ...updatedStudent } : student
    );
    setStudentAr(updatedArray);
    localStorage.setItem("student_ar", JSON.stringify(updatedArray));
  };

  const globalVal = {
    student_ar, addStudent, resetList, deleteStudent, updatedStudent,
    showEdit, setShowEdit, currentStudentEdit, setCurrentEdit 
  };

  return (
    <AppContext.Provider value={globalVal}>
      {children}
    </AppContext.Provider>
  );
}
