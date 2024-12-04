import axiosClient from "@/apis/config/axiosClient.ts";

const submissionService = {
	getAll: async (query: any = {}): Promise<any> => {
		return await axiosClient.get("/api/submissions/me", { params: query });
	},
	create: async (data: {
		problemId: number;
		contestId: number;
		languageId: number;
		sourceCode: string;
	}): Promise<any> => {
		return await axiosClient.post("/api/submissions", data);
	}
}

export default submissionService;