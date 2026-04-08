import { useState } from "react";

export default function AddStudent({ addStudent }) {
  const [name, setName] = useState("");
  const [score, setScore] = useState("");

  const handleAdd = () => {
    if (!name || !score) return;
    addStudent(name, Number(score));
    setName("");
    setScore("");
  };

  return (
    <div className="card">
      <input className="student_name" placeholder="Student Name" value={name} onChange={(e) => setName(e.target.value)}/>

      <input className="student_number" placeholder="Score (0-100)" type="number" value={score} onChange={(e) => setScore(e.target.value)}/>

      <button onClick={handleAdd}>+ ADD</button>
    </div>
  );
}