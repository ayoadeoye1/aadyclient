import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import baseUrl from "../components/baseurl";

const Message = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mess, setMess] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(`${baseUrl}/msgpost`, {
                name: name,
                email: email,
                message: mess,
            });

            if (response.status === 200) {
                toast.success("Message sent successfully!");
                setName("");
                setEmail("");
                setMess("");
            } else {
                toast.error("Failed to send message. Please try again later.");
            }
        } catch (error) {
            console.error("Error sending message:", error);
            toast.error(
                "An error occurred while sending the message. Please try again later."
            );
        }
    };

    return (
        <div className="max-w-md mx-auto p-4">
            <ToastContainer />
            <form
                className="bg-white shadow-md rounded-md p-6"
                onSubmit={handleSubmit}
            >
                <h1 className="text-lg text-center uppercase font-semibold mb-4">
                    Message Developer
                </h1>
                <div className="mb-4">
                    <input
                        className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your name"
                        required
                    />
                </div>
                <div className="mb-4">
                    <input
                        className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                    />
                </div>
                <div className="mb-4">
                    <textarea
                        rows={5}
                        className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        value={mess}
                        onChange={(e) => setMess(e.target.value)}
                        placeholder="Type your message/requirements"
                        required
                    />
                </div>
                <div>
                    <button
                        className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
                        type="submit"
                    >
                        Send Message
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Message;
