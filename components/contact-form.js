import { FaSpotify } from 'react-icons/fa';
import {  
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoGithub
  } from "react-icons/io5";

export default function ContactForm() {

  return (
    <div>
        <section class="text-gray-600 body-font relative" id='Contact'>
        <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-col text-center w-full mb-12">
                <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Contact Us</h1>
                <p class="lg:w-2/3 mx-auto leading-relaxed text-base">You can send your message and I will get back to you soon.</p>
                <p class="lg:w-2/3 mx-auto leading-relaxed text-base">I suggest calling for an appointment.</p>
            </div>
            <div class="lg:w-1/2 md:w-2/3 mx-auto">
                <div class="flex flex-wrap -m-2">
  
             
                    <div class="p-2 w-full pt-8 mt-8 text-center">
                    <a class="text-gray-500">carlos@carlosgatti.com</a>
                    <a class="text-gray-500" type='phone'>+1(857)350-7504</a>
                    <p class="leading-normal my-5 border-t border-gray-200 ">
                        You can find me in the links below
                    </p>
                    <span class="inline-flex">
                  
                        <a class="ml-4 text-gray-500" href='https://www.instagram.com/gattiproductions/'>
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                        </svg>
                        </a>
                       
                    </span>
                    </div>
                </div>
            </div>
        </div>
        </section>
    </div>
  )
}




