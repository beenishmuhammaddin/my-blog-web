'use client'
import React, { useEffect, useState } from 'react';

const CommentBox = () => {
  const [Comment, setComment] = useState('');
  const [Comments, setComments] = useState<string[]>([]);

  useEffect(() => {
    // Fetch existing comments from localStorage when component mounts
    const savedComments = localStorage.getItem('comments');
    if (savedComments) {
      setComments(JSON.parse(savedComments));
    }
  }, []);

  const addComments = () => {
    // Prevent adding empty or whitespace-only comments
    if (Comment.trim() !== '') {
      const updatedComments = [...Comments, Comment];
      setComments(updatedComments);
      setComment(''); // Reset the input field

      // Save the updated comments list to localStorage
      localStorage.setItem('comments', JSON.stringify(updatedComments));
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-gray-100 rounded-lg shadow-xl">
      <h1 className="text-3xl font-semibold text-center text-indigo-700 mb-4">
        Share Your Thoughts:
      </h1>
      
      {/* Input Section */}
      <div className="flex flex-col mb-4">
        <input
          type="text"
          value={Comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Write your comment"
          className="border-2 border-gray-400 rounded-lg p-3 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-200"
        />
      </div>

      {/* Add Comment Button */}
      <div className="flex justify-center">
        <button
          className="bg-indigo-600 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          onClick={addComments}
        >
          Add Comment
        </button>
      </div>

      {/* Comments List Section */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold text-gray-700">All Comments:</h2>
        {Comments.length === 0 ? (
          <p className="text-gray-500 mt-2">No comments yet. Add your comment!</p>
        ) : (
          <ul className="mt-4 space-y-3">
            {Comments.map((data, index) => (
              <li key={index} className="bg-blue-50 p-3 rounded-lg shadow-sm">
                {data}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CommentBox;
