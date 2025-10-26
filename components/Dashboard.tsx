import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import Card from './Card';

const systemUptimeData = [
  { name: 'Core API', uptime: 99.98 },
  { name: 'Data Lake', uptime: 99.95 },
  { name: 'Auth Svc', uptime: 100 },
  { name: 'Web Front', uptime: 99.99 },
  { name: 'ETL Pipe', uptime: 99.80 },
];

const dataThroughputData = [
  { name: '00:00', throughput: 4000 },
  { name: '04:00', throughput: 3000 },
  { name: '08:00', throughput: 2000 },
  { name: '12:00', throughput: 2780 },
  { name: '16:00', throughput: 1890 },
  { name: '20:00', throughput: 2390 },
  { name: '24:00', throughput: 3490 },
];

const storageAllocationData = [
  { name: 'Databases', value: 400 },
  { name: 'File Storage', value: 300 },
  { name: 'Backups', value: 300 },
  { name: 'Logs', value: 200 },
];

const COLORS = ['#0ea5e9', '#06b6d4', '#14b8a6', '#6366f1'];

interface DashboardProps {
    theme: 'light' | 'dark';
}

const Dashboard: React.FC<DashboardProps> = ({ theme }) => {
  const isDark = theme === 'dark';
  const gridColor = isDark ? '#374151' : '#e5e7eb';
  const textColor = isDark ? '#9ca3af' : '#6b7280';
  const tooltipStyle = {
      backgroundColor: isDark ? '#1f2937' : '#ffffff',
      border: `1px solid ${isDark ? '#374151' : '#d1d5db'}`,
  };

  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Circle Soft ERP Dashboard</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <Card>
          <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium">Active Users</h3>
          <p className="text-3xl font-bold text-gray-900 dark:text-white">1,428</p>
        </Card>
        <Card>
          <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium">Data Integrity</h3>
          <p className="text-3xl font-bold text-green-500 dark:text-green-400">99.97%</p>
        </Card>
        <Card>
          <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium">Threats Blocked (24h)</h3>
          <p className="text-3xl font-bold text-red-600 dark:text-red-500">12</p>
        </Card>
        <Card>
          <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium">System Status</h3>
          <p className="text-3xl font-bold text-sky-500 dark:text-sky-400">Optimal</p>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">System Uptime (%)</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={systemUptimeData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
              <XAxis dataKey="name" stroke={textColor} />
              <YAxis domain={[99.5, 100]} stroke={textColor} />
              <Tooltip contentStyle={tooltipStyle} />
              <Legend />
              <Bar dataKey="uptime" fill="#0ea5e9" />
            </BarChart>
          </ResponsiveContainer>
        </Card>
        
        <Card>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Data Throughput (GB/hr)</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={dataThroughputData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
              <XAxis dataKey="name" stroke={textColor} />
              <YAxis stroke={textColor} />
              <Tooltip contentStyle={tooltipStyle} />
              <Legend />
              <Line type="monotone" dataKey="throughput" stroke="#06b6d4" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </Card>
        
        <Card className="lg:col-span-2">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Storage Allocation (TB)</h3>
            <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                    <Pie
                        data={storageAllocationData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                        {storageAllocationData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip contentStyle={tooltipStyle} />
                    <Legend />
                </PieChart>
            </ResponsiveContainer>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;