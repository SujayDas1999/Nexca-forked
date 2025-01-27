"use client";
import { POST_API_URL } from "@/config/apiConstants";
import { PostsCashType } from "@/types/CashTypes";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useGetSection = (queryKey: string, lengthItem: number, secId: number) => {
  const {
    data: mainData,
    isLoading: loading,
    error,
  } = useQuery({
    queryKey: [queryKey],
    queryFn: () => axios.get(POST_API_URL).then((res) => res.data),
    retry: false,
  });

  const filteredData = mainData?.data?.filter(
    (item: PostsCashType) => item.section === secId.toString()
  );

  if (error) {
    throw error;
  }
  const data = filteredData?.slice(lengthItem);

  return { data, loading };
};

export default useGetSection;
