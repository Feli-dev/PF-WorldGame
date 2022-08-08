// Types
import { MENU_RESPONSIVE } from "../types";

let initialState = {
  menu: false,
};

function uiReducer(state = initialState, action) {
  switch (action.type) {
    case MENU_RESPONSIVE:
      return {
        ...state,
        menu: !state.menu,
      };
    default:
      return state;
  }
}

export default uiReducer;
