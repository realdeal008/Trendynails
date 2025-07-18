"use client";
import React from "react";
import { FaCommentDots } from "react-icons/fa";

const FloatingChatButton: React.FC = () => {
  return (
    <div className="fixed bottom-8 right-8 z-50">
      <button
        className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-pink-700 transition"
        aria-label="Chat"
      >
        <FaCommentDots className="text-2xl" />
      </button>
    </div>
  );
};

export default FloatingChatButton;
