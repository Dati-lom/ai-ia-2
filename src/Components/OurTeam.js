import React from "react";
const ExpertTeamSection = ({translations}) => {
  return (
    <section className="py-10 bg-secondary sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-tetriary sm:text-4xl lg:text-5xl">
            {translations.homescreen.team}
          </h2>
        </div>
        <div className="grid grid-cols-2 mt-8 text-center sm:mt-16 lg:mt-20 sm:grid-cols-4 gap-y-8 lg:grid-cols-9 gap-x-0">
        <div className="hidden lg:block"></div>
          <div className="hidden lg:block"></div>
          <div>
            <img
              className="object-cover mx-auto rounded-lg w-64 h-64 shadow-2xl"
              src="https://i.postimg.cc/636MnVKF/Screenshot-2024-09-25-034752.png"
              alt=""
            />
            <p className="mt-8 text-lg font-semibold leading-tight text-tetriary">
              {translations.homescreen.anamaria}
            </p>
           
          </div>
          <div className="hidden lg:block"></div>
          <div>
            <img
              className="object-cover mx-auto rounded-lg w-64 h-64 shadow-2xl"
              src="https://i.postimg.cc/BvBhjYrx/Screenshot-2024-09-25-034805.png"
              alt=""
            />
            <p className="mt-8 text-lg font-semibold leading-tight text-tetriary">
              {translations.homescreen.lika}
            </p>
           
          </div>
          <div className="hidden lg:block"></div>
          <div>
            <img
              className="object-cover mx-auto rounded-lg  w-64 h-64 shadow-2xl"
              src="https://i.postimg.cc/MTsdDcKH/Screenshot-2024-09-25-034738.png"
              alt=""
            />
            <p className="mt-8 text-lg font-semibold leading-tight text-tetriary">
              {translations.homescreen.dato}
            </p>
           
          </div>
          <div className="hidden lg:block"></div>
        </div>
      </div>
    </section>
  );
};
export default ExpertTeamSection;
