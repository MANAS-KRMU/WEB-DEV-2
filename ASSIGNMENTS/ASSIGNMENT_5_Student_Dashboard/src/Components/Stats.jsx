export default function Stats({ students }) {
  const total = students.length;
  const passed = students.filter(s => s.score >= 40).length;
  const avg =
    total === 0
      ? 0
      : Math.round(
          students.reduce((a, b) => a + b.score, 0) / total
        );

  return (
    <div className="card">
      <p>Total: {total}</p>
      <p>Passed: {passed}</p>
      <p>Avg Score: {avg}</p>
    </div>
  );
}