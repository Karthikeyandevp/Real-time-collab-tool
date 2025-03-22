import { Link } from "react-router-dom";

const DocumentCard = ({ doc }) => {
  return (
    <div className="card my-2">
      <div className="card-body">
        <h5 className="card-title">{doc.title}</h5>
        <Link to={`/editor/${doc._id}`} className="btn btn-primary">Edit</Link>
      </div>
    </div>
  );
};

export default DocumentCard;
