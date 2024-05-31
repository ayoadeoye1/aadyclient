import React, { useState, useEffect } from "react";
import axios from "axios";
import YouTube from "react-youtube";

import baseUrl from "../components/baseurl";

const About = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get(`${baseUrl}/aboutmeget/648706cfb93cba72f3b1bfe2`)
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
        <div className="container mx-auto p-6">
            <div key={data._id}>
                {loading ? (
                    <div class="text-center p-4 bg-gray-200 rounded-md">
                        <span class="inline-block w-8 h-8 border-4 border-gray-300 rounded-full animate-spin"></span>
                        Loading...
                    </div>
                ) : (
                    <div className="leading-8 sm:leading-10 font-lead mb-8">
                        {data && data.about}
                    </div>
                )}
                <center className=" w-full">
                    <h2>About Video</h2>

                    {loading ? (
                        <div class="text-center p-4 bg-gray-200 rounded-md">
                            <span class="inline-block w-8 h-8 border-4 border-gray-300 rounded-full animate-spin"></span>
                            Loading...
                        </div>
                    ) : (
                        <YouTube
                            videoId={data.vidUrl?.split("/")[4]}
                            opts={{ height: "250px", width: "300px" }}
                        />
                    )}
                </center>
            </div>
        </div>
    );
};

export default About;
