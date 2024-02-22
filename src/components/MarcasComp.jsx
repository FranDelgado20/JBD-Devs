import React from "react";

const MarcasComp = () => {
  const images = [
    "https://logos-world.net/wp-content/uploads/2023/08/React-Symbol.png",
    "/tecnologias/tailwind.png",
    "https://react-bootstrap.netlify.app/img/logo.svg",
    "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/bootstrap-5-logo-icon.png",
    "/tecnologias/MongoDB_Logo.svg-removebg-preview.png",
    "/tecnologias/nodejs.png"
  ];

  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-5">
      <h3 className="text-center font-semibold leading-8 text-gray-400">
        Tecnologías utilizadas
      </h3>
      <div className="mx-auto mt-10 grid max-w-lg grid-cols-2 sm:max-w-xl sm:grid-cols-2 md:grid-cols-3 sm:gap-x-4 lg:mx-0 lg:max-w-none lg:grid-cols-6">
        {images.map((img) => (
          <img
            className="col-span-1 max-h-12 w-full object-contain my-5"
            src={img}
            alt={img}
            width={158}
            height={48}
          />
        ))}
      </div>
    </div>
  );
};

export default MarcasComp;
