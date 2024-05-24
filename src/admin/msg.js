import React, { useEffect, useState } from "react";
import axios from "axios";

import baseUrl from "../components/baseurl";

const Msg = () => {
    const token = JSON.parse(localStorage.getItem("token"));

    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`${baseUrl}/msgget`, {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setMessages(res.data);
            } catch (error) {
                console.log(error.message);
            }
        };

        fetchData();
    }, [token]);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`${baseUrl}/msgdel/${id}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            setMessages(messages.filter((msg) => msg._id !== id));
        } catch (error) {
            console.log(error.message);
        }
    };

    const currentDate = new Date().getTime();

    return (
        <div className="container mx-auto px-4 py-8">
            {messages.map((message) => (
                <div
                    key={message._id}
                    className="bg-white shadow-lg rounded-lg p-6 mb-4"
                >
                    <div className="flex items-center justify-between mb-4">
                        {new Date(message.datePosted).getTime() +
                            1000 * 60 * 60 * 24 >
                            currentDate && (
                            <span className="bg-green-500 text-white px-2 py-1 rounded-full text-sm mr-2">
                                New
                            </span>
                        )}
                        <button
                            onClick={() => handleDelete(message._id)}
                            className="bg-red-500 text-white px-3 py-1 rounded-lg text-sm focus:outline-none"
                        >
                            Delete
                        </button>
                    </div>
                    <h2 className="text-lg font-semibold mb-2">
                        Message from: {message.name}
                    </h2>
                    <p className="text-gray-600 mb-2">
                        Email: <i>{message.email}</i>
                    </p>
                    <p className="text-gray-700">{message.message}</p>
                </div>
            ))}
            {messages.length === 0 && (
                <p className="text-gray-600 text-center">No messages found</p>
            )}
        </div>
    );
};

export default Msg;
