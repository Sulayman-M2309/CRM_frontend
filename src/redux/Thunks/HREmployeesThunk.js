import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "../apis/apiService";
import { HREmployeesPageEndPoints } from "../apis/APIsEndpoints";

// GET
export const HandleGetHREmployees = createAsyncThunk('HandleGetHREmployees', async (HREmployeeData, { rejectWithValue }) => {
    try {
        const { apiroute } = HREmployeeData;
        if (!HREmployeesPageEndPoints[apiroute]) {
            throw new Error('Invalid API route');
        }
        const response = await apiService.get(`${HREmployeesPageEndPoints[apiroute]}`, {
            withCredentials: true
        });
        return response.data;
    } catch (error) {
        return rejectWithValue(error?.response?.data || { message: error.message });
    }
});

// POST
export const HandlePostHREmployees = createAsyncThunk('HandlePostHREmploy', async (HREmployeeData, { rejectWithValue }) => {
    try {
        const { apiroute, data } = HREmployeeData;
        if (!HREmployeesPageEndPoints[apiroute]) {
            throw new Error('Invalid API route');
        }
        const response = await apiService.post(`${HREmployeesPageEndPoints[apiroute]}`, data, {
            withCredentials: true
        });
        return response.data;
    } catch (error) {
        return rejectWithValue(error?.response?.data || { message: error.message });
    }
});

// DELETE
export const HandleDeleteHREmployees = createAsyncThunk("HandleDeleteHREmployees", async (HREmployeeData, { rejectWithValue }) => {
    try {
        const { apiroute } = HREmployeeData;
        const RouteArray = apiroute.split(".");
        if (RouteArray.length > 1 && HREmployeesPageEndPoints[RouteArray[0]]) {
            const response = await apiService.delete(`${HREmployeesPageEndPoints[RouteArray[0]](RouteArray[1])}`, {
                withCredentials: true
            });
            return response.data;
        } else {
            throw new Error('Invalid DELETE API route');
        }
    } catch (error) {
        return rejectWithValue(error?.response?.data || { message: error.message });
    }
});
