import "./MyPapers.css";

function MyPapers() {
  const papers = [
    {
      title: "AI Based Research Repository",
      date: "12 March 2025",
      status: "Published",
    },
    {
      title: "Cloud Computing Security",
      date: "22 February 2025",
      status: "Under Review",
    },
    {
      title: "Machine Learning in Healthcare",
      date: "5 January 2025",
      status: "Published",
    },
  ];

  return (
    <section className="mypapers">
      <h1>My Papers</h1>

      <div className="papers-container">
        {papers.map((paper, index) => (
          <div className="mypaper-card" key={index}>
            <div>
              <h3>{paper.title}</h3>
              <p>Uploaded: {paper.date}</p>
              <span>{paper.status}</span>
            </div>

            <div className="mypaper-actions">
              <button>Edit</button>
              <button className="delete-btn">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MyPapers;