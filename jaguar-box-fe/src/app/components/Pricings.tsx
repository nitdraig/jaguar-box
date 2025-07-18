import React from "react";

const Pricings = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  p-10 text-gray-700 bg-[#fafdff] md:p-20">
      <h2 className="text-2xl font-medium">Jedi Order Membership</h2>

      <div className="flex flex-wrap items-center justify-center w-full max-w-4xl mt-8">
        <div className="flex flex-col flex-grow mt-8 overflow-hidden bg-white rounded-lg shadow-lg">
          <div className="flex flex-col items-center p-10 bg-[#C4A2F6]/60">
            <span className="font-semibold">Padawan</span>
            <div className="flex items-center">
              <span className="text-3xl">$</span>
              <span className="text-5xl font-bold">20</span>
              <span className="text-2xl text-gray-500">/mo</span>
            </div>
          </div>
          <div className="p-10">
            <ul>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 text-green-600 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span className="ml-2">Lightsaber</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 text-green-600 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span className="ml-2">Robe</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 text-green-600 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span className="ml-2">Insurance</span>
              </li>
            </ul>
          </div>
          <div className="flex px-10 pb-10 justfy-center">
            <button className="flex items-center justify-center w-full h-12 px-6 text-sm uppercase bg-gray-200 hover:bg-[#5512BA]/20 rounded-lg">
              Join now
            </button>
          </div>
        </div>

        <div className="z-10 flex flex-col flex-grow mt-8 overflow-hidden transform bg-white rounded-lg shadow-lg md:scale-110">
          <div className="flex flex-col items-center p-10 bg-[#C4A2F6]">
            <span className="font-semibold">Jedi Knight</span>
            <div className="flex items-center">
              <span className="text-3xl">$</span>
              <span className="text-6xl font-bold">50</span>
              <span className="text-2xl text-gray-500">/mo</span>
            </div>
          </div>
          <div className="p-10">
            <ul>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 text-green-600 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span className="ml-2 italic">Padawan +</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 text-green-600 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span className="ml-2">Solo missions</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 text-green-600 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span className="ml-2">Utility belt</span>
              </li>
            </ul>
          </div>
          <div className="flex px-10 pb-10 justfy-center">
            <button className="flex items-center justify-center w-full h-12 px-6 text-sm uppercase hover:bg-[#5512BA]/20 bg-gray-200 rounded-lg">
              Join now
            </button>
          </div>
        </div>

        <div className="flex flex-col flex-grow overflow-hidden bg-white rounded-lg shadow-lg mt-19">
          <div className="flex flex-col items-center p-10 bg-[#C4A2F6]/40">
            <span className="font-semibold">Jedi Master</span>
            <div className="flex items-center">
              <span className="text-3xl">$</span>
              <span className="text-5xl font-bold">99</span>
              <span className="text-2xl text-gray-500">/mo</span>
            </div>
          </div>
          <div className="p-10">
            <ul>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 text-green-600 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span className="ml-2 italic">Jedi Knight +</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 text-green-600 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span className="ml-2">Sit on council</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 text-green-600 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span className="ml-2">Stock options</span>
              </li>
            </ul>
          </div>
          <div className="flex px-10 pb-10 justfy-center">
            <button className="flex items-center justify-center w-full h-12 px-6 text-sm uppercase bg-gray-200 hover:bg-[#5512BA]/20 rounded-lg">
              Join now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricings;
