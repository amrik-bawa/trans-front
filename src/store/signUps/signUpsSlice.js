import { createSlice } from '@reduxjs/toolkit'
import signUpsService from '../../services/signUps';
import { loadingStatus } from "../global/globalSlice";
export const getSignUpsList = () => async (dispatch) => {
	// dispatch(loadingStatus(true));
    // console.log(signUpsService.getList())
	return signUpsService
		.getList()
		.then( (res) => {
            console.log('resoponse ',res)
			dispatch(signUpsListSuccess(res?.data));
            console.log(res?.data)
			return dispatch(loadingStatus(false));
		})
		.catch((error) => {
            console.log(error.message)
			dispatch(loadingStatus(false));
			return dispatch(signUpsListError(error.message));
		});
};



const initialState = {
    signUpsList: [],
}

export const signUpsSlice = createSlice({
  name: 'signUps',
  initialState,
  reducers: {
    signUpsListSuccess: (state, action) => {
        state.success = true;
        state.signUpsList = action.payload;
    },
    signUpsListError: (state, action) => {
        state.success = false;
        state.signUpsList = null;
    },
    changeName: (state, action) => {
        state.success = true;
        state.signUpsList = action.payload;
    },
    // increment: (state) => {
    //   // Redux Toolkit allows us to write "mutating" logic in reducers. It
    //   // doesn't actually mutate the state because it uses the Immer library,
    //   // which detects changes to a "draft state" and produces a brand new
    //   // immutable state based off those changes
    //   state.value += 1
    // },
    // decrement: (state) => {
    //   state.value -= 1
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },
  },
})

// Action creators are generated for each case reducer function
export const { signUpsListSuccess,signUpsListError,changeName } = signUpsSlice.actions

export default signUpsSlice.reducer