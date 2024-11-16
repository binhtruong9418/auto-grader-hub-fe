import { HomePage, ProblemListPage, ProblemDetailsPage, ProfilePage } from '@/pages';

const privateRoutes = {
	home: {
		path: '/',
		component: HomePage,
	},
	problems:{
		path:'/problems',
		component: ProblemListPage,
	},
	problemDetails: {
		path: '/problems/:problemId',
		component: ProblemDetailsPage,
	},
	profile: {
		path: '/profile',
		component: ProfilePage,
	},
}

export default privateRoutes;