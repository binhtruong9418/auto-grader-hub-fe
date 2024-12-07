import axiosClient from "@/apis/config/axiosClient";

const joinContestService = {
  getAllRequests: async (query: any) => {
    return await axiosClient.get("/api/join-contest-requests", { params: query });
  },
  approveRequest: async (id: string) => {
    return await axiosClient.put(`/api/join-contest-requests/approve/${id}`);
  },
  rejectRequest: async (id: string) => {
    return await axiosClient.put(`/api/join-contest-requests/reject/${id}`);
  },
};

export default joinContestService;
