import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { io } from "socket.io-client";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { jsPDF } from "jspdf";
import * as htmlToImage from "html-to-image";
import { saveAs } from "file-saver";

const socket = io("http://localhost:5000");

const Editor = () => {
  const { docId } = useParams();
  const [content, setContent] = useState("");
  const editorRef = useRef(null);

  useEffect(() => {
    socket.emit("joinDocument", docId);
    socket.on("documentData", (data) => setContent(data));

    return () => {
      socket.off("documentData");
    };
  }, [docId]);

  const handleChange = (value) => {
    setContent(value);
    socket.emit("updateDocument", { docId, content: value });
  };

  // ✅ Export as PDF
  const exportAsPDF = async () => {
    const doc = new jsPDF();
    const editorElement = editorRef.current;
    
    if (editorElement) {
      const imgData = await htmlToImage.toPng(editorElement);
      doc.addImage(imgData, "PNG", 10, 10, 180, 0);
      doc.save(`document-${docId}.pdf`);
    }
  };

  // ✅ Export as Word File
  const exportAsWord = () => {
    const blob = new Blob([content], { type: "application/msword" });
    saveAs(blob, `document-${docId}.doc`);
  };

  return (
    <div className="container mt-5">
      <div className="card shadow p-4">
        <h2 className="text-center text-primary">Editing Document: {docId}</h2>
        <div ref={editorRef} className="mt-3">
          <ReactQuill theme="snow" value={content} onChange={handleChange} />
        </div>
        <div className="mt-3 text-center">
          <button className="btn btn-success mx-2" onClick={exportAsPDF}>📄 Export as PDF</button>
          <button className="btn btn-primary mx-2" onClick={exportAsWord}>📜 Export as Word</button>
        </div>
      </div>
    </div>
  );
};

export default Editor;

