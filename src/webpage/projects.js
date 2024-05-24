import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import baseUrl from "../components/baseurl";

const Projects = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get(`${baseUrl}/projectsget`)
            .then((res) => {
                setData(res.data.slice(0, 4));
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div className="shadow-sm p-4">
            <h1 className="m-2 text-lg text-center uppercase font-semibold">
                Projects
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {data?.map((x) => (
                    <div
                        key={x._id}
                        className="relative bg-slate-200 p-4 rounded-lg shadow-md"
                    >
                        <iframe
                            className="h-48 sm:h-64 w-full rounded-lg"
                            src={x.url ? x.url : x.repo}
                            title="project frame"
                        />
                        <div className="mt-4 flex flex-col space-y-2">
                            <p>
                                <strong>ABOUT:</strong> {x.comment}
                            </p>
                            <p>
                                <strong>WHAT I DID:</strong> {x.stack}
                            </p>
                            <br />
                            <div className="mt-auto absolute bottom-2 right-2">
                                <a
                                    className="text-blue-600 block"
                                    href={x.url ? x.url : x.repo}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    VIEW
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center mt-4">
                <Link className="font-medium text-blue-600" to="/projects">
                    View all projects...
                </Link>
            </div>
        </div>
    );
};

export default Projects;
