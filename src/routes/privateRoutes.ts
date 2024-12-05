import {
	HomePage,
	ProfilePage,
	UserContestListPage,
	ContestListPage,
	UserProblemListPage,
	UserProblemDetailsPage,
	SubmissionDetailPage,
	ListProblemPage
} from '@/pages';

const privateRoutes = {
	home: {
		path: '/',
		component: HomePage,
	},
	myContests: {
		path: '/my-contests',
		component: UserContestListPage,
	},
	allContests: {
		path: '/contests',
		component: ContestListPage,
	},
	problems: {
		path: '/my-problems/:contestId',
		component: UserProblemListPage,
	},
	problemDetails: {
		path: '/my-problems-detail/:problemId',
		component: UserProblemDetailsPage,
	},
	submissionDetail: {
		path: '/submission-detail/:id',
		component: SubmissionDetailPage,
	},
	listProblem: {
		path: '/list-problem',
		component: ListProblemPage,
	},
	profile: {
		path: '/profile',
		component: ProfilePage,
	},
}

export default privateRoutes;