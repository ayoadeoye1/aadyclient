import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    // faCopyright,
    faEnvelope,
    faPhone,
} from "@fortawesome/free-solid-svg-icons";
import fb from "../assets/fb.png";
import twi from "../assets/twi.png";
import wa from "../assets/wa.png";
// import aady from '../assets/aady1.jpg'

const Contact = () => {
    return (
        <div className="bg-gradient-to-tr from-slate-800 via-slate-300 to-slate-600 text-yellow-50 w-full h-screen flex flex-col justify-between items-center">
            <div className="flex flex-col md:flex-row w-full justify-between items-center mt-8">
                {/* Placeholder for an image or other content */}
                <div className="hidden md:block w-1/2">
                    {/* <img className='mt-8 h-auto w-1/2 rounded-full' src={aady} alt='me' /> */}
                </div>
                <div className="m-4 w-full md:w-1/2 flex flex-col items-start">
                    <h2 className="text-3xl mb-4">Contacts</h2>
                    <a
                        className="m-4 flex items-center"
                        href="tel:+2348063399734"
                    >
                        <FontAwesomeIcon icon={faPhone} size="2x" />
                        <p className="px-4 py-2">Call</p>
                    </a>
                    <a
                        className="m-4 flex items-center"
                        href="mailto:isadeoye02@gmail.com?subject=Mail from AyoAdeoye Portfolio"
                    >
                        <FontAwesomeIcon icon={faEnvelope} size="2x" />
                        <p className="px-4 py-2">Mail</p>
                    </a>
                    <a
                        className="m-4 flex items-center"
                        href="https://twitter.com/ayoadeoye01?s=09"
                    >
                        <img
                            className="h-10 w-10 rounded-md"
                            src={twi}
                            alt="Twitter"
                        />
                        <p className="px-4 py-2">Twitter</p>
                    </a>
                    <a
                        className="m-4 flex items-center"
                        href="https://facebook.com/ayobamiisaac.diadem"
                    >
                        <img
                            className="h-10 w-10 rounded-md"
                            src={fb}
                            alt="Facebook"
                        />
                        <p className="px-4 py-2">Facebook</p>
                    </a>
                    <a
                        className="m-4 flex items-center"
                        href="https://wa.me/2348063399734"
                    >
                        <img
                            className="h-10 w-10 rounded-md"
                            src={wa}
                            alt="WhatsApp"
                        />
                        <p className="px-4 py-2">WhatsApp</p>
                    </a>
                </div>
            </div>
            <div className="w-full">
                <p className="p-6 text-center">
                    &copy; {new Date().getFullYear()} Ayobami Adeoye
                </p>
            </div>
        </div>
    );
};

export default Contact;
