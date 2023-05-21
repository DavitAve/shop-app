import { useQuery, UseQueryOptions, UseQueryResult } from "react-query";
import { client } from "../../lib/client";

const useAppQuery = <T>(
  url: string,
  reactQueryOptions?: UseQueryOptions<T, Error>
): UseQueryResult<T, Error> => {
  const fetchQueey = async () => {
    const response = await client.fetch(url);
    if (!response) {
      throw new Error("Something went wrong");
    }
    return response;
  };

  return useQuery<T, Error>(url, fetchQueey, {
    ...reactQueryOptions,
    refetchOnWindowFocus: true,
  });
};

export default useAppQuery;
