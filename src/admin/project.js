import React, { useState } from "react";
import axios from "axios";

import baseUrl from "../components/baseurl";

const Project = () => {
    const token = JSON.parse(localStorage.getItem("token"));

    const [body, setBody] = useState({
        url: "",
        repo: "",
        stack: "",
        comment: "",
    });

    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const res = await axios.post(`${baseUrl}/projectspost`, body, {
                headers: { Authorization: `Bearer ${token}` },
            });
            console.log(res.data);
            setSuccess(true);
        } catch (error) {
            setError(error.message);
            console.log(error);
        }
    };

    return (
        <div className="max-w-md mx-auto p-4">
            <form
                className="bg-white shadow-md rounded-md p-6"
                onSubmit={handleSubmit}
            >
                <h1 className="text-lg text-center uppercase font-semibold mb-4">
                    Add New Project
                </h1>
                <div className="mb-4">
                    <input
                        className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        type="text"
                        name="url"
                        value={body.url}
                        onChange={(e) =>
                            setBody({ ...body, url: e.target.value })
                        }
                        placeholder="Enter URL"
                        required
                    />
                </div>
                <div className="mb-4">
                    <input
                        className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        type="text"
                        name="repo"
                        value={body.repo}
                        onChange={(e) =>
                            setBody({ ...body, repo: e.target.value })
                        }
                        placeholder="Enter Repo URL"
                        required
                    />
                </div>
                <div className="mb-4">
                    <input
                        className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        type="text"
                        name="stack"
                        value={body.stack}
                        onChange={(e) =>
                            setBody({ ...body, stack: e.target.value })
                        }
                        placeholder="Enter Stack Type"
                        required
                    />
                </div>
                <div className="mb-4">
                    <input
                        className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        type="text"
                        name="comment"
                        value={body.comment}
                        onChange={(e) =>
                            setBody({ ...body, comment: e.target.value })
                        }
                        placeholder="Enter Comment"
                        required
                    />
                </div>

                {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
                {success && (
                    <p className="text-green-500 text-sm mb-2">
                        Project added successfully!
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

export default Project;
