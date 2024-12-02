import {ContestStatus} from "@/constants/types.ts";

export const handleEnterKeyPress = (e: React.KeyboardEvent<HTMLInputElement>, callback: () => void, isDisabled: boolean) => {
	if (e.key === 'Enter' && !isDisabled) {
		callback();
	}
};

export const getContestStatusColor = (status: string) => {
	const colors = {
		[ContestStatus.RUNNING]: 'success',
		[ContestStatus.COMPLETED]: 'danger',
	};
	return colors[status as keyof typeof colors];
}

export const formatObject = (obj: any) => {
	// remove all undefined values or null
	const newObj = {...obj};
	Object.keys(newObj).forEach((key: string) => {
		if (newObj[key] === undefined || newObj[key] === null || (typeof newObj[key] === 'string' && newObj[key].trim() === '')) {
			delete newObj[key];
		}
	})
	
	return newObj;
}