import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
      <div className="text-center p-5 shadow-lg rounded bg-white" style={{ maxWidth: "600px" }}>
        <h1 className="text-primary">Welcome to the Real-Time Collaboration Tool</h1>
        <p className="text-muted">Edit documents in real-time with multiple users.</p>
        <Link to="/login" className="btn btn-primary btn-lg">Get Started</Link>
      </div>
    </div>
  );
};

export default Landing;
