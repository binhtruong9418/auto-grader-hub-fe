import {
	CreateProblemPage,
	CreateContestPage,
	EditProblemPage,
	ListAdminProblemPage,
	EditContestPage,
	ListAdminContestPage, JoinContestRequestsPage, ListAdminSubmissionPage, SubmissionAdminDetailPage, UserManagementPage
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
	},
	joinContest:{
		path: '/admin/join-contest-request',
		component: JoinContestRequestsPage
	},
	listAdminSubmission: {
		path: '/admin/submissions',
		component: ListAdminSubmissionPage
	},
	submissionDetailAdmin: {
		path: '/admin/submission-detail/:id',
		component: SubmissionAdminDetailPage
	},
	listUsers: {
		path: '/admin/users',
		component: UserManagementPage
	}
}

export default adminRoutes;