import { createSlice } from '@reduxjs/toolkit';

const likedImagesSlice = createSlice({
  name: 'likedImages',
  initialState: {
    likedImages: [],
    loading: false,
  },
  reducers: {
    addLikedImage: (state, action) => {
      const exists = state.likedImages.some(img => img.itemId === action.payload.itemId);
      if (!exists) {
        state.likedImages.push(action.payload);
      }
    },
    removeLikedImage: (state, action) => {
      state.likedImages = state.likedImages.filter(img => img.itemId !== action.payload.itemId);
    },
  },
});

export const { addLikedImage, removeLikedImage } = likedImagesSlice.actions;
export default likedImagesSlice.reducer;
