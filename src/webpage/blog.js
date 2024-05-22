import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import baseUrl from "../components/baseurl";

const Blog = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get(`${baseUrl}/blogget`)
            .then((res) => {
                setData(res.data.slice(0, 4));
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div className="shadow-sm">
            <h1 className="m-2 text-lg text-center uppercase font-semibold">
                Blogs
            </h1>
            <br />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center">
                {data.map((x) => (
                    <div key={x._id} className="m-2">
                        <div className="overflow-hidden bg-slate-200 rounded-lg">
                            <h2 className="uppercase font-medium">
                                <p className="uppercase font-lead">title:</p>
                                {x.title}
                            </h2>
                            <img
                                className="w-full h-48 object-cover rounded mt-4"
                                src={x.imageUrl}
                                alt="Blog"
                            />
                            <article className="p-2 mt-4">
                                <p className="uppercase font-lead">Article:</p>
                                <div
                                    className="line-clamp-2"
                                    dangerouslySetInnerHTML={{
                                        __html: x.blogArticle,
                                    }}
                                />
                            </article>
                            <Link
                                className="text-blue-500"
                                to={`/blogpost/${x._id}/${x.title
                                    ?.split(" ")
                                    .join("-")}`}
                            >
                                read more...
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
            <button className="text-center">
                <Link className="font-medium text-blue-600" to="/blog">
                    view blogs...
                </Link>
            </button>
        </div>
    );
};

export default Blog;
