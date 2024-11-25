import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { appActions } from "../store/app/app.slice";
import { authActions } from "../store/auth/auth.slice";
import { productsActions } from "../store/products/products.slice";
import { companiesActions } from "../store/companies/companies.slice";
import { personalActions } from "../store/personal/personal.slice";

const actions = {
  ...appActions,
  ...authActions,
  ...productsActions,
  ...companiesActions,
  ...personalActions,
};

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};
