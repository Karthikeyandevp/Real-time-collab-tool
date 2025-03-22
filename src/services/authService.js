import axios from "axios";

const API_URL = "http://localhost:5000/api/auth";

// ✅ Register User (Now includes `username`)
export const register = async (username, email, password) => {
  try {
    const response = await axios.post(`${API_URL}/register`, { username, email, password });
    return response.data;
  } catch (error) {
    console.error("Registration failed:", error.response?.data || error.message);
    throw error;
  }
};

// ✅ Login User (Now returns `user` object along with token)
export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    
    if (response.data.token) {
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user)); // Save user info
    }
    
    return response.data;
  } catch (error) {
    console.error("Login failed:", error.response?.data || error.message);
    throw error;
  }
};

// ✅ Logout User
export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};

// ✅ Get Auth Token
export const getToken = () => {
  return localStorage.getItem("token");
};

// ✅ Get Logged-in User Info
export const getUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

// ✅ Set Authorization Header for API Requests
export const authHeader = () => {
  const token = getToken();
  return token ? { Authorization: `Bearer ${token}` } : {};
};
