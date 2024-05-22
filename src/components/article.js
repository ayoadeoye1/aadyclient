import React, { useState, useEffect } from "react";
import axios from "axios";

import baseUrl from "../components/baseurl";

const Article = (props) => {
    const [data, setData] = useState({});
    const [clap, setClap] = useState([]);

    useEffect(() => {
        axios
            .get(`${baseUrl}/bloggetone/${props.id}`)
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [props, clap]);

    const Clap = () => {
        axios
            .put(`${baseUrl}/blogclap/${props.id}`)
            .then((res) => {
                setClap(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className="bg-slate-200 m-2 rounded-lg">
            <h2 className="uppercase font-medium text-center">{data.title}</h2>
            <img
                className="mx-auto my-4 rounded"
                height={250}
                width={300}
                src={data.imageUrl}
                alt="theimg"
            />
            <article className="p-4">
                <p className="uppercase font-semibold">Article:</p>
                <div
                    dangerouslySetInnerHTML={{
                        __html: data.blogArticle,
                    }}
                />
            </article>
            <div className="text-center mb-4">
                <button
                    onClick={() => Clap()}
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                >
                    <span className="mr-2">{data.clap}</span>
                    Clap👏🏼
                </button>
            </div>
        </div>
    );
};

export default Article;
