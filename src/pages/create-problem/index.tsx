import React, { useMemo, useState } from 'react';
import {
	Form,
	Input,
	Select,
	InputNumber,
	Button,
	Card,
	Space,
	Spin,
	Switch,
} from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {Contest, CreateProblemRequest, ProblemTag} from "@/apis/type.ts";
import {useQuery} from "@tanstack/react-query";
import contestService from "@/apis/service/contestService.ts";
import problemService from "@/apis/service/problemService.ts";
import toast from "react-hot-toast";
import debounce from "lodash/debounce";
import {formatObject} from "@/utils";

const {Option} = Select;

const CreateProblem: React.FC = () => {
	const [form] = Form.useForm();
	const [loading, setLoading] = useState(false);
	const [searchText, setSearchText] = useState('');
	
	const {
		data: contestsData = {
			contents: [],
		},
		isFetching: isContestsFetching,
	} = useQuery({
		queryKey: ['contests', searchText],
		queryFn: async ({queryKey}) => {
			const [, searchText] = queryKey;
			return await contestService.getAllAdmin({
				page: 0,
				limit: 100,
				q: searchText,
			})
		}
	})
	
	const {
		data: tagsData = {
			contents: [],
		},
		isFetching: isTagsFetching,
	} = useQuery({
		queryKey: ['tags'],
		queryFn: async () => {
			return await problemService.getAllProblemTags({
				page: 0,
				limit: 100,
			})
		}
	})
	
	const {contents: tags} = tagsData;
	
	const contests = useMemo(() => {
		return contestsData.contents;
	}, [contestsData]);
	
	const debouncedSearch = useMemo(
		() =>
			debounce((value: string) => {
				setSearchText(value);
			}, 500),
		[]
	);
	
	const onFinish = async (values: any) => {
		try {
			setLoading(true);
			
			const testCases = values.testCases || [];
			const problemData: CreateProblemRequest = {
				problemName: values.problemName,
				problemCode: values.problemCode,
				difficulty: values.difficulty,
				maxPoint: values.maxPoint || 100,
				contestId: values.contestId,
				problemStatement: values.problemStatement,
				tags: values.tags || [],
				testCases: testCases.map((tc: any) => ({
					input: tc.input,
					output: tc.output,
					isHidden: tc.isHidden ? 1 : 0,
				})),
				cpuTimeLimit: values.cpuTimeLimit,
				memoryLimit: values.memoryLimit,
				maxTimeCommit: values.maxTimeCommit,
			};
			
			const response = await problemService.createProblem(formatObject(problemData));
			
			if (response) {
				toast.success('Problem created successfully');
				form.resetFields();
			}
		} catch (error: any) {
			toast.error(error?.message || 'Failed to create problem');
		} finally {
			setLoading(false);
		}
	};
	
	return (
		<div className="w-full">
			<Card title="Create New Problem">
				<Form
					form={form}
					layout="vertical"
					onFinish={onFinish}
					initialValues={{
						maxPoint: 100,
					}}
				>
					{/* Basic Information */}
					<Form.Item
						name="problemName"
						label="Problem Name"
						rules={[{ required: true, message: 'Please enter problem name' }]}
					>
						<Input />
					</Form.Item>
					
					<Form.Item
						name="problemCode"
						label="Problem Code"
						rules={[{ required: true, message: 'Please enter problem code' }]}
					>
						<Input />
					</Form.Item>
					
					<Form.Item
						name="difficulty"
						label="Difficulty"
						rules={[{ required: true, message: 'Please select difficulty' }]}
					>
						<Select>
							<Option value="easy">Easy</Option>
							<Option value="medium">Medium</Option>
							<Option value="hard">Hard</Option>
						</Select>
					</Form.Item>
					
					<Space size="large" className="w-full">
						<Form.Item
							name="maxPoint"
							label="Max Points"
							rules={[{ required: true, message: 'Please enter max points' }]}
						>
							<InputNumber min={1} max={1000} />
						</Form.Item>
						
						<Form.Item
							name="cpuTimeLimit"
							label="CPU Time Limit (seconds)"
						>
							<InputNumber min={0.1} max={10 * 10} step={0.1} />
						</Form.Item>
						
						<Form.Item
							name="memoryLimit"
							label="Memory Limit (KB)"
						>
							<InputNumber min={16} max={1024 * 1024} step={16} />
						</Form.Item>
						
						
						<Form.Item
							name={'maxTimeCommit'}
							label={"Max submission time"}
						>
							<InputNumber min={1} max={100} step={1} />
						</Form.Item>
					</Space>
					
					<Form.Item
						name="contestId"
						label="Contest"
						rules={[{ required: true, message: 'Please select a contest' }]}
					>
						<Select
							showSearch
							placeholder="Search contest"
							notFoundContent={isContestsFetching ? <Spin size="small" /> : 'No contest found'}
							onSearch={debouncedSearch}
							loading={isContestsFetching}
							defaultActiveFirstOption={false}
							showArrow={false}
							allowClear={true}
						>
							{contests.map((contest: Contest) => (
								<Option key={contest.id} value={contest.id}>
									{contest?.contestName} ({contest?.isPublic ? 'Public' : 'Private'})
								</Option>
							))}
						</Select>
					</Form.Item>
					
					{/* Problem Statement */}
					<Form.Item
						name="problemStatement"
						label="Problem Statement"
						rules={[{ required: true, message: 'Please enter problem statement' }]}
					>
						<ReactQuill
							theme="snow"
							style={{ height: '200px', marginBottom: '50px' }}
						/>
					</Form.Item>
					
					{/* Tags */}
					<Form.Item
						name="tags"
						label="Tags"
					>
						<Select
							mode="multiple"
							placeholder="Select tags"
							loading={isTagsFetching}
							notFoundContent={isTagsFetching ? <Spin size="small" /> : 'No tags found'}
							allowClear={true}
						>
							{tags.map((tag: ProblemTag) => (
								<Option key={tag.tagName} value={tag.tagName}>
									{tag?.tagName}
								</Option>
							))}
						</Select>
					</Form.Item>
					
					{/* Test Cases */}
					<Form.List name="testCases">
						{(fields, { add, remove }) => (
							<>
								{fields.map(({ key, name, ...restField }) => (
									<Card
										key={key}
										className="mb-4"
										size="small"
										title={
											<div className="flex justify-between items-center">
												<span>Test Case #{name + 1}</span>
												<Form.Item
													{...restField}
													name={[name, 'isHidden']}
													valuePropName="checked"
													initialValue={false}
													className="mb-0"
												>
													<Switch
														checkedChildren="Hidden"
														unCheckedChildren="Public"
													/>
												</Form.Item>
											</div>
										}
									>
										<Space direction="vertical" style={{ width: '100%' }}>
											<Form.Item
												{...restField}
												name={[name, 'input']}
												rules={[{ required: true, message: 'Input required' }]}
												label="Input"
											>
												<Input.TextArea rows={4} />
											</Form.Item>
											<Form.Item
												{...restField}
												name={[name, 'output']}
												rules={[{ required: true, message: 'Output required' }]}
												label="Output"
											>
												<Input.TextArea rows={4} />
											</Form.Item>
											<Button
												type="text"
												onClick={() => remove(name)}
												icon={<MinusCircleOutlined />}
												danger
											>
												Remove Test Case
											</Button>
										</Space>
									</Card>
								))}
								<Form.Item>
									<Button
										type="dashed"
										onClick={() => add()}
										block
										icon={<PlusOutlined />}
									>
										Add Test Case
									</Button>
								</Form.Item>
							</>
						)}
					</Form.List>
					
					{/* Submit Button */}
					<Form.Item>
						<Button type="primary" htmlType="submit" loading={loading}>
							Create Problem
						</Button>
					</Form.Item>
				</Form>
			</Card>
		</div>
	);
};

export default CreateProblem;