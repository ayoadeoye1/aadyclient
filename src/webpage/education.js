import React, { useState, useEffect } from "react";
import axios from "axios";

import baseUrl from "../components/baseurl";

const Education = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get(`${baseUrl}/eduget`)
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div className="education-section shadow-sm">
            <h1 className="education-title text-lg font-semibold text-center uppercase">
                Education
            </h1>
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
                        <tr key={item._id} className="education-row">
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
    );
};

export default Education;
