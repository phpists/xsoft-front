export const baseUrl = "https://x-soft-back.rock-it.study/api";

export const headers = () => ({
  Authorization: `Bearer ${localStorage.getItem("token")}`,
  Accept: "application/json",
});
