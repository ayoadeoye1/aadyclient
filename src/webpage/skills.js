import React, { useState, useEffect } from "react";
import Rating from "../components/rating";
import axios from "axios";

import baseUrl from "../components/baseurl";

const Skills = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get(`${baseUrl}/skillsget`)
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
        <div className="shadow-sm m-6">
            <h1 className="m-4 text-lg text-center uppercase font-semibold">
                Skills Section
            </h1>

            <div>
                {loading ? (
                    <div class="text-center p-4 bg-gray-200 rounded-md">
                        <span class="inline-block w-8 h-8 border-4 border-gray-300 rounded-full animate-spin"></span>
                        Loading...
                    </div>
                ) : (
                    <div>
                        <div className="m-4">
                            <h2 className="text-lg font-semibold mb-2 underline">
                                Web Development
                            </h2>
                            {data?.map(
                                (x) =>
                                    x.category === "web development" && (
                                        <div
                                            key={x._id}
                                            className="flex justify-between items-center ml-10 mb-2"
                                        >
                                            <span className="font-txt">
                                                {x.skill}
                                            </span>
                                            <Rating rate={x.rank} />
                                        </div>
                                    )
                            )}
                        </div>

                        <div className="m-4">
                            <h2 className="text-lg font-semibold mb-2 underline">
                                Software Development
                            </h2>
                            {data?.map(
                                (x) =>
                                    x.category === "software development" && (
                                        <div
                                            key={x._id}
                                            className="flex justify-between items-center ml-10 mb-2"
                                        >
                                            <span className="font-txt">
                                                {x.skill}
                                            </span>
                                            <Rating rate={x.rank} />
                                        </div>
                                    )
                            )}
                        </div>

                        <div className="m-4">
                            <h2 className="text-lg font-semibold mb-2 underline">
                                Version Control
                            </h2>
                            {data?.map(
                                (x) =>
                                    x.category === "version control" && (
                                        <div
                                            key={x._id}
                                            className="flex justify-between items-center ml-10 mb-2"
                                        >
                                            <span className="font-txt">
                                                {x.skill}
                                            </span>
                                            <Rating rate={x.rank} />
                                        </div>
                                    )
                            )}
                        </div>

                        <div className="m-4">
                            <h2 className="text-lg font-semibold mb-2 underline">
                                Cloud Operation
                            </h2>
                            {data?.map(
                                (x) =>
                                    x.category === "cloud operation" && (
                                        <div
                                            key={x._id}
                                            className="flex justify-between items-center ml-10 mb-2"
                                        >
                                            <span className="font-txt">
                                                {x.skill}
                                            </span>
                                            <Rating rate={x.rank} />
                                        </div>
                                    )
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Skills;
