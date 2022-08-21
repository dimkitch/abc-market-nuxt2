import { API } from "@/store/config.js";

export const state = {
  pageData: {},
};

export const actions = {
  async LOAD_PAGE() {
    const result = await fetch(API + "main/getInfo")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return data.result;
      });

    return result;
  },
};