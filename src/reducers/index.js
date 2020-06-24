import { combineReducers } from "redux";

const fetchedUsersReducer = (state = [], action) => {
  if (action.type === "FETCH_USERS") {
    return action.payload;
  }
  return state;
};

const selectedUserReducer = (state = null, action) => {
  if (action.type === "USER_SELECTED") {
    return action.payload;
  }

  return state;
};

const generatedMessageReducer = (state = [], action) => {
  if (action.type === "MESSAGE_GENERATED") {
    return action.payload;
  }

  return state;
};

export default combineReducers({
  users: fetchedUsersReducer,
  messages: generatedMessageReducer,
  selectedUser: selectedUserReducer,
});
