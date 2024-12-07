import { useState, useEffect } from "react";
import { Table, Button, Tag, message, Space, Select } from "antd";
import joinContestService from "@/apis/service/joinContestService";

const { Option } = Select;

const JoinContestRequestsPage = () => {
  const [loading, setLoading] = useState(false);
  const [requests, setRequests] = useState([]);
  const [pagination, setPagination] = useState({ current: 1, pageSize: 10 });
  const [statusFilter, setStatusFilter] = useState<string | null>(null);

  useEffect(() => {
    fetchRequests();
  }, [pagination.current, statusFilter]);

  const fetchRequests = async () => {
    setLoading(true);
    try {
      const { data } = await joinContestService.getAllRequests({
        page: 0, 
        limit: 10,
      });
      setRequests(data.contents);
      setPagination((prev) => ({ ...prev, total: data.totalElements }));
    } catch (error) {
      console.error("Failed to fetch requests:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleApprove = async (id: string) => {
    try {
      await joinContestService.approveRequest(id);
      message.success("Request approved successfully!");
      fetchRequests();
    } catch (error) {
      console.error("Error approving request:", error);
      message.error("Failed to approve the request.");
    }
  };

  const handleReject = async (id: string) => {
    try {
      await joinContestService.rejectRequest(id);
      message.success("Request rejected successfully!");
      fetchRequests();
    } catch (error) {
      console.error("Error rejecting request:", error);
      message.error("Failed to reject the request.");
    }
  };

  const columns = [
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Contest ID",
      dataIndex: "contestId",
      key: "contestId",
    },
    {
        title: "Status",
        dataIndex: "status",
        key: "status",
        render: (status: number) => {
          const statusMap: Record<number, { text: string; color: string }> = {
            0: { text: "Pending", color: "blue" },
            1: { text: "Approved", color: "green" },
            2: { text: "Rejected", color: "red" },
          };
          const statusData = statusMap[status as keyof typeof statusMap];
          return <Tag color={statusData?.color}>{statusData?.text}</Tag>;
        },
    },
    {
      title: "Actions",
      key: "actions",
      render: (_: any, record: any) => (
        <Space>
          <Button
            type="primary"
            disabled={record.status !== 0}
            onClick={() => handleApprove(record.id)}
          >
            Approve
          </Button>
          <Button
            type="default"
            danger
            disabled={record.status !== 0}
            onClick={() => handleReject(record.id)}
          >
            Reject
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div style={{ padding: "16px", background: "#fff", minHeight: "100vh" }}>
      <h2>Join Contest Requests</h2>
      <Space style={{ marginBottom: 16 }}>
        <Select
          placeholder="Filter by Status"
          allowClear
          onChange={(value) => setStatusFilter(value)}
          style={{ width: 200 }}
        >
          <Option value="0">Pending</Option>
          <Option value="1">Approved</Option>
          <Option value="2">Rejected</Option>
        </Select>
      </Space>
      <Table
        columns={columns}
        dataSource={requests}
        loading={loading}
        rowKey="id"
        pagination={{
          ...pagination,
          onChange: (page) => setPagination((prev) => ({ ...prev, current: page })),
        }}
      />
    </div>
  );
};

export default JoinContestRequestsPage;
