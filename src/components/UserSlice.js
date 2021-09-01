import { createSlice } from '@reduxjs/toolkit';


const initialUsers = [
    {}
];


const User = createSlice({
    name: 'Users',
    initialState: initialUsers,
    reducers: {
        AddUsers: (state, action) => {
            state.push(action.payload)
        },
        DeleteUsers: (state, action) => {
            const DeleteUsersId = action.payload;
            return state = state.filter(User => User.id !== DeleteUsersId );
        },
        
    }
});

const { reducer, actions } = User;
export const { AddUsers, DeleteUsers } = actions;
export default reducer;
