import axios from "axios";
import { getToken } from "./authService";

const API_URL = "http://localhost:5000/api/documents";

// Get all documents
export const getDocuments = async () => {
  return await axios.get(API_URL, {
    headers: { Authorization: `Bearer ${getToken()}` },
  });
};

// Get a single document by ID
export const getDocumentById = async (docId) => {
  return await axios.get(`${API_URL}/${docId}`, {
    headers: { Authorization: `Bearer ${getToken()}` },
  });
};

// Create a new document
export const createDocument = async (title) => {
  return await axios.post(API_URL, { title }, {
    headers: { Authorization: `Bearer ${getToken()}` },
  });
};

// Update document content
export const updateDocument = async (docId, content) => {
  return await axios.put(`${API_URL}/${docId}`, { content }, {
    headers: { Authorization: `Bearer ${getToken()}` },
  });
};

// Delete a document
export const deleteDocument = async (docId) => {
  return await axios.delete(`${API_URL}/${docId}`, {
    headers: { Authorization: `Bearer ${getToken()}` },
  });
};

