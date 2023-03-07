import axios from "axios";
import type { AxiosInstance, AxiosRequestConfig } from "axios";
import type { ChatMessage } from "chatgpt";
import { getParentMessageId, setParentMessageId } from "@/utils";
import type {chatApiResponse} from '@/types'
class Request {
  instance: AxiosInstance;
  constructor(config?: AxiosRequestConfig) {
    this.instance = axios.create({
      ...config,
      ...{
        baseURL: "https://service-rjogqmym-1256085539.usw.apigw.tencentcs.com",
      },
    });
    this.instance.interceptors.response.use(
      (res) => {
        // Any status code that lie within the range of 2xx cause this function to trigger
        return res.data;
      },
      (error) => {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        return Promise.reject(error);
      }
    );
  }
  request<T = any>(config: AxiosRequestConfig) {
    // 根据request 的定义 传入第二个泛型参数会返还Promise<T>
    return this.instance.request<any, T>(config);
  }
}
const instance = new Request();
// const sendRequest = async(message: string) => {
//   const res =  await instance.request<ChatMessage>({
//     url: "/v1/chat/completions",
//     method: "post",
//     data: {
//       message,
//       options: {
//         parentMessageId: getParentMessageId()
//       }
//     },
//   });
//   setParentMessageId(res.id);
//   return res
// }
const sendRequest = async (message: string) => {
  const res = await instance.request<chatApiResponse>({
    url: "/v1/chat/completions",
    method: "post",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
    },
    data: {
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: message }],
      // messages: [{ role: "user", content: 'hi' }],
    },
  });
  // setParentMessageId(res.id);
  return res;
};
export const makeSentence = async (word: string, num: number = 3) => {
  // const message = `请帮我造${num}个句子来记忆单词：${word}；在每个句子的下方，标出词性，写出该词对应词典里的哪一条意思`;
  const message = `请帮我造${num}个句子来记忆单词：${word}；在每个句子的下方，标出词性`;
  return await sendRequest(message);
};
export const checkSentence = async (sentence: string) => {
  let message;
  const arr = sentence.split("/");
  if (arr.length === 2) {
    message = `${arr[0]}. ${arr[1]}的这个用法对吗`;
  } else {
    message = `${sentence} 这句话的语法是否正确`;
  }

  return await sendRequest(message);
};
