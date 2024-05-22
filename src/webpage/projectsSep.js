import React, { useEffect, useState } from "react";
import axios from "axios";

import baseUrl from "../components/baseurl";

const ProjectsSep = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get(`${baseUrl}/projectsget`)
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div className="shadow-sm p-4">
            <h1 className="m-4 text-2xl text-center">AADY Projects</h1>
            <div className="flex flex-wrap justify-center">
                {data?.map((x) => (
                    <div
                        key={x._id}
                        className="bg-slate-200 m-4 p-4 w-full sm:w-[300px] rounded-lg shadow-md"
                    >
                        <iframe
                            className="h-[200px] w-full sm:w-[250px] p-2 rounded-lg"
                            src={x.url ? x.url : x.repo}
                            title="project frame"
                        />
                        <div className="mt-4">
                            <p>
                                <strong>COMMENT:</strong> {x.comment}
                            </p>
                            <p>
                                <strong>STACK:</strong> {x.stack}
                            </p>
                            <a
                                className="text-blue-600 block mt-2"
                                href={x.url ? x.url : "#"}
                                target="_blank"
                                rel="noreferrer"
                            >
                                Visit website
                            </a>
                            <a
                                className="text-blue-600 block"
                                href={x.repo}
                                target="_blank"
                                rel="noreferrer"
                            >
                                Visit GitHub repo
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectsSep;
