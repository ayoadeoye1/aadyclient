import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import fb from '../assets/fb.png'
import twi from '../assets/twi.png'
import wa from '../assets/wa.png'
import aady from '../assets/aady1.jpg'

const Contact = () => {
  return (
    <div className=' bg-gradient-to-tr leading-10 from-slate-800 via-slate-300 to-slate-600 text-yellow-50 w-full h-screen items-center'>
        <div className='flex flex-row w-full justify-between  '>
            <img className=' mt-8 h-fit w-1/2 rounded-full' src={aady} alt='me' />
            <div className='m-4 w-1/2 flex flex-col '>
                <h2>contacts</h2>
                <a className='m-4 flex flex-row' href='tel:+2348063399734'>
                    <FontAwesomeIcon 
                        icon={faPhone}
                        size='2x'
                    />
                    <p className='px-2 py-2'>call</p>
                </a>
                <a className='m-4 flex flex-row' href="mailto:isadeoye02@gmail.com?subject=Mail from AyoAdeoye Portfolio">
                    <FontAwesomeIcon 
                        icon={faEnvelope}
                        size='2x'
                    />
                    <p className='px-2 py-2'>mail</p>
                </a>
                <a className='m-4 flex flex-row' href='https://twitter.com/ayoadeoye01?s=09'>
                    <img className='h-10 w-10 rounded-md' src={twi} alt='twi' />
                    <p className='px-2 py-2'>twitter</p>
                </a>
                <a className='m-4 flex flex-row' href='https://facebook.com/ayobamiisaac.diadem'>
                    <img className='h-10 w-10 rounded-md' src={fb} alt='fb' />
                    <p className='px-2 py-2'>facebook</p>
                </a>
                <a className='m-4 flex flex-row' href='https://wa.me/2348063399734'>
                    <img className='h-10 w-10 rounded-md' src={wa} alt='wa' />
                    <p className='px-2 py-2'>whatsapp</p>
                </a>
            </div>
        </div>
        <div className=''>
            <p className='p-6 text-center'>copyright&nbsp;
            <FontAwesomeIcon 
                icon={faCopyright}
            />&nbsp;
            {
              new Date().getFullYear()
            }&nbsp; 
            ayoadeoye
            </p>
        </div>
    </div>
  )
}

export default Contact