import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import baseUrl from "../components/baseurl";

const Blog = () => {
    const token = JSON.parse(localStorage.getItem("token"));

    // const [loading, setLoading] = useState(false)

    const [title, setTitle] = useState("");
    const [imageFile, setImageFile] = useState(null);
    const [article, setArticle] = useState("");

    const [blog, setBlog] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get(`${baseUrl}/blogget`);
            try {
                setBlog(res.data);
            } catch (error) {
                console.log(error.message);
            }
        };

        fetchData();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("title", title);
        formData.append("image", imageFile);
        formData.append("article", article);

        const body = Object.fromEntries(formData);

        try {
            const response = await axios.post(`${baseUrl}/blogpost`, body, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log(response.data);
            setTitle("");
            setImageFile(null);
            setArticle("");
        } catch (error) {
            console.error(error);
        }
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImageFile(file);
    };

    const delBlog = (id) => {
        const fetchData = async () => {
            try {
                const res = await axios.delete(`${baseUrl}/blogdel/${id}`, {
                    headers: { Authorization: `Bearer ${token}` },
                });
                console.log(res.data);
                toast.success("blog deleted");
            } catch (error) {
                console.log(error.message);
            }
        };

        fetchData();
    };

    return (
        <div>
            <ToastContainer />

            <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
                <h1 className="text-2xl font-bold mb-6 text-center">
                    Post a Blog
                </h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label
                            htmlFor="title"
                            className="block text-gray-700 font-semibold mb-2"
                        >
                            Title
                        </label>
                        <input
                            type="text"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full h-10 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="image"
                            className="block text-gray-700 font-semibold mb-2"
                        >
                            Image
                        </label>
                        <input
                            type="file"
                            id="image"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="w-full border-gray-300"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="article"
                            className="block text-gray-700 font-semibold mb-2"
                        >
                            Article
                        </label>
                        <ReactQuill
                            theme="snow"
                            id="article"
                            value={article}
                            onChange={setArticle}
                            className="w-full h-40 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            required
                        />
                    </div>
                    <br />
                    <div className="flex justify-end mt-2">
                        <button
                            type="submit"
                            className="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>

            <div className="shadow-sm p-4 mt-8">
                <h1 className="text-lg text-center uppercase font-semibold mb-6">
                    Blogs
                </h1>
                <div className="flex flex-wrap justify-center">
                    {blog?.map((ele) => (
                        <div
                            key={ele._id}
                            className="overflow-hidden bg-slate-200 m-4 p-4 h-auto w-full sm:w-[350px] md:w-[400px] lg:w-[450px] xl:w-[500px] rounded-lg shadow-md"
                        >
                            <button
                                onClick={() => delBlog(ele._id)}
                                className="float-right bg-red-500 text-white font-bold text-lg rounded px-2 py-1"
                            >
                                Delete Blog
                            </button>
                            <h2 className="uppercase font-medium mt-4">
                                <p className="uppercase font-lead">Title:</p>
                                {ele.title}
                            </h2>
                            <img
                                className="w-full h-48 object-cover rounded mt-4"
                                src={ele.imageUrl}
                                alt="Blog"
                            />
                            <article className="p-2 mt-4">
                                <p className="uppercase font-lead">Article:</p>
                                <div
                                    className="line-clamp-2"
                                    dangerouslySetInnerHTML={{
                                        __html: ele.blogArticle,
                                    }}
                                />
                            </article>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;
