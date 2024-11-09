import { HomePage } from '@/pages';
import { ProblemListPage } from '@/pages';

const privateRoutes = {
	home: {
		path: '/',
		component: HomePage,
	},
	problems:{
		path:'/problems',
		component: ProblemListPage,
	}
}

export default privateRoutes;