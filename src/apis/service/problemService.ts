import {CreateProblemRequest} from "@/apis/type.ts";
import axiosClient from "@/apis/config/axiosClient.ts";

const problemService = {
	createProblem: async (problem: CreateProblemRequest) => {
		return await axiosClient.post('/api/problem', {
			...problem
		});
	},
	
	getAllProblemTags: async (query: {page: number, limit: number} = {
		page: 0,
		limit: 100,
	}): Promise<any> => {
		return await axiosClient.get('/api/problem-tag', {
			params: query
		});
	}
}

export default problemService;