import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
  isOpenEdit: false,
  id: '',
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: state => {
      state.isOpen = true;
    },
    closeModal: state => {
      state.isOpen = false;
    },
    idInModal: (state, { payload }) => {
      state.id = payload;
    },
    openModalEdit: state => {
      state.isOpenEdit = true;
    },
    closeModalEdit: state => {
      state.isOpenEdit = false;
    },
  },
});

export const {
  openModal,
  closeModal,
  idInModal,
  openModalEdit,
  closeModalEdit,
} = modalSlice.actions;
export default modalSlice.reducer;
