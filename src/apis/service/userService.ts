import axiosClient from "@/apis/config/axiosClient.ts";

const userService = {
	login: async (email: string, password: string) => {
		return await axiosClient.post("/auth/login", { email, password });
	}
}

export default userService;