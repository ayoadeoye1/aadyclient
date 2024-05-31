import React, { useState, useEffect } from "react";
import axios from "axios";

import baseUrl from "../components/baseurl";

const Education = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get(`${baseUrl}/eduget`)
            .then((res) => {
                setLoading(false);
                setData(res.data);
            })
            .catch((err) => {
                setLoading(false);
                console.log(err);
            });
    }, []);

    return (
        <div className="education-section shadow-sm mt-6">
            <h1 className="education-title text-lg font-semibold text-center uppercase">
                Education
            </h1>
            <div>
                {loading ? (
                    <div class="text-center p-4 bg-gray-200 rounded-md">
                        <span class="inline-block w-8 h-8 border-4 border-gray-300 rounded-full animate-spin"></span>
                        Loading...
                    </div>
                ) : (
                    <div>
                        <table className="education-table w-full mx-auto">
                            <thead>
                                <tr>
                                    <th className="border-b-2 px-4 py-2 text-left">
                                        Institution
                                    </th>
                                    <th className="border-b-2 px-4 py-2 text-left">
                                        Course
                                    </th>
                                    <th className="border-b-2 px-4 py-2 text-left">
                                        Duration
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item) => (
                                    <tr
                                        key={item._id}
                                        className="education-row"
                                    >
                                        <td className="border-2 px-4 py-2 text-left">
                                            {item.institution}
                                        </td>
                                        <td className="border-2 px-4 py-2 text-left">
                                            {item.course}
                                        </td>
                                        <td className="border-2 px-4 py-2 text-left">
                                            {item.duration}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Education;
