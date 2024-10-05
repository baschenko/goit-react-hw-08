import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast';

// axios.defaults.baseURL = 'https://66f083ebf2a8bce81be61304.mockapi.io';
// axios.defaults.baseURL = 'https://connections-api.goit.global';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact, thunkAPI) => {
    const toastId = toast.loading('Додаємо...');
    try {
      const { data } = await axios.post('/contacts', newContact);
      toast.success('Успішно додано!', { id: toastId });
      return data;
    } catch (error) {
      toast.error('Упс, помилка! Шось пішло не так!', { id: toastId });
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    const toastId = toast.loading('Видаляємо...');
    try {
      const { data } = await axios.delete(`/contacts/${contactId}`);
      toast.success('Успішно видалено!', { id: toastId });
      return data;
    } catch (error) {
      toast.error('Упс, помилка! Шось пішло не так!', { id: toastId });
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
