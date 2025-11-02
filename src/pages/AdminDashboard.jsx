import React, { useState } from 'react';
import { Check, X, Clock, Star } from 'lucide-react';

export default function AdminDashboard({ comments, onUpdateStatus, onDelete }) {
  const [filter, setFilter] = useState('all');

  const filteredComments = comments.filter(comment => {
    if (filter === 'all') return true;
    return comment.status === filter;
  });

  const stats = {
    total: comments.length,
    pending: comments.filter(c => c.status === 'pending').length,
    accepted: comments.filter(c => c.status === 'accepted').length,
    rejected: comments.filter(c => c.status === 'rejected').length
  };

  return (
    <div className="py-12 px-4 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 my-8">Admin Dashboard</h2>
        
        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600">
            <p className="text-gray-600 text-sm font-semibold">Total Comments</p>
            <p className="text-3xl font-bold text-gray-800">{stats.total}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-yellow-500">
            <p className="text-gray-600 text-sm font-semibold">Pending</p>
            <p className="text-3xl font-bold text-gray-800">{stats.pending}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-600">
            <p className="text-gray-600 text-sm font-semibold">Accepted</p>
            <p className="text-3xl font-bold text-gray-800">{stats.accepted}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-600">
            <p className="text-gray-600 text-sm font-semibold">Rejected</p>
            <p className="text-3xl font-bold text-gray-800">{stats.rejected}</p>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white p-4 rounded-lg shadow-md mb-6 flex gap-4 flex-wrap">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-lg font-semibold transition ${
              filter === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter('pending')}
            className={`px-4 py-2 rounded-lg font-semibold transition ${
              filter === 'pending' ? 'bg-yellow-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Pending
          </button>
          <button
            onClick={() => setFilter('accepted')}
            className={`px-4 py-2 rounded-lg font-semibold transition ${
              filter === 'accepted' ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Accepted
          </button>
          <button
            onClick={() => setFilter('rejected')}
            className={`px-4 py-2 rounded-lg font-semibold transition ${
              filter === 'rejected' ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Rejected
          </button>
        </div>

        {/* Comments List */}
        <div className="space-y-4">
          {filteredComments.length === 0 ? (
            <div className="bg-white p-8 rounded-lg shadow-md text-center text-gray-500">
              No comments to display
            </div>
          ) : (
            filteredComments.map(comment => (
              <div key={comment.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                <div className="flex justify-between items-start mb-4 flex-wrap gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                      {comment.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 text-lg">{comment.name}</h4>
                      <p className="text-gray-500 text-sm">{comment.email}</p>
                      <p className="text-gray-400 text-xs">{comment.date}</p>
                      <div className="flex items-center gap-1 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < comment.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {comment.status === 'pending' && (
                      <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-semibold flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        Pending
                      </span>
                    )}
                    {comment.status === 'accepted' && (
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold flex items-center gap-1">
                        <Check className="w-4 h-4" />
                        Accepted
                      </span>
                    )}
                    {comment.status === 'rejected' && (
                      <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-semibold flex items-center gap-1">
                        <X className="w-4 h-4" />
                        Rejected
                      </span>
                    )}
                  </div>
                </div>

                <p className="text-gray-700 mb-4 leading-relaxed">{comment.message}</p>

                <div className="flex gap-3 pt-4 border-t border-gray-200 flex-wrap">
                  {comment.status !== 'accepted' && (
                    <button
                      onClick={() => onUpdateStatus(comment.id, 'accepted')}
                      className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition flex items-center gap-2 font-semibold"
                    >
                      <Check className="w-4 h-4" />
                      Accept
                    </button>
                  )}
                  {comment.status !== 'rejected' && (
                    <button
                      onClick={() => onUpdateStatus(comment.id, 'rejected')}
                      className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition flex items-center gap-2 font-semibold"
                    >
                      <X className="w-4 h-4" />
                      Reject
                    </button>
                  )}
                  <button
                    onClick={() => {
                      if (window.confirm('Are you sure you want to delete this comment?')) {
                        onDelete(comment.id);
                      }
                    }}
                    className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition font-semibold ml-auto"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}