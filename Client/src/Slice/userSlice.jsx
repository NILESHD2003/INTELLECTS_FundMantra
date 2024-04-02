import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from "react-toastify";

const initialState = {
  user: null,
//   isLoggedIn: false,
isLoggedIn: localStorage.getItem('isLoggedIn') === 'true', // Read from localStorage
  
  loading: false,
  error: null,
};

// Thunk action for handling login
export const loginUserAsync = createAsyncThunk(
  'user/login',
  async (userData, { rejectWithValue }) => {
    try {

      const response = await axios.post("https://intellects-fundmantra.onrender.com/api/v1/auth/login", userData);
     localStorage.setItem('isLoggedIn', 'true'); // Store in localStorage
   
      return response.data; // Assuming the API response contains user data
    
    } catch (error) {
      return rejectWithValue(error.response.data); // Return error message from API response
    }
  }




  
);

export const verifyOTP = createAsyncThunk(
  'user/verifyOTP',
  async ({ otpValues, signupData }, { rejectWithValue }) => {
    try {
        const otp = otpValues.join('')
        const dob=signupData.age;
         const dobDate = new Date(dob);
        const currentDate = new Date();
        signupData.age = (currentDate.getFullYear() - dobDate.getFullYear()).toString();
        
        const requestData = {
     otp,
    dob,
     ...signupData
   };
        console.log(requestData);
      const response = await axios.post("https://intellects-fundmantra.onrender.com/api/v1/auth/signup", 
      requestData );
      return response.data; // Assuming the API response contains user data
    } catch (error) {
      return rejectWithValue(error.response.data); // Return error message from API response
    }
  }
);

export const sentOTP = createAsyncThunk(
  'user/sentOTP',
  async (userData, { rejectWithValue }) => {
    console.log(userData);
    try {
      const response = await axios.post("https://intellects-fundmantra.onrender.com/api/v1/auth/send-otp", {email:userData});
      return response.data; // Assuming the API response contains user data
    } catch (error) {
      return rejectWithValue(error.response.data); // Return error message from API response
    }
  }


);


export const logoutUser = createAsyncThunk(
  'user/logout',
  async (_, { dispatch }) => {
    try {
      dispatch(logout());
    } catch (error) {
      console.error('Logout failed:', error);
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.user = null;
        localStorage.setItem('isLoggedIn', 'false'); // Update localStorage
      state.isLoggedIn = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUserAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUserAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.isLoggedIn = true;
        state.user = action.payload;
        toast.success('Login successful!');
      })
      .addCase(loginUserAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        toast.error(action.payload.message || "An error occurred while Sending OTP.");
      })
      .addCase(verifyOTP.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(verifyOTP.fulfilled, (state, action) => {
        state.loading = false;
        state.isLoggedIn = true;
        state.user = action.payload;
        toast.success('Login successful!');
      })
      .addCase(verifyOTP.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        toast.error(action.payload.message || "Wrong OTP.");
      })
      .addCase(sentOTP.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(sentOTP.fulfilled, (state, action) => {
        state.user = action.payload;
        toast.success('OTP successfully send!');
      })
      .addCase(sentOTP.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        toast.error(action.payload.message || "An error occurred while Sending OTP.");
      });
  },
});

export const { login, logout } = userSlice.actions;

// Selectors
export const selectUser = (state) => state.user.user;
export const selectIsLoggedIn = (state) => state.user.isLoggedIn;

export default userSlice.reducer;
