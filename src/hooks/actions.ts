import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { appActions } from "../store/app/app.slice";
import { authActions } from "../store/auth/auth.slice";

const actions = {
  ...appActions,
  ...authActions,
};

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};
