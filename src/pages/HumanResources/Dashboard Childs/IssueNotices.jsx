import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory

const IssueNotices = () => {
  const [notice, setNotice] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { noticeID } = useParams();
  const navigate = useNavigate(); // Initialize navigate from useNavigate

  // Fetch notice by ID
  useEffect(() => {
    const fetchNotice = async () => {
      try {
        const response = await axios.get(`http://localhost:4040/api/v1/notice/${noticeID}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('authToken')}`, // Replace with actual token logic
          },
        });
        setNotice(response.data.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load notice');
        setLoading(false);
      }
    };

    fetchNotice();
  }, [noticeID]);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:4040/api/v1/notice/delete-notice/${noticeID}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('authToken')}`, // Replace with actual token logic
        },
      });
      navigate('/notices'); // Redirect back to notices list after delete using navigate
    } catch (err) {
      setError('Failed to delete the notice');
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">{notice.title}</h2>
      <p className="text-gray-700 mb-4">{notice.content}</p>

      <div className="text-sm text-gray-500 mb-4">
        <span className="font-semibold">Created by:</span> {notice.createdby.firstname} {notice.createdby.lastname}
      </div>
      <div className="text-sm text-gray-500 mb-4">
        <span className="font-semibold">Audience:</span> {notice.audience}
      </div>

      {/* Render department or employee-specific notices */}
      {notice.department ? (
        <div className="text-sm text-gray-500">
          <span className="font-semibold">Target Department:</span> {notice.department.name}
        </div>
      ) : null}

      {notice.employee ? (
        <div className="text-sm text-gray-500">
          <span className="font-semibold">Target Employee:</span> {notice.employee.firstname} {notice.employee.lastname}
        </div>
      ) : null}

      {/* Delete button for HR-Admin */}
      <button
        onClick={handleDelete}
        className="bg-red-500 text-white px-4 py-2 rounded mt-4"
      >
        Delete Notice
      </button>
    </div>
  );
};

export default IssueNotices;
