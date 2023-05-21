import { MutationOptions, useMutation } from "react-query";
import { client } from "../../lib/client";
interface ApiRequestInterface {
  url: string;
  body: XMLHttpRequestBodyInit;
  method: string;
  fetchFunction: (url: string, options: RequestInit) => void;
}

export const useAppMutation = (
  url: string,
  method: string,
  options: MutationOptions<
    unknown,
    unknown,
    {
      body: XMLHttpRequestBodyInit;
      url: string;
    },
    unknown
  >
) => {
  const fetchFunction = async (url: string, options: RequestInit) => {
    const response = await client.fetch(url, options);
    if (!response) {
      throw new Error(response.statusText);
    }
    return response;
  };

  const mutation = useMutation({
    mutationFn: async ({
      body,
      url: urlFromBody,
    }: {
      body: XMLHttpRequestBodyInit;
      url: string;
    }) => {
      const data = await apiRequest({
        url: urlFromBody || url,
        body: body,
        method: method,
        fetchFunction: fetchFunction,
      });
      return data;
    },

    ...options,
  });

  return mutation;
};

const apiRequest = async ({
  url,
  body,
  method,
  fetchFunction,
}: ApiRequestInterface) => {
  try {
    const options = {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    };
    const response = await fetchFunction(url, options);
    return response;
  } catch (err: any) {
    throw new Error(err.message || "Something went wrong");
  }
};
