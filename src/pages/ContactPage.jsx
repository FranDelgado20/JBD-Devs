import React from 'react'

const ContactPage = () => {
  return (
    <>
    <div className="container mx-auto ">

      <figure className="bg-slate-100 rounded-xl p-8 w-80 dark:bg-slate-800 shadow-2xl " >
        <img
          className="w-32 h-32 rounded-full mx-auto"
          src="/yo-removebg-preview.png"
          alt=""
         
          />
        <div className="pt-6 text-center space-y-4">
          <blockquote>
            <p className="text-lg font-medium text-orange-600 ">
              “Me llamo mejai y formo parte de JBD DEVS y HACETE CULIA PICHON.”
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">Santiago Jaime</div>
            <div className="text-slate-700 dark:text-slate-500">
              Tafi Viejo, Tucumán
            </div>
          </figcaption>
        </div>
      </figure>
          </div>
    </>
  )
}

export default ContactPage