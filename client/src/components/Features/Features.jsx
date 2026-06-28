import "./Features.css";

const Features = () => {
  const features = [
    {
      title: "Easy Access",
      text: "Browse and search previous year question papers with ease.",
    },
    {
      title: "Organized Repository",
      text: "Question papers are arranged by department and semester.",
    },
    {
      title: "Free Download",
      text: "Download PDFs instantly without any hassle.",
    },
    {
      title: "Student Friendly",
      text: "Simple interface designed for every student.",
    },
  ];

  return (
    <section className="features">
      <h2>Our Features</h2>

      <div className="feature-container">
        {features.map((item, index) => (
          <div className="feature-card hover-card fade-in" key={index}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;