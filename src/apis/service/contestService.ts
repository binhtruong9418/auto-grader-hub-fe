import axiosClient from "@/apis/config/axiosClient.ts";

const contestService = {
	getAll: async (query: any = {}): Promise<any> => {
		return await axiosClient.get("/api/contest/me", {params: query});
	},
	
	getAllAdmin: async (query: any = {}): Promise<any> => {
		return await axiosClient.get("/api/contest", {params: query});
	}
}

export default contestService;