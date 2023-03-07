import { ChatGPTAPI, FetchFn } from "chatgpt";
import type { SendMessageOptions } from "chatgpt";
import proxy from "https-proxy-agent";
import nodeFetch from "node-fetch";
require('dotenv').config();
const apiKey = process.env.API_KEY;

const myFetch = nodeFetch as FetchFn;

const api = new ChatGPTAPI({
  apiKey: apiKey || '',
  fetch: myFetch
  // fetch: (input, options = {}) => {
  //   const defaultOptions = {
  //     agent: proxy("http://127.0.0.1:7890"),
  //   };

  //   const mergedOptions = {
  //     ...defaultOptions,
  //     ...options,
  //   };
  //   return myFetch(input, mergedOptions);
  // },
});
async function chatReply(message, options: SendMessageOptions) {
  return await api.sendMessage(message, options);
}
export { chatReply };
