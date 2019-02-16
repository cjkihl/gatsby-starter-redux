const initialState = {
    isDarkMode: false,
};

const TOOGLE_DARKMODE = 'TOGGLE_DARKMODE';
export const toggleDarkMode = isDarkMode => ({ type: TOOGLE_DARKMODE, isDarkMode });

export default (state = initialState, action) => {
switch (action.type) {
    case TOOGLE_DARKMODE:
        return { ...state, isDarkMode: action.isDarkMode };
    default:
        return state;
    }
};