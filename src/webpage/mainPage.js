import React, { useEffect, useRef, useState } from "react";

import Blog from "./blog";
import Projects from "./projects";

import menu1 from "../assets/menu.png";
import menu2 from "../assets/close.png";
import ay from "../assets/ay.jpg";
import About from "./about";
import Skills from "./skills";
import Education from "./education";
// import References from './references';
import Contact from "./contact";
import Message from "./message";

import axios from "axios";
import { Link } from "react-router-dom";

import baseUrl from "../components/baseurl";

const MainPage = () => {
    const [ip, setIp] = useState();

    const [top, setTop] = useState(false);
    const [resp, setResp] = useState(false);

    const blogref = useRef(null);
    const projectref = useRef(null);
    const aboutref = useRef(null);
    const skillsref = useRef(null);
    const eduref = useRef(null);
    const msgref = useRef(null);
    const conref = useRef(null);

    const scrollDown = (data) => {
        window.scrollTo({
            top: data.current.offsetTop,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                setTop(true);
            } else {
                setTop(false);
            }
        });
    }, []);

    const goTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const Don = () => {
        setResp((prev) => !prev);
    };

    useEffect(() => {
        axios
            .get(`https://api.ipify.org?format=json`)
            .then((res) => {
                setIp(res.data.ip);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [ip]);

    useEffect(() => {
        const postData = async () => {
            await axios
                .post(`${baseUrl}/ipdata`, { ipdata: ip })
                .then((res) => {
                    console.log("user scrapped");
                })
                .catch((err) => {
                    console.log(err);
                });
        };

        ip && postData();
    }, [ip]);

    return (
        <div>
            {top && (
                <button
                    onClick={() => goTop()}
                    className="bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 h-10 w-10 fixed right-6 bottom-10 font-bold text-5xl rounded-full z-50"
                >
                    ^
                </button>
            )}

            <header className=" h-screen bg-gradient-to-br from-blue-400 via-slate-200 to-yellow-100">
                <div className=" flex flex-row justify-between">
                    <h1 className="p-4 text-2xl sm:text-3xl font-about">
                        Ayobami Isaac
                    </h1>

                    <div className="m-4 hidden md:flex md:flex-row sm:flex sm:flex-row text-blue-500 space-x-4">
                        <button
                            className="pl-2 transition duration-300 ease-in-out transform hover:scale-105 hover:text-blue-700"
                            onClick={() => scrollDown(aboutref)}
                        >
                            About Me
                        </button>
                        <button
                            className="pl-2 transition duration-300 ease-in-out transform hover:scale-105 hover:text-blue-700"
                            onClick={() => scrollDown(skillsref)}
                        >
                            Skills
                        </button>
                        <button
                            className="pl-2 transition duration-300 ease-in-out transform hover:scale-105 hover:text-blue-700"
                            onClick={() => scrollDown(blogref)}
                        >
                            Blogs
                        </button>
                        <button
                            className="pl-2 transition duration-300 ease-in-out transform hover:scale-105 hover:text-blue-700"
                            onClick={() => scrollDown(projectref)}
                        >
                            Projects
                        </button>
                        <button
                            className="pl-2 transition duration-300 ease-in-out transform hover:scale-105 hover:text-blue-700"
                            onClick={() => scrollDown(eduref)}
                        >
                            Education
                        </button>
                        <button
                            className="pl-2 transition duration-300 ease-in-out transform hover:scale-105 hover:text-blue-700"
                            onClick={() => scrollDown(msgref)}
                        >
                            Message
                        </button>
                        <button className="pl-2 transition duration-300 ease-in-out transform hover:scale-105 hover:text-blue-700">
                            <Link to="/about-web">About Website</Link>
                        </button>
                    </div>

                    <div className="sm:hidden lg:hidden shadow-lg absolute top-4 right-4">
                        <img
                            height={35}
                            width={35}
                            alt="menu"
                            onClick={() => Don()}
                            src={resp ? menu2 : menu1}
                            className="font-bold"
                        />
                    </div>
                    {resp && (
                        <div className="fixed top-0 right-0 left-0 bottom-0  pt-5 opacity-90 bg-black">
                            <div className="sm:hidden shadow-lg absolute top-4 right-6">
                                <div
                                    className=" text-white font-bold text-5xl"
                                    onClick={() => Don()}
                                >
                                    x
                                </div>
                            </div>
                            <br />
                            <div
                                style={{
                                    margin: "1rem",
                                    display: "flex",
                                    flexDirection: "column",
                                    textAlign: "center",
                                    fontSize: "2rem",
                                    fontFamily: "sans-serif",
                                    color: "white",
                                    gap: "1rem",
                                }}
                            >
                                <button
                                    style={{
                                        padding: "0.5rem",
                                        transition:
                                            "transform 0.3s ease-in-out, color 0.3s",
                                        cursor: "pointer",
                                    }}
                                    onClick={() => {
                                        Don();
                                        scrollDown(aboutref);
                                    }}
                                    onMouseEnter={(e) =>
                                        (e.target.style.color = "#60A5FA")
                                    }
                                    onMouseLeave={(e) =>
                                        (e.target.style.color = "white")
                                    }
                                >
                                    About Me
                                </button>
                                <button
                                    style={{
                                        padding: "0.5rem",
                                        transition:
                                            "transform 0.3s ease-in-out, color 0.3s",
                                        cursor: "pointer",
                                    }}
                                    onClick={() => {
                                        Don();
                                        scrollDown(skillsref);
                                    }}
                                    onMouseEnter={(e) =>
                                        (e.target.style.color = "#60A5FA")
                                    }
                                    onMouseLeave={(e) =>
                                        (e.target.style.color = "white")
                                    }
                                >
                                    Skills
                                </button>
                                <button
                                    style={{
                                        padding: "0.5rem",
                                        transition:
                                            "transform 0.3s ease-in-out, color 0.3s",
                                        cursor: "pointer",
                                    }}
                                    onClick={() => {
                                        Don();
                                        scrollDown(blogref);
                                    }}
                                    onMouseEnter={(e) =>
                                        (e.target.style.color = "#60A5FA")
                                    }
                                    onMouseLeave={(e) =>
                                        (e.target.style.color = "white")
                                    }
                                >
                                    Blogs
                                </button>
                                <button
                                    style={{
                                        padding: "0.5rem",
                                        transition:
                                            "transform 0.3s ease-in-out, color 0.3s",
                                        cursor: "pointer",
                                    }}
                                    onClick={() => {
                                        Don();
                                        scrollDown(projectref);
                                    }}
                                    onMouseEnter={(e) =>
                                        (e.target.style.color = "#60A5FA")
                                    }
                                    onMouseLeave={(e) =>
                                        (e.target.style.color = "white")
                                    }
                                >
                                    Projects
                                </button>
                                <button
                                    style={{
                                        padding: "0.5rem",
                                        transition:
                                            "transform 0.3s ease-in-out, color 0.3s",
                                        cursor: "pointer",
                                    }}
                                    onClick={() => {
                                        Don();
                                        scrollDown(eduref);
                                    }}
                                    onMouseEnter={(e) =>
                                        (e.target.style.color = "#60A5FA")
                                    }
                                    onMouseLeave={(e) =>
                                        (e.target.style.color = "white")
                                    }
                                >
                                    Education
                                </button>
                                <button
                                    style={{
                                        padding: "0.5rem",
                                        transition:
                                            "transform 0.3s ease-in-out, color 0.3s",
                                        cursor: "pointer",
                                    }}
                                    onClick={() => {
                                        Don();
                                        scrollDown(msgref);
                                    }}
                                    onMouseEnter={(e) =>
                                        (e.target.style.color = "#60A5FA")
                                    }
                                    onMouseLeave={(e) =>
                                        (e.target.style.color = "white")
                                    }
                                >
                                    Message
                                </button>
                                <button
                                    style={{
                                        padding: "0.5rem",
                                        transition:
                                            "transform 0.3s ease-in-out, color 0.3s",
                                        cursor: "pointer",
                                    }}
                                >
                                    <Link
                                        to="/about-web"
                                        style={{
                                            color: "inherit",
                                            textDecoration: "none",
                                        }}
                                        onMouseEnter={(e) =>
                                            (e.target.style.color = "#60A5FA")
                                        }
                                        onMouseLeave={(e) =>
                                            (e.target.style.color = "white")
                                        }
                                    >
                                        About Website
                                    </Link>
                                </button>
                            </div>
                        </div>
                    )}
                </div>
                <div className=" mt-20">
                    <center>
                        <img
                            className=" rounded-3xl h-[200px] w-[200px] sm:h-[250px] sm:w-[250px] md:h-[300px] md:w-[300px] object-cover"
                            src={ay}
                            alt="not available"
                        />
                    </center>
                </div>

                <div className="m-4 text-center">
                    <button className=" px-4 py-2 outline rounded-lg m-4 bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500">
                        Get Resume
                    </button>
                    <button
                        onClick={() => scrollDown(conref)}
                        className="px-4 py-2 outline rounded-lg m-4 bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500"
                    >
                        Contact
                    </button>
                </div>
            </header>

            <div className=" bg-gradient-to-br from-blue-100 to-slate-300">
                <section ref={aboutref}>
                    <About />
                </section>

                <section ref={skillsref}>
                    <Skills />
                </section>

                <section ref={projectref}>
                    <Projects />
                </section>

                <section ref={blogref}>
                    <Blog />
                </section>

                <section ref={eduref}>
                    <Education />
                </section>
                <br />

                <section ref={msgref}>
                    <Message />
                </section>

                <section ref={conref}>
                    <Contact />
                </section>
            </div>
        </div>
    );
};

export default MainPage;
