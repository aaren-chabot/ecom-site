import UserActionTypes from './user.types';

const INITIAL_STATE = {
	currentUser: null,
	errorMessage: null
};

const userReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case UserActionTypes.SIGN_IN_SUCCESS:
			return {
				...state,
				loginStarted: false,
				currentUser: action.payload,
				errorMessage: null
			};
		case UserActionTypes.SIGN_IN_FAILURE:
			return {
				...state,
				loginStarted: false,
				errorMessage: action.payload
			};
		default:
			return state;
	}
};

export default userReducer;
