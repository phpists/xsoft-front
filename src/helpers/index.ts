import cogoToast from "cogo-toast";

export const showMessage = (
  type: "success" | "info" | "error",
  msg: string
) => {
  cogoToast[type](msg, {
    position: "top-right",
    hideAfter: 2,
  });
};

export const checkEmailValidation = (value: string): boolean => {
  console.log(value);
  if (value) {
    // eslint-disable-next-line
    const isError = value?.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
    console.log(isError);
    return isError && isError?.length > 0 ? false : true;
  }
  return false;
};
