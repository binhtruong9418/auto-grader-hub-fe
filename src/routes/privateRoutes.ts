import {
	HomePage,
	ProfilePage,
	UserContestListPage,
	ContestListPage,
	UserProblemListPage,
	UserProblemDetailsPage,
	SubmissionDetailPage,
	ListProblemPage, ProblemDetailPage,
	JoinContestRequestsPage
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
	problemDetail: {
		path: '/problem-detail/:id',
		component: ProblemDetailPage,
	},
	profile: {
		path: '/profile',
		component: ProfilePage,
	},
	joinContest:{
		path: '/join-contest',
		component: JoinContestRequestsPage
	}
}

export default privateRoutes;