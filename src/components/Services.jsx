import React from "react";

const Services = () => {
  return (
    <>
    <div className="md:text-6xl sm:text-6xl text-4xl font-bold  text-center  mt-6 w-full py-16 px-4">Services</div>
    <div className="py-6 px-4 grid md:grid-cols-3  ">
    {/* first */}
      <div class="block p-6 text-center shadow-xl bg-gray-50 rounded-xl md:w-[400px]  ">
        <h5 class="text-3xl font-bold text-[#AB1212]">Basic</h5>

        <h6 class="mt-1 text-sm text-gray-900">Perfect for Students</h6>

        <div class="mt-4 text-gray-900">
          <h6>
            <span class="text-2xl">₹</span>
            <span class="inline text-5xl font-bold">1999</span>
            <span class="text-xs">/ month</span>
          </h6>

          {/* <p class="text-xs text-gray-700 mt-0.5">Billed Annually</p> */}
        </div>

        <ul class="mt-8 space-y-2.5 text-gray-900">
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="inline w-6 h-6 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
            Daily Calls In BankNifty
          </li>

          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="inline w-6 h-6 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
            2 to 4 Calls Per Day
          </li>

          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="inline w-6 h-6 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
            83% Accuracy
          </li>

          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="inline w-6 h-6 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
            Guidance About 50-50 Formula
          </li>

          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="inline w-6 h-6 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
            2 Targets & 10-15 Points Stop Loss
          </li>
        </ul>

        <a
          class="inline-block px-8 py-3 mt-8 text-sm font-medium text-white bg-[#AB1212] rounded transition hover:blur-50 hover:shadow-xl active:bg-[#AB1212] focus:outline-none focus:ring justify-center"
          href="/"
        >
          Buy
        </a>
      </div>

      {/* second */}

      <article class="block p-6 text-center shadow-xl bg-gray-50 rounded-xl md:w-[400px] ">
        <h5 class="text-3xl font-bold text-[#AB1212]">Standard</h5>

        <h6 class="mt-1 text-sm text-gray-900">Perfect for Working Professional</h6>

        <div class="mt-4 text-gray-900">
          <h6>
            <span class="text-2xl">₹</span>
            <span class="inline text-5xl font-bold">3999</span>
            <span class="text-xs">/ month</span>
          </h6>

          {/* <p class="text-xs text-gray-700 mt-0.5">Billed Annually</p> */}
        </div>

        <ul class="mt-8 space-y-2.5 text-gray-900">
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="inline w-6 h-6 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
            Minimum Capital Recommended 50k
          </li>

          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="inline w-6 h-6 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
            Risk  & Reward Ratio 2 : 1
          </li>

          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="inline w-6 h-6 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
            87% Accuracy
          </li>

          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="inline w-6 h-6 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
            10% Guaranteed Returns Per Month
          </li>
        </ul>

        <a
          class="inline-block px-8 py-3 mt-8 text-sm font-medium bg-[#AB1212] text-white rounded transition hover:blur-50 hover:shadow-xl active:bg-[#AB1212] focus:outline-none focus:ring"
          href="/"
        >
          Join Now
        </a>
      </article>
      
      {/* third */}

      <div class="block p-6 text-center shadow-xl bg-gray-50 rounded-xl md:w-[400px] ">
        <h5 class="text-3xl font-bold text-[#AB1212]">Basic Plan</h5>

        <h6 class="mt-1 text-sm text-gray-900">Perfect for Everyone</h6>

        <div class="mt-4 text-gray-900">
          <h6>
            <span class="text-2xl">₹</span>
            <span class="inline text-5xl font-bold">0</span>
            <span class="text-xs">/ month</span>
          </h6>

          {/* <p class="text-xs text-gray-700 mt-0.5">Billed Annually</p> */}
        </div>

        <ul class="mt-8 space-y-2.5 text-gray-900">
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="inline w-6 h-6 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
            Minimum Capital Recommended 1 Lac
          </li>

          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="inline w-6 h-6 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
            Risk & Reward Ratio 2 : 1
          </li>

          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="inline w-6 h-6 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
            87% Accuracy
          </li>

          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="inline w-6 h-6 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
            10% Guaranteed Returns Per Month
          </li>

          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="inline w-6 h-6 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
            40% Profit Sharing Per Week
          </li>
        </ul>

        <a
          class="inline-block px-8 py-3 mt-8 text-sm font-medium text-white bg-[#AB1212] rounded transition hover:blur-50 hover:shadow-xl active:bg-[#AB1212] focus:outline-none focus:ring"
          href="/"
        >
          Buy Now
        </a>
      </div>
    </div>
    </>
  );
};

export default Services;
