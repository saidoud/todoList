import { createSlice } from "@reduxjs/toolkit";

const initialVisibility = { value: "SHOW_ALL" };

//Create Reducer
export const visibilitySlice = createSlice({
  name: "visibility",
  initialState: initialVisibility,
  reducers: {
    setvisibility: (state, action) => {
      state.value = action.payload;
    },
  },
});

//export reducers
export const { setvisibility } = visibilitySlice.actions;

//Selector Visibility
export const getVisibility = (state) => state.visibility.value;

export default visibilitySlice.reducer;
