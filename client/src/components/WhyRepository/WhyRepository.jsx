import "./WhyRepository.css";

const WhyRepository = () => {
  const items = [
  {
    title: "Fast Access",
    text: "Find research papers quickly using a simple search.",
  },
  {
    title: "Well Organized",
    text: "Papers are categorized by department and subject.",
  },
  {
    title: "Easy Download",
    text: "Download research papers instantly in PDF format.",
  },
  {
    title: "Secure Upload",
    text: "Only verified users can upload and manage research papers.",
  },
];

  return (
    <section className="why">
      <h2>Why Our Repository?</h2>

      <div className="why-container">
        {items.map((item, index) => (
          <div className="why-card hover-card fade-in" key={index}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyRepository;