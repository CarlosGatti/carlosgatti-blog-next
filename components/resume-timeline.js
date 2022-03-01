import Link from 'next/link'
import { FaFilePdf, FaGithub, FaLinkedinIn } from 'react-icons/fa';

export default function ResumeTimeline() {
    
    return (

        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">
                    <div className="p-4 lg:w-1/3">
                        <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">DOWNLOAD</h2>
                        <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Resume</h1>
                        <p className="leading-relaxed mb-3">Here is my resume for you to save.</p>
                        <Link target="_blank" href="./Resume-Carlos-Gatti.pdf">
                            <a className="text-gray-500 inline-flex items-center hover:text-blue-500">Donwload
                           
                            </a>
                        </Link>
                        
                        <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                            <span className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200 hover:text-blue-600">
                                <FaFilePdf className='w-6 h-6 mr-1'></FaFilePdf>
                            </span>
                            <span className="text-gray-400 inline-flex items-center leading-none text-sm hover:text-blue-600">
                                <FaLinkedinIn className="w-6 h-6 mr-1"></FaLinkedinIn>
                            </span>
                        </div>
                        </div>
                    </div>
                    <div className="p-4 lg:w-1/3">
                        <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">BOOKING</h2>
                        <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Schedule a conversation with me.</h1>
                        <p className="leading-relaxed mb-3">In my Calendly you will be able to identify a good time to talk.</p>
                        <Link target="_blank" href="https://calendly.com/eduardo-gf/30min">
                            <a className="text-gray-500 inline-flex items-center hover:text-blue-500">My Calendly
                             
                             

                            </a>
                        </Link>    
    
                        </div>
                    </div>
                    <div className="p-4 lg:w-1/3">
                        <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">PROJECTS</h2>
                        <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Checkout my Github</h1>
                        <p className="leading-relaxed mb-3">You can look at some of my projects.</p>
                        <a className="text-gray-500 inline-flex items-center">My Github
 

                        </a>
                        <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                            <span className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm border-gray-200 hover:text-blue-600">
                                <FaGithub className='w-6 h-6 mr-1'></FaGithub>
                            </span>
                      
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </div>
    )
}