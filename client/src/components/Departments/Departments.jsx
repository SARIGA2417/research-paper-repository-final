import "./Departments.css";

const Departments = () => {
  const departments = [
    "Computer Science",
    "Information Technology",
    "Mechanical Engineering",
    "Civil Engineering",
    "Electrical Engineering",
    "Electronics & Communication",
    "Artificial Intelligence",
    "Data Science",
  ];

  return (
    <section className="departments">
      <h2>Browse by Department</h2>
      <p>
        Explore research papers organized by department and specialization.
      </p>

      <div className="department-grid">
        {departments.map((dept, index) => (
          <div className="department-card hover-card fade-in" key={index}>
            <h3>{dept}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Departments;