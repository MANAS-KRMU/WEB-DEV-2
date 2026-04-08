import { useState } from "react";
import Header from "./components/Header";
import AddStudent from "./components/AddStudent";
import Stats from "./components/Stats";
import StudentTable from "./components/StudentTable";
import "./App.css";

function App() {
  const [students, setStudents] = useState([
    { name: "Aman", score: 78 },
    { name: "Riya", score: 45 },
    { name: "Karan", score: 90 },
    { name: "Neha", score: 32 },
  ]);

  const addStudent = (name, score) => {
    setStudents([...students, { name, score }]);
  };

  return (
    <div className="container">
      <Header />
      <AddStudent addStudent={addStudent} />
      <Stats students={students} />
      <StudentTable students={students} />
    </div>
  );
}

export default App;