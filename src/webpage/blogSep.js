import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import baseUrl from "../components/baseurl";

const BlogSep = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get(`${baseUrl}/blogget`)
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div className="shadow-sm">
            <h1 className="m-2 text-lg text-center uppercase font-semibold">
                AADY Blogs
            </h1>
            <br />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center">
                {data.map((x) => (
                    <div
                        key={x._id}
                        className="overflow-hidden bg-slate-200 m-2 p-4 rounded-lg shadow-md"
                    >
                        <h2 className="uppercase font-medium mb-2">
                            <span className="uppercase font-lead">Title:</span>{" "}
                            {x.title}
                        </h2>
                        <img
                            className="w-full h-48 object-cover rounded"
                            src={x.imageUrl}
                            alt="Blog"
                        />
                        <article className="p-2 mt-2">
                            <p className="uppercase font-lead">Article:</p>
                            <div
                                className="line-clamp-2"
                                dangerouslySetInnerHTML={{
                                    __html: x.blogArticle,
                                }}
                            />
                        </article>
                        <Link
                            className="text-blue-500 mt-2 inline-block"
                            to={`/blogpost/${x._id}/${x.title
                                ?.split(" ")
                                .join("-")}`}
                        >
                            Read more...
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BlogSep;
