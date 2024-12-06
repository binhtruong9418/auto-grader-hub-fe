import {CreateProblemPage, CreateContestPage} from "@/pages";

const adminRoutes = {
	createProblem: {
		path: '/admin/problem/create',
		component: CreateProblemPage,
	},
	createContest: {
		path: '/admin/contest/create',
		component: CreateContestPage,
	},
}

export default adminRoutes;