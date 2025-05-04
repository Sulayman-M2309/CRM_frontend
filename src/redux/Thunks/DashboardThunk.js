import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "../apis/apiService";
import { DashboardEndPoints } from "../apis/APIsEndpoints";

export const HandleGetDashboard = createAsyncThunk(
  "dashboard/get",
  async ({ apiroute }, { rejectWithValue }) => {
    try {
      const endpoint = DashboardEndPoints[apiroute];
      if (!endpoint) {
        throw new Error(`Invalid dashboard API route: ${apiroute}`);
      }

      const response = await apiService.get(endpoint, { withCredentials: true });
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || { message: error.message || "Unknown Error" }
      );
    }
  }
);
