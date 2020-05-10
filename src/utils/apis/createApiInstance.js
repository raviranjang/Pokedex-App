import commonApiList from "./baseUrls/common";
import clientApiList from "client-api";

import { deepExtend } from "../";

//function is used in creation of api instances

const constructUrl = (url, client) => `/${client}${url}`;

function createApiInstance(type, client) {
  //overriding if there are any client specific apis
  const apiList = deepExtend(commonApiList, clientApiList);
  const url = apiList[type];
  const baseURL = constructUrl(url, client);

  return {
    baseURL,
    headers: {
      accept: "application/json",
      "content-type": "application/json",
    },
  };
}

export default createApiInstance;
