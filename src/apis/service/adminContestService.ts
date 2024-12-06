import axiosClient from "@/apis/config/axiosClient.ts";

const adminContestService = {
    createContest: async (data: any): Promise<any> => {
        return await axiosClient.post("/api/contest", data);
      },
}

export default adminContestService;