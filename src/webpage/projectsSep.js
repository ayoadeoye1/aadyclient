import React, { useEffect, useState } from "react";
import axios from "axios";

import baseUrl from "../components/baseurl";

const ProjectsSep = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get(`${baseUrl}/projectsget`)
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
        <div className="shadow-sm p-4 m-6">
            <h1 className="m-4 text-2xl text-center">AADY Projects</h1>
            <div>
                {loading ? (
                    <div class="text-center p-4 bg-gray-200 rounded-md">
                        <span class="inline-block w-8 h-8 border-4 border-gray-300 rounded-full animate-spin"></span>
                        Loading...
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center">
                        {data?.map((x) => (
                            <div
                                key={x._id}
                                className="relative bg-slate-200 m-4 p-4 w-full rounded-lg shadow-md"
                            >
                                <iframe
                                    className="h-48 sm:h-64 w-full p-2 rounded-lg"
                                    src={x.url ? x.url : x.repo}
                                    title="project frame"
                                />
                                <div className="mt-4">
                                    <p>
                                        <strong>ABOUT:</strong> {x.comment}
                                    </p>
                                    <p>
                                        <strong>WHAT I DID:</strong> {x.stack}
                                    </p>
                                    <br />
                                    <a
                                        className="text-blue-600 block absolute bottom-2 right-2"
                                        href={x.url ? x.url : x.repo}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        VIEW
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProjectsSep;
