export default function Pricing({translations}) {
  const PRICING_DATA = [
    {
      name: translations.homescreen.free,
      price: "0$",
      iconComponent: <Guardian />,
      benefits: [
        translations.homescreen.list_free[0],
        translations.homescreen.list_free[1],
        translations.homescreen.list_free[2],
        translations.homescreen.list_free[3],

      ],
    },
    {
      name: translations.homescreen.free,
      price: "$48",
      iconComponent: <Mage />,
      benefits: [
        translations.homescreen.list_premium[0],
        translations.homescreen.list_premium[1],
        translations.homescreen.list_premium[2],
      ],
    },
  ];
    return (
      <>
      <div>
        {/* <img
          src="https://www.tailwindtap.com/assets/components/pricing/flexible-pricing/office.jpg"
          alt="high demand pricing plan background"
          className="h-screen w-full opacity-70 hidden lg:inline-block"
        /> */}
        <section className="bg-secondary font-sans lg:bg-transparent flex flex-col lg:flex-row justify-center xl:px-0 py-8 lg:py-0 w-full gap-6 items-center lg:items-stretch">
          {PRICING_DATA.map((data, index) => (
            <div key={index} className="relative m-10">
              <div className="max-w-sm xl:w-[384px] shadow-2xl p-6 bg-secondary group h-full rounded-2xl lg:hover:-translate-y-6 ease-in duration-300 hover:bg-primary hover:text-white border xl:border-none border-[#0B0641]">
                <div className="flex flex-row gap-5 items-center">
                  <div>{data.iconComponent}</div>
                  <span className="text-3xl font-bold">{data.name}</span>
                </div>
                <span className="flex mt-4 text-[#A9A9AA] text-2xl">
                  {translations.homescreen.get}
                </span>
                {data.benefits.map((data, index) => (
                  <div
                    key={index}
                    className="flex flex-row gap-2.5 items-start mt-6 text-left text-lg"
                  >
                    <div className="pt-1 shrink-0">
                      <RightIcon />
                    </div>
                    <span>{data}</span>
                  </div>
                ))}
                <div className="border border-dashed border-[#A9A9AA] tracking-widest my-4" />
                <div className="h-36">
                  <div className="bottom-6 left-6 right-6 absolute">
                    <div className="flex justify-start items-baseline">
                      <span className="text-[32px] font-bold ">{data.price}</span>
                    </div>
                    <button className="w-full px-4 py-3 bg-[#FFF5FA] text-[#FF1D89] group-hover:text-white group-hover:bg-tetriary rounded-xl mt-6 font-semibold text-xl">
                      {translations.homescreen.choose}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>

      </>
    );
  }
  const Guardian = () => {
    return (
      <svg
        className="fill-current"
        width="34"
        height="34"
        viewBox="0 0 34 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M30.3333 17C30.3333 13.4638 28.9286 10.0724 26.4281 7.57189C23.9276 5.0714 20.5362 3.66665 17 3.66665C13.4638 3.66665 10.0724 5.0714 7.57189 7.57189C5.0714 10.0724 3.66665 13.4638 3.66665 17V23.6666H8.66665C9.10867 23.6666 9.5326 23.8422 9.84516 24.1548C10.1577 24.4674 10.3333 24.8913 10.3333 25.3333V30.3333H23.6666V25.3333C23.6666 24.8913 23.8422 24.4674 24.1548 24.1548C24.4674 23.8422 24.8913 23.6666 25.3333 23.6666H30.3333V17ZM27 27V32C27 32.442 26.8244 32.8659 26.5118 33.1785C26.1993 33.4911 25.7753 33.6666 25.3333 33.6666H8.66665C8.22462 33.6666 7.8007 33.4911 7.48814 33.1785C7.17558 32.8659 6.99998 32.442 6.99998 32V27H1.99998C1.55795 27 1.13403 26.8244 0.821468 26.5118C0.508908 26.1993 0.333313 25.7753 0.333313 25.3333V17C0.333313 7.79498 7.79498 0.333313 17 0.333313C26.205 0.333313 33.6666 7.79498 33.6666 17V25.3333C33.6666 25.7753 33.4911 26.1993 33.1785 26.5118C32.8659 26.8244 32.442 27 32 27H27ZM9.49998 20.3333C9.17168 20.3333 8.84659 20.2687 8.54327 20.143C8.23996 20.0174 7.96436 19.8332 7.73221 19.6011C7.50007 19.3689 7.31592 19.0933 7.19028 18.79C7.06464 18.4867 6.99998 18.1616 6.99998 17.8333C6.99998 17.505 7.06464 17.1799 7.19028 16.8766C7.31592 16.5733 7.50007 16.2977 7.73221 16.0655C7.96436 15.8334 8.23996 15.6493 8.54327 15.5236C8.84659 15.398 9.17168 15.3333 9.49998 15.3333C10.163 15.3333 10.7989 15.5967 11.2677 16.0655C11.7366 16.5344 12 17.1703 12 17.8333C12 18.4964 11.7366 19.1322 11.2677 19.6011C10.7989 20.0699 10.163 20.3333 9.49998 20.3333ZM24.5 20.3333C24.1717 20.3333 23.8466 20.2687 23.5433 20.143C23.24 20.0174 22.9644 19.8332 22.7322 19.6011C22.5001 19.3689 22.3159 19.0933 22.1903 18.79C22.0646 18.4867 22 18.1616 22 17.8333C22 17.505 22.0646 17.1799 22.1903 16.8766C22.3159 16.5733 22.5001 16.2977 22.7322 16.0655C22.9644 15.8334 23.24 15.6493 23.5433 15.5236C23.8466 15.398 24.1717 15.3333 24.5 15.3333C25.163 15.3333 25.7989 15.5967 26.2677 16.0655C26.7366 16.5344 27 17.1703 27 17.8333C27 18.4964 26.7366 19.1322 26.2677 19.6011C25.7989 20.0699 25.163 20.3333 24.5 20.3333Z" />
      </svg>
    );
  };
  const Mage = () => {
    return (
      <svg
        className="fill-current"
        width="34"
        height="36"
        viewBox="0 0 34 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M17 0.333313C26.205 0.333313 33.6667 7.79498 33.6667 17V23.2733C33.6666 23.8925 33.4942 24.4994 33.1686 25.026C32.843 25.5527 32.3772 25.9782 31.8233 26.255L27 28.6666V30.3333C27.0001 31.6087 26.5128 32.8358 25.6379 33.7637C24.7629 34.6917 23.5665 35.2502 22.2933 35.325L21.9167 35.3333C21.9533 35.1518 21.9778 34.9681 21.99 34.7833L22 34.5V33.6666C22.0003 32.8257 21.6827 32.0157 21.1108 31.3991C20.539 30.7824 19.7553 30.4047 18.9167 30.3416L18.6667 30.3333H15.3333C14.4924 30.333 13.6824 30.6507 13.0657 31.2225C12.4491 31.7943 12.0714 32.5781 12.0083 33.4166L12 33.6666V34.5C12 34.785 12.0283 35.065 12.0833 35.3333H12C10.6739 35.3333 9.40214 34.8065 8.46446 33.8688C7.52678 32.9312 7 31.6594 7 30.3333V28.6666L2.17666 26.255C1.62255 25.9781 1.15656 25.5523 0.83096 25.0253C0.505361 24.4984 0.33304 23.8911 0.333329 23.2716V17C0.333329 7.79498 7.795 0.333313 17 0.333313ZM17 3.66665C13.536 3.66669 10.2079 5.01487 7.72049 7.42576C5.23307 9.83665 3.78158 13.121 3.67333 16.5833L3.66666 17V23.2733L10.3333 26.6066V29.2583L10.4583 29.1183C11.6388 27.8511 13.2669 27.0942 14.9967 27.0083L15.3333 27L18.7883 27.0016L19.16 27.0183C20.825 27.1416 22.31 27.8683 23.41 28.98L23.6667 29.2583V26.6066L30.3333 23.2733V17C30.3333 13.4638 28.9286 10.0724 26.4281 7.57189C23.9276 5.0714 20.5362 3.66665 17 3.66665V3.66665ZM10.3333 15.3333C11.2174 15.3333 12.0652 15.6845 12.6904 16.3096C13.3155 16.9347 13.6667 17.7826 13.6667 18.6666C13.6667 19.5507 13.3155 20.3985 12.6904 21.0237C12.0652 21.6488 11.2174 22 10.3333 22C9.44927 22 8.60143 21.6488 7.97631 21.0237C7.35118 20.3985 7 19.5507 7 18.6666C7 17.7826 7.35118 16.9347 7.97631 16.3096C8.60143 15.6845 9.44927 15.3333 10.3333 15.3333V15.3333ZM23.6667 15.3333C24.5507 15.3333 25.3986 15.6845 26.0237 16.3096C26.6488 16.9347 27 17.7826 27 18.6666C27 19.5507 26.6488 20.3985 26.0237 21.0237C25.3986 21.6488 24.5507 22 23.6667 22C22.7826 22 21.9348 21.6488 21.3096 21.0237C20.6845 20.3985 20.3333 19.5507 20.3333 18.6666C20.3333 17.7826 20.6845 16.9347 21.3096 16.3096C21.9348 15.6845 22.7826 15.3333 23.6667 15.3333V15.3333Z" />
      </svg>
    );
  };
  const RightIcon = () => {
    return (
      <svg
        className="fill-current"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M10.0001 0.00012207C4.48608 0.00012207 7.62939e-05 4.48612 7.62939e-05 10.0001C7.62939e-05 15.5141 4.48608 20.0001 10.0001 20.0001C15.5141 20.0001 20.0001 15.5141 20.0001 10.0001C20.0001 4.48612 15.5141 0.00012207 10.0001 0.00012207ZM8.00108 14.4131L4.28808 10.7081L5.70008 9.29212L7.99908 11.5871L13.2931 6.29312L14.7071 7.70712L8.00108 14.4131Z" />
      </svg>
    );
  };
  
  