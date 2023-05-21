import { useQuery, UseQueryResult, UseQueryOptions } from "react-query";
import { client } from "../../lib/client";

const useAppQuery = (
  url: string,
  reactQueryOptions?: object
): UseQueryResult<UseQueryOptions, Error> => {
  const fetchQueey = async () => {
    const response = await client.fetch(url);
    if (!response) {
      throw new Error("Something went wrong");
    }
    return response;
  };

  return useQuery<UseQueryOptions, Error>(url, fetchQueey, {
    ...reactQueryOptions,
    refetchOnWindowFocus: true,
  });
};

export default useAppQuery;
