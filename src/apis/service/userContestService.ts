import axiosClient from "@/apis/config/axiosClient.ts";

const userContestService = {
	getAll: async (query: any = {}): Promise<any> => {
		return await axiosClient.get("/api/user-contest/me", {params: query});
	},
}

export default userContestService;