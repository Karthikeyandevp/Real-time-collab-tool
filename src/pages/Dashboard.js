import { useEffect, useState } from "react";
import axios from "axios";
import DocumentCard from "../components/DocumentCard";

const Dashboard = () => {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/documents")
      .then((res) => setDocuments(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container mt-5">
      <h2>Your Documents</h2>
      <button className="btn btn-success">New Document</button>
      <div className="mt-3">
        {documents.map((doc) => <DocumentCard key={doc._id} doc={doc} />)}
      </div>
    </div>
  );
};

export default Dashboard;
