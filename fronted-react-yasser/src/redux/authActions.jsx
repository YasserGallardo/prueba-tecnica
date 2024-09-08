import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;

export const login = createAsyncThunk(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${apiUrl}/auth/login`, {
        username: credentials.username,
        password: credentials.password,
      });
      return { token: response.data.token };
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const register = createAsyncThunk(
  "auth/register",
  async (userData, { rejectWithValue }) => {
    try {
      console.log(apiUrl);
      const response = await axios.post(`${apiUrl}/auth/register`, {
        username: userData.username,
        password: userData.password,
        firstname: userData.firstname,
        lastname: userData.lastname,
        country: userData.country,
      });
      return { token: response.data.token };
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
