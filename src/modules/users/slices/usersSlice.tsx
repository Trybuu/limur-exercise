import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from '@reduxjs/toolkit'
import type { UserData } from '../types/types'
import { getUsers } from '../services/usersService'

export interface UsersState {
  loading: boolean
  error: string | null
  data: UserData[]
}

export const fetchUsers = createAsyncThunk<UserData[]>(
  'users/fetch',
  async () => {
    return await getUsers()
  },
)

const initialState: UsersState = {
  loading: false,
  error: null,
  data: [],
}

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    userRemoved: (state, action: PayloadAction<number>) => {
      state.data = state.data.filter((user) => user.id !== action.payload)
    },
    userAdded: (state, action: PayloadAction<UserData>) => {
      state.data.push(action.payload)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false
        state.data = action.payload
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Failed to fetch users'
      })
  },
})

export const { userRemoved, userAdded } = usersSlice.actions
export default usersSlice.reducer
