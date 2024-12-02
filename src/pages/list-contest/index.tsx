import {useMemo, useState} from 'react';
import {Table, Tag, Button} from 'antd';
import {useNavigate} from 'react-router-dom';
import {CalendarOutlined, TeamOutlined} from '@ant-design/icons';
import {formatObject, getContestStatusColor} from "@/utils";
import {useQuery} from "@tanstack/react-query";
import contestService from "@/apis/service/contestService.ts";
import {ContestStatus} from "@/constants/types.ts";
import moment from "moment/moment";

const UserContestList = () => {
	const navigate = useNavigate();
	const [searchParams, setSearchParams] = useState({
		page: 0,
		limit: 10,
		q: ""
	})
	
	const {
		data: listContestData = {
			contents: [],
			totalElements: 0
		},
		isLoading: listContestLoading
	} = useQuery({
		queryKey: ['allContests', searchParams],
		queryFn: async ({queryKey}: any) => {
			const [, searchParams] = queryKey;
			return await contestService.getAll(formatObject(searchParams));
		}
	})
	
	const {contents: listContests = [], totalElements: totalContests} = listContestData || {};
	
	const listContestsTableData = useMemo(() => {
		if (!listContests) return [];
		return listContests.map((contest: any) => ({
			title: contest?.contestName,
			startTime: moment(contest?.creatdAt).format('YYYY-MM-DD HH:mm'),
			createdBy: contest?.creator,
			status: contest?.status,
			key: contest.id,
			isJoined: contest?.isJoined,
			id: contest.id
		}));
	}, [listContests]);
	
	const columns = [
		{
			title: 'Contest',
			dataIndex: 'title',
			key: 'title',
			render: (text: string, record: any) => (
				<div className="cursor-pointer hover:text-blue-500" onClick={() => navigate(`/contest/${record.id}/problems`)}>
					{text}
				</div>
			),
		},
		{
			title: 'Start Time',
			dataIndex: 'startTime',
			key: 'startTime',
			render: (text: string) => (
				<span>
          <CalendarOutlined className="mr-2"/>
					{text}
        </span>
			),
		},
		{
			title: 'Created By',
			dataIndex: 'createdBy',
			key: 'createdBy',
			render: (text: string) => (
				<span>
					<TeamOutlined className="mr-2"/>
					{text}
				</span>
			),
		},
		{
			title: 'Status',
			dataIndex: 'status',
			key: 'status',
			render: (status: string) => (
				<Tag color={getContestStatusColor(status)}>
					{status}
				</Tag>
			),
		},
		{
			title: 'Action',
			key: 'action',
			render: (_: any, record: any) => (
				<Button
					type="primary"
					disabled={record.status === ContestStatus.COMPLETED || record.isJoined}
					onClick={() => handleRegister(record.id)}
				>
					{record.isJoined ? 'Registered' : 'Register'}
				</Button>
			),
		},
	];
	
	const handleRegister = (contestId: number) => {
		// Handle registration logic here
		console.log(`Registering for contest ${contestId}`);
	};
	
	return (
		<div className="w-full">
			<Table
				dataSource={listContestsTableData}
				columns={columns}
				loading={listContestLoading}
				pagination={{
					current: searchParams.page + 1,
					total: totalContests,
					pageSize: searchParams.limit,
					onChange: (page) => {
						setSearchParams({
							...searchParams,
							page: page - 1,
						})
					}
				}}
			/>
		</div>
	);
};

export default UserContestList;