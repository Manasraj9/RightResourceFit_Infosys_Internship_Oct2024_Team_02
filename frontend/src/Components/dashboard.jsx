import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const Dashboard = () => {
  // Bar Chart Data
  const barData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Job View',
        data: [120, 140, 122, 145, 180, 110, 105],
        backgroundColor: '#f59e0b',
      },
      {
        label: 'Job Applied',
        data: [34, 30, 25, 35, 50, 20, 10],
        backgroundColor: '#6366f1',
      },
    ],
  };

  const barOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  // Job Update Data
  const jobs = [
    {
      title: 'Social Media Assistant',
      company: 'Nomad',
      location: 'Paris, France',
      type: 'Full-Time',
      tags: ['Marketing', 'Design'],
      logo: 'https://logo.clearbit.com/nordvpn.com', // Dummy logo link
      applied: 5,
      capacity: 10,
    },
    {
      title: 'Brand Designer',
      company: 'Nomad',
      location: 'Paris, France',
      type: 'Full-Time',
      tags: ['Business', 'Design'],
      logo: 'https://logo.clearbit.com/dropbox.com', // Dummy logo link
      applied: 5,
      capacity: 10,
    },
    {
      title: 'Interactive Developer',
      company: 'Terraform',
      location: 'Berlin, Germany',
      type: 'Full-Time',
      tags: ['Marketing', 'Design'],
      logo: 'https://logo.clearbit.com/hashicorp.com', // Dummy logo link
      applied: 5,
      capacity: 10,
    },
    {
      title: 'Product Designer',
      company: 'ClassPass',
      location: 'Berlin, Germany',
      type: 'Full-Time',
      tags: ['Business', 'Design'],
      logo: 'https://logo.clearbit.com/classpass.com', // Dummy logo link
      applied: 5,
      capacity: 10,
    },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header Section */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        {/* Stats Cards */}
        <div className="p-4 bg-blue-600 text-white rounded-lg">
          <h3 className="text-xl font-bold">76</h3>
          <p>New candidates to review</p>
        </div>
        <div className="p-4 bg-green-500 text-white rounded-lg">
          <h3 className="text-xl font-bold">3</h3>
          <p>Schedule for today</p>
        </div>
        <div className="p-4 bg-indigo-600 text-white rounded-lg">
          <h3 className="text-xl font-bold">24</h3>
          <p>Messages received</p>
        </div>
      </div>

      {/* Job Statistics Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-bold mb-4">Job statistics</h2>
        <div className="flex">
          {/* Bar Chart */}
          <div className="w-2/3">
            <Bar data={barData} options={barOptions} />
          </div>

          {/* Summary */}
          <div className="w-1/3 pl-6">
            <div className="grid grid-cols-1 gap-4">
              <div className="p-4 bg-white rounded-lg shadow-md">
                <h3 className="text-lg font-bold">Job Views</h3>
                <p className="text-2xl font-bold">2,342</p>
                <p className="text-green-600">This Week 6.4%</p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-md">
                <h3 className="text-lg font-bold">Job Applied</h3>
                <p className="text-2xl font-bold">654</p>
                <p className="text-red-600">This Week 0.5%</p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-md">
                <h3 className="text-lg font-bold">Job Open</h3>
                <p className="text-2xl font-bold">12</p>
                <p>Jobs Opened</p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-md">
                <h3 className="text-lg font-bold">Applicants Summary</h3>
                <p className="text-2xl font-bold">67</p>
                <div className="mt-2">
                  <p className="flex items-center">
                    <span className="w-3 h-3 bg-blue-600 rounded-full mr-2"></span>
                    Full-Time: 45
                  </p>
                  <p className="flex items-center">
                    <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                    Part-Time: 24
                  </p>
                  <p className="flex items-center">
                    <span className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
                    Internship: 32
                  </p>
                  <p className="flex items-center">
                    <span className="w-3 h-3 bg-red-600 rounded-full mr-2"></span>
                    Contract: 30
                  </p>
                  <p className="flex items-center">
                    <span className="w-3 h-3 bg-teal-500 rounded-full mr-2"></span>
                    Remote: 22
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Job Updates Section */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Job Updates</h2>
          <a href="/" className="text-blue-600">View All</a>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {jobs.map((job, index) => (
            <div key={index} className="p-4 bg-white border rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img src={job.logo} alt={`${job.title} logo`} className="w-10 h-10 rounded-full mr-4" />
                <span className="text-sm bg-green-100 text-green-700 py-1 px-2 rounded-full">{job.type}</span>
              </div>
              <h3 className="text-lg font-bold mb-2">{job.title}</h3>
              <p className="text-gray-500 mb-4">{job.company} • {job.location}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {job.tags.map((tag, idx) => (
                  <span key={idx} className={`py-1 px-2 rounded-full text-xs border ${tag === 'Design' ? 'border-blue-600 text-blue-600' : 'border-yellow-500 text-yellow-500'}`}>
                    {tag}
                  </span>
                ))}
              </div>
              <div className="h-1 w-full bg-gray-200 rounded-full mb-2">
                <div className="h-full bg-green-500 rounded-full" style={{ width: `${(job.applied / job.capacity) * 100}%` }}></div>
              </div>
              <p className="text-sm text-gray-500">{job.applied} applied of {job.capacity} capacity</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
