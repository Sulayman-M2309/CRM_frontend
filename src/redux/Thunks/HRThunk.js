import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "../apis/apiService";
import { HREndPoints } from "../apis/APIsEndpoints";

// GET
export const HandleGetHumanResources = createAsyncThunk(
  "HR/get",
  async ({ apiroute }, { rejectWithValue }) => {
    try {
      const endpoint = HREndPoints[apiroute];
      if (!endpoint) throw new Error("Invalid GET API route");
      const response = await apiService.get(endpoint, { withCredentials: true });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || { message: error.message });
    }
  }
);

// POST
export const HandlePostHumanResources = createAsyncThunk(
  "HR/post",
  async ({ apiroute, data, type }, { rejectWithValue }) => {
    try {
      const endpoint =
        type === "resetpassword"
          ? HREndPoints.RESET_PASSWORD(apiroute)
          : HREndPoints[apiroute];

      if (!endpoint) throw new Error("Invalid POST API route");

      const response = await apiService.post(endpoint, data, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || { message: error.message });
    }
  }
);

// PUT
export const HandlePutHumanResources = createAsyncThunk(
  "HR/put",
  async ({ apiroute, data }, { rejectWithValue }) => {
    try {
      const endpoint = HREndPoints[apiroute];
      if (!endpoint) throw new Error("Invalid PUT API route");

      const response = await apiService.put(endpoint, data, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || { message: error.message });
    }
  }
);

// PATCH
export const HandlePatchHumanResources = createAsyncThunk(
  "HR/patch",
  async ({ apiroute, data }, { rejectWithValue }) => {
    try {
      const endpoint = HREndPoints[apiroute];
      if (!endpoint) throw new Error("Invalid PATCH API route");

      const response = await apiService.patch(endpoint, data, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || { message: error.message });
    }
  }
);

// DELETE
export const HandleDeleteHumanResources = createAsyncThunk(
  "HR/delete",
  async ({ apiroute }, { rejectWithValue }) => {
    try {
      const endpoint = HREndPoints[apiroute];
      if (!endpoint) throw new Error("Invalid DELETE API route");

      const response = await apiService.delete(endpoint, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || { message: error.message });
    }
  }
);
