import {
	HomePage,
	ProfilePage,
	CreateProblemPage,
	UserContestListPage, ContestListPage, UserProblemListPage, UserProblemDetailsPage
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
	problems:{
		path:'/my-problems/:contestId',
		component: UserProblemListPage,
	},
	problemDetails: {
		path: '/my-problems-detail/:problemId',
		component: UserProblemDetailsPage,
	},
	profile: {
		path: '/profile',
		component: ProfilePage,
	},
	admin: {
		path: '/admin',
		component: CreateProblemPage,
	},
}

export default privateRoutes;