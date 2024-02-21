import React from 'react'

const MarcasComp = () => {
  return (
    <div className="  py-24 sm:py-32">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <h2 className="text-center text-lg font-semibold leading-8 text-gray-400">
        Tecnologías utilizadas
      </h2>
      <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
        <img
          className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          src="https://logos-world.net/wp-content/uploads/2023/08/React-Symbol.png"
          alt="Transistor"
          width={158}
          height={48}
        />
        <img
          className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          src="/tailwind-removebg-preview.png"
          alt="Reform"
          width={158}
          height={48}
        />
        <img
          className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          src="https://react-bootstrap.netlify.app/img/logo.svg"
          alt="Tuple"
          width={158}
          height={48}
        />
        <img
          className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
          src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/bootstrap-5-logo-icon.png"
          alt="SavvyCal"
          width={158}
          height={48}
        />
        <img
          className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
          src="https://www.material-tailwind.com/image/logo-mt.png"
          alt="Statamic"
          width={158}
          height={48}
        />
      </div>
    </div>
  </div>
  )
}

export default MarcasComp