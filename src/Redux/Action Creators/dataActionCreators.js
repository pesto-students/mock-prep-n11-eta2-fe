import { getData } from "api/Api";

const dataActionCreator = {
  getAdminData: async function (dispatch, url, type) {
    const data = await getData(url);
    dispatch({ type: type, data: data.res });
  },
};

export default dataActionCreator;
