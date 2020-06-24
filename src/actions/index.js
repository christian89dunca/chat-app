import apiRequest from "../api/apiRequest";

// Acrtion Creator
export const selectUser = (user) => {
  //Return an action
  return {
    type: "USER_SELECTED",
    payload: user,
  };
};

export const generateMessage = (messages = []) => {
  //Return an action
  return {
    type: "MESSAGE_GENERATED",
    payload: messages,
  };
};

export const fetchUsers = () => {
  return async (dispatch) => {
    const response = await apiRequest.get("/users");
    dispatch({ type: "FETCH_USERS", payload: response.data });
  };
};

export const fetchUser = (id) => {
  return async (dispatch) => {
    const response = await apiRequest.get(`/users/${id}`);
    dispatch({ type: "FETCH_USER", payload: response.data });
  };
};
