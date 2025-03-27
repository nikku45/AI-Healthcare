import React, { useState } from "react";
import axios from "axios";

const ChatApp = () => {
  const [userMessage, setUserMessage] = useState(""); // User input
  const [chatbotResponse, setChatbotResponse] = useState(""); // Chatbot response

  // Function to handle API request
  const sendMessage = async () => {
    try {
      const response = await axios.post("http://localhost:3000/api/chat", {
        message: userMessage, // Sending user's input to backend
      });

      setChatbotResponse(response.data.reply); // Update state with chatbot's response
    } catch (error) {
      console.error("Error communicating with backend:", error);
      setChatbotResponse("Error: Unable to communicate with chatbot.");
    }
  };

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4">AI Health Chatbot</h1>

      <textarea
        className="border p-2 w-full max-w-md mb-4"
        rows="4"
        placeholder="Type your message..."
        value={userMessage}
        onChange={(e) => setUserMessage(e.target.value)}
      />

      <button
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
        onClick={sendMessage}
      >
        Send
      </button>

      {chatbotResponse && (
        <div className="mt-4 p-4 bg-gray-100 border rounded w-full max-w-md">
          <strong>Chatbot:</strong> {chatbotResponse}
        </div>
      )}
    </div>
  );
};

export default ChatApp;
