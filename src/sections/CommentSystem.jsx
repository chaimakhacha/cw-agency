import React, { useState } from 'react';
import { Send, MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, Youtube, Check, X, Clock, Star } from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState('main');
  const [comments, setComments] = useState([
    {
      id: 1,
      name: 'Sarah Johnson',
      email: 'sarah@example.com',
      message: 'Amazing service! The team was professional and delivered beyond our expectations.',
      status: 'accepted',
      date: '2025-10-15',
      rating: 5
    },
    {
      id: 2,
      name: 'Michael Chen',
      email: 'michael@example.com',
      message: 'Great experience working with this team. Highly recommend their services!',
      status: 'pending',
      date: '2025-10-16',
      rating: 5
    },
    {
      id: 3,
      name: 'Emily Davis',
      email: 'emily@example.com',
      message: 'Professional and creative. They transformed our vision into reality.',
      status: 'pending',
      date: '2025-10-17',
      rating: 4
    }
  ]);

  const handleCommentSubmit = (newComment) => {
    setComments([...comments, {
      ...newComment,
      id: Date.now(),
      status: 'pending',
      date: new Date().toISOString().split('T')[0]
    }]);
  };

  const updateCommentStatus = (id, status) => {
    setComments(comments.map(comment => 
      comment.id === id ? { ...comment, status } : comment
    ));
  };

  const deleteComment = (id) => {
    setComments(comments.filter(comment => comment.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-2xl font-bold text-blue-600">CW Creative World</h1>
            <div className="flex gap-4">
              <button
                onClick={() => setCurrentView('main')}
                className={`px-4 py-2 rounded-lg font-semibold transition ${
                  currentView === 'main' ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Contact
              </button>
              <button
                onClick={() => setCurrentView('comments')}
                className={`px-4 py-2 rounded-lg font-semibold transition ${
                  currentView === 'comments' ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Testimonials
              </button>
              <button
                onClick={() => setCurrentView('admin')}
                className={`px-4 py-2 rounded-lg font-semibold transition ${
                  currentView === 'admin' ? 'bg-purple-600 text-white' : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Admin Dashboard
              </button>
            </div>
          </div>
        </div>
      </nav>

      {currentView === 'main' && <ContactSection onCommentSubmit={handleCommentSubmit} />}
      {currentView === 'admin' && <AdminDashboard comments={comments} onUpdateStatus={updateCommentStatus} onDelete={deleteComment} />}
      {currentView === 'comments' && <CommentsDisplay comments={comments.filter(c => c.status === 'accepted')} />}
    </div>
  );
}

function ContactSection({ onCommentSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    rating: 5
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onCommentSubmit(formData);
    alert('Thank you for your message! It will be reviewed by our team.');
    setFormData({ name: '', email: '', message: '', rating: 5 });
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-600">Let's start creating something amazing together</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Send us a message</h3>
            <div className="space-y-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Rating</label>
                <select
                  name="rating"
                  value={formData.rating}
                  onChange={(e) => setFormData({ ...formData, rating: parseInt(e.target.value) })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                >
                  <option value="5">⭐⭐⭐⭐⭐ Excellent</option>
                  <option value="4">⭐⭐⭐⭐ Good</option>
                  <option value="3">⭐⭐⭐ Average</option>
                  <option value="2">⭐⭐ Poor</option>
                  <option value="1">⭐ Very Poor</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition resize-none"
                ></textarea>
              </div>
              <button 
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all flex items-center justify-center gap-2"
              >
                Send Message <Send className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-800 mb-1">Our Office</p>
                <p className="text-gray-600">123 Creative Street, Design City, DC 12345</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-800 mb-1">Phone</p>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-800 mb-1">Email</p>
                <p className="text-gray-600">hello@cwcreativeworld.com</p>
              </div>
            </div>

            <div className="pt-8">
              <p className="font-semibold text-gray-800 mb-4">Follow Us</p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-blue-400 transition">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-pink-600 transition">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-red-600 transition">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AdminDashboard({ comments, onUpdateStatus, onDelete }) {
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
    <div className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Admin Dashboard</h2>
        
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

        <div className="bg-white p-4 rounded-lg shadow-md mb-6 flex gap-4">
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

        <div className="space-y-4">
          {filteredComments.length === 0 ? (
            <div className="bg-white p-8 rounded-lg shadow-md text-center text-gray-500">
              No comments to display
            </div>
          ) : (
            filteredComments.map(comment => (
              <div key={comment.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
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

                <div className="flex gap-3 pt-4 border-t border-gray-200">
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
                    onClick={() => onDelete(comment.id)}
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

function CommentsDisplay({ comments }) {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-600">Hear from those who've experienced our excellence</p>
        </div>

        {comments.length === 0 ? (
          <div className="text-center text-gray-500 py-12">
            No testimonials available yet.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {comments.map(comment => (
              <div key={comment.id} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < comment.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">"{comment.message}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {comment.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">{comment.name}</p>
                    <p className="text-gray-500 text-sm">{comment.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}