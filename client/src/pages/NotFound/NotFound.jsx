import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  return (
    <section className="notfound">

      <div className="notfound-container">

        <h1>404</h1>

        <h2>Page Not Found</h2>

        <p>
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>

        <Link to="/">
          <button>Go Back Home</button>
        </Link>

      </div>

    </section>
  );
}

export default NotFound;