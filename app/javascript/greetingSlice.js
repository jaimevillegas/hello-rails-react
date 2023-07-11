import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const fetchGreetings = createAsyncThunk('greeting/fetchGreetings', async () => {
  const response = await fetch('api/greeting');
  const greeting = await response.json();
  return greeting;
});

const greetingSlice = createSlice({
  name: 'greeting',
  initialState: {
    greeting: '',
  },
  extraReducers: builder => {
    builder
      .addCase(fetchGreetings.fulfilled, (state, action) => {
        state.greeting = action.payload;
      });
  }
});

export const selectGreeting = (state) => state.greetingReducer.greeting;

export default greetingSlice;
export { fetchGreetings };