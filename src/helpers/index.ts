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

export const formatInputDate = (str: string) => {
  try {
    const date = str?.split("-");
    return `${date?.[0] ?? ""}-${date?.[1] ?? ""}-${date?.[2] ?? ""}`;
  } catch {
    return str;
  }
};

export const addZero = (num: number) => `${num >= 10 ? "" : "0"}${num}`;

export const getMonthDays = (d: Date): string[] => {
  const year = d.getFullYear();
  const month = d.getMonth();
  const lastDayCurrentMonth = new Date(year, month + 1, 0).getDate();
  let updatedDays = [];
  for (let i = 1; i <= lastDayCurrentMonth; i++) {
    updatedDays.push(`${year}-${addZero(month + 1)}-${addZero(i)}`);
  }
  return updatedDays;
};

export const getSearchValues = () => {
  try {
    return Object.fromEntries(
      window.location?.hash
        ?.replace("#/reset-password?", "")
        ?.split("&")
        ?.map((p) => p?.split("="))
    );
  } catch {
    return {};
  }
};
