import {
	CreateProblemPage,
	CreateContestPage,
	EditProblemPage,
	ListAdminProblemPage,
	EditContestPage,
	ListAdminContestPage
} from "@/pages";

const adminRoutes = {
	createProblem: {
		path: '/admin/problem/create',
		component: CreateProblemPage,
	},
	createContest: {
		path: '/admin/contest/create',
		component: CreateContestPage,
	},
	editProblem: {
		path: '/admin/problem/edit/:id',
		component: EditProblemPage,
	},
	listAdminProblem: {
		path: '/admin/problems',
		component: ListAdminProblemPage
	},
	editContest: {
		path: '/admin/contest/edit/:id',
		component: EditContestPage,
	},
	listAdminContest: {
		path: '/admin/contests',
		component: ListAdminContestPage
	}
}

export default adminRoutes;