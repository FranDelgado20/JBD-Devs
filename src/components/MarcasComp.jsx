import React from 'react'

const MarcasComp = () => {
  return (
<div class="mx-auto max-w-7xl px-6 lg:px-8 mb-5">
  <h2 class="text-center text-lg font-semibold leading-8 text-gray-400">
    Tecnologías utilizadas
  </h2>
  <div class="mx-auto mt-10 grid max-w-lg grid-cols-2 sm:max-w-xl sm:grid-cols-6 sm:gap-x-4 lg:mx-0 lg:max-w-none lg:grid-cols-6">
    <img
      class="col-span-1 max-h-12 w-full object-contain"
      src="https://logos-world.net/wp-content/uploads/2023/08/React-Symbol.png"
      alt="React"
      width={158}
      height={48}
    />
    <img
      class="col-span-1 max-h-12 w-full object-contain"
      src="/tailwind-removebg-preview.png"
      alt="Tailwind CSS"
      width={158}
      height={48}
    />
    <img
      class="col-span-1 max-h-12 w-full object-contain"
      src="https://react-bootstrap.netlify.app/img/logo.svg"
      alt="React Bootstrap"
      width={158}
      height={48}
    />
    <img
      class="col-span-1 max-h-12 w-full object-contain"
      src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/bootstrap-5-logo-icon.png"
      alt="Bootstrap"
      width={158}
      height={48}
    />
    <img
      class="col-span-1 max-h-12 w-full object-contain"
      src="https://www.material-tailwind.com/image/logo-mt.png"
      alt="Material Tailwind"
      width={158}
      height={48}
    />
    <img
      class="col-span-1 max-h-12 w-full object-contain"
      src="/MongoDB_Logo.svg-removebg-preview.png"
      alt="MongoDB"
      width={158}
      height={48}
    />
  </div>
</div>

  )
}

export default MarcasComp