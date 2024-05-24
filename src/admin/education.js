import React, { useState } from "react";
import axios from "axios";

import baseUrl from "../components/baseurl";

const Edu = () => {
    const token = JSON.parse(localStorage.getItem("token"));

    const [formData, setFormData] = useState({
        institution: "",
        course: "",
        duration: "",
    });

    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        try {
            const res = await axios.post(
                `${baseUrl}/edupost`,
                { body: formData },
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            );
            console.log(res.data);
            setSuccess(true);
        } catch (error) {
            setError(error.message);
            console.error(error);
        }
    };

    return (
        <div className="max-w-md mx-auto p-4">
            <form
                className="bg-white shadow-md rounded-md p-6"
                onSubmit={handleSubmit}
            >
                <h1 className="text-lg text-center uppercase font-semibold mb-4">
                    Education Details
                </h1>
                <div className="mb-4">
                    <input
                        className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        type="text"
                        name="institution"
                        value={formData.institution}
                        onChange={handleChange}
                        placeholder="Enter institution"
                        required
                    />
                </div>
                <div className="mb-4">
                    <input
                        className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        type="text"
                        name="course"
                        value={formData.course}
                        onChange={handleChange}
                        placeholder="Enter course"
                        required
                    />
                </div>
                <div className="mb-4">
                    <input
                        className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        type="text"
                        name="duration"
                        value={formData.duration}
                        onChange={handleChange}
                        placeholder="Enter duration"
                        required
                    />
                </div>
                {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
                {success && (
                    <p className="text-green-500 text-sm mb-2">
                        Education details submitted successfully!
                    </p>
                )}
                <button
                    className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
                    type="submit"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Edu;
