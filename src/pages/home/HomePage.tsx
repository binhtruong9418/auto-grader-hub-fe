import { useQuery } from "@tanstack/react-query";
import { Card, Row, Col, Statistic, Button, Table, List } from "antd";
import {
  UserOutlined,
  CodeOutlined,
  TrophyOutlined,
  SolutionOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import homeService from "@/apis/service/homeService";

const Home = () => {
  // Fetch statistics
  const { data: stats } = useQuery({
    queryKey: ["home-statistics"],
    queryFn: () => homeService.getStatistics(),
  });

  // Fetch recent contests
  const { data: recentContests } = useQuery({
    queryKey: ["recent-contests"],
    queryFn: () => homeService.getRecentContests(),
  });

  // Fetch recent problems
  const { data: recentProblems } = useQuery({
    queryKey: ["recent-problems"],
    queryFn: () => homeService.getRecentProblems(),
  });

  // Fetch top users
  const { data: topUsers } = useQuery({
    queryKey: ["top-users"],
    queryFn: () => homeService.getTopUsers(),
  });

  return (
    <div className="p-6">
      {/* Statistics Cards */}
      <Row gutter={[24, 24]} className="mb-6">
        <Col xs={24} sm={12} lg={6}>
          <Card
            bordered={false}
            className="hover:shadow-md transition-shadow"
            style={{
              background: "linear-gradient(135deg, #1890ff 0%, #096dd9 100%)",
            }}
          >
            <Statistic
              title={<span className="text-white">Total Users</span>}
              value={stats?.totalUsers || 0}
              prefix={<UserOutlined />}
              valueStyle={{ color: "white" }}
            />
            <div className="mt-4">
              <Link to="/users">
                <Button type="link" className="text-white p-0">
                  View All Users →
                </Button>
              </Link>
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card
            bordered={false}
            className="hover:shadow-md transition-shadow"
            style={{
              background: "linear-gradient(135deg, #52c41a 0%, #389e0d 100%)",
            }}
          >
            <Statistic
              title={<span className="text-white">Total Problems</span>}
              value={stats?.totalProblems || 0}
              prefix={<CodeOutlined />}
              valueStyle={{ color: "white" }}
            />
            <div className="mt-4">
              <Link to="/problems">
                <Button type="link" className="text-white p-0">
                  View All Problems →
                </Button>
              </Link>
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card
            bordered={false}
            className="hover:shadow-md transition-shadow"
            style={{
              background: "linear-gradient(135deg, #faad14 0%, #d48806 100%)",
            }}
          >
            <Statistic
              title={<span className="text-white">Active Contests</span>}
              value={stats?.totalContests || 0}
              prefix={<TrophyOutlined />}
              valueStyle={{ color: "white" }}
            />
            <div className="mt-4">
              <Link to="/contests">
                <Button type="link" className="text-white p-0">
                  View All Contests →
                </Button>
              </Link>
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card
            bordered={false}
            className="hover:shadow-md transition-shadow"
            style={{
              background: "linear-gradient(135deg, #f5222d 0%, #cf1322 100%)",
            }}
          >
            <Statistic
              title={<span className="text-white">Total Submissions</span>}
              value={stats?.totalSubmissions || 0}
              prefix={<SolutionOutlined />}
              valueStyle={{ color: "white" }}
            />
            <div className="mt-4">
              <Link to="/submissions">
                <Button type="link" className="text-white p-0">
                  View All Submissions →
                </Button>
              </Link>
            </div>
          </Card>
        </Col>
      </Row>

      {/* Main Content */}
      <Row gutter={[24, 24]}>
        {/* Left Column */}
        <Col xs={24} lg={12}>
          {/* Recent Contests */}
          <Card
            title={
              <span className="text-lg">
                <TrophyOutlined className="mr-2" />
                Recent Contests
              </span>
            }
            className="mb-6 hover:shadow-md transition-shadow"
          >
            <Table
              dataSource={recentContests} // Array of contests
              pagination={false}
              columns={[
                {
                  title: "Contest Name",
                  dataIndex: "contestName",
                  key: "contestName",
                  render: (text, record) => (
                    <Link
                      to={`/contests/${record.id}`}
                      className="text-blue-500 hover:text-blue-700"
                    >
                      {text}
                    </Link>
                  ),
                },
                {
                  title: "Creator",
                  dataIndex: "creator",
                  key: "creator",
                },
                {
                  title: "Description",
                  dataIndex: "description",
                  key: "description",
                },
                {
                  title: "Status",
                  dataIndex: "status",
                  key: "status",
                  render: (status) => {
                    let statusColor = "";
                    let statusText = "";
                    let statusClass =
                      "text-sm font-semibold px-3 py-1 rounded-full";

                    if (status === "running") {
                      statusColor = "bg-green-500 text-white";
                      statusText = "Active";
                    } else {
                      statusColor = "bg-yellow-500 text-white";
                      statusText = "Upcoming";
                    }

                    return (
                      <span className={`${statusClass} ${statusColor}`}>
                        {statusText}
                      </span>
                    );
                  },
                },
              ]}
            />
          </Card>
          {/* Recent Problems */}
          <Card
            title={
              <span className="text-lg">
                <CodeOutlined className="mr-2" />
                Recent Problems
              </span>
            }
            className="mb-6 hover:shadow-md transition-shadow"
          >
            <Table
              dataSource={recentProblems} // Array of problems
              pagination={false}
              columns={[
                {
                  title: "Problem Name",
                  dataIndex: "problemName",
                  key: "problemName",
                  render: (text, record) => (
                    <Link
                      to={`/problems/${record.id}`}
                      className="text-blue-500 hover:text-blue-700"
                    >
                      {text}
                    </Link>
                  ),
                },
                {
                  title: "Problem Code",
                  dataIndex: "problemCode",
                  key: "problemCode",
                },
                {
                  title: "Difficulty",
                  dataIndex: "difficulty",
                  key: "difficulty",
                },
                {
                  title: "CPU Time Limit",
                  dataIndex: "cpuTimeLimit",
                  key: "cpuTimeLimit",
                },
                {
                  title: "Memory Limit",
                  dataIndex: "memoryLimit",
                  key: "memoryLimit",
                },
                {
                  title: "Tags",
                  dataIndex: "tags",
                  key: "tags",
                },
              ]}
            />
          </Card>
        </Col>

        {/* Right Column */}
        <Col xs={24} lg={12}>
          {/* Top Users */}
          <Card
            title={
              <span className="text-lg">
                <TeamOutlined className="mr-2" />
                Top Users
              </span>
            }
            className="mb-6 hover:shadow-md transition-shadow"
          >
            <List
              dataSource={topUsers}
              renderItem={(user, index) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          index === 0
                            ? "bg-yellow-100 text-yellow-600"
                            : index === 1
                            ? "bg-gray-100 text-gray-600"
                            : index === 2
                            ? "bg-orange-100 text-orange-600"
                            : "bg-blue-100 text-blue-600"
                        }`}
                      >
                        {index + 1}
                      </div>
                    }
                    title={
                      <Link
                        to={`/users/${user.id}`}
                        className="text-blue-500 hover:text-blue-700"
                      >
                        {user.email}
                      </Link>
                    }
                    description={`Score: ${user.totalScore} | Solved: ${user.totalSolved}`}
                  />
                </List.Item>
              )}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
