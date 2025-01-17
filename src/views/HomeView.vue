<template>
  <div
    class="bg-view bg-cover flex flex-col md:flex-row gap-8 text-white p-6 rounded-3xl w-full md:w-auto items-center"
  >
    <img src="@/assets/avatar.png" class="md:w-72 w-48 rounded-full" alt="avatar" />
    <div
      class="flex flex-col bg-black md:px-12 md:py-6 p-6 bg-opacity-50 rounded-3xl justify-center gap-8 w-full"
    >
      <div>
        <div class="text-4xl">Yurii Myronov</div>
        <div class="text-lg text-gray-400">
          Web Applications <span class="font-black text-xl mx-1">&#183;</span> Mobile Applications
        </div>
      </div>
      <div class="flex gap-2 justify-center md:justify-start">
        <a
          href="https://www.linkedin.com/in/yurii-myronov-694b99249/"
          class="rounded-full bg-gray-800 p-4 flex items-center justify-center hover:bg-gray-700"
          target="_blank"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
            <rect width="24" height="24" fill="none" />
            <circle cx="4" cy="4" r="2" fill="currentColor" fill-opacity="0">
              <animate fill="freeze" attributeName="fill-opacity" dur="0.15s" values="0;1" />
            </circle>
            <g
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="4"
            >
              <path stroke-dasharray="12" stroke-dashoffset="12" d="M4 10v10">
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  begin="0.15s"
                  dur="0.2s"
                  values="12;0"
                />
              </path>
              <path stroke-dasharray="12" stroke-dashoffset="12" d="M10 10v10">
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  begin="0.45s"
                  dur="0.2s"
                  values="12;0"
                />
              </path>
              <path
                stroke-dasharray="24"
                stroke-dashoffset="24"
                d="M10 15c0 -2.76 2.24 -5 5 -5c2.76 0 5 2.24 5 5v5"
              >
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  begin="0.65s"
                  dur="0.2s"
                  values="24;0"
                />
              </path>
            </g>
          </svg>
        </a>
        <a
          href="mailto:yuramiron16@gmail.com"
          class="rounded-full bg-gray-800 p-4 flex items-center justify-center hover:bg-gray-700"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
            <rect width="24" height="24" fill="none" />
            <path fill="currentColor" fill-opacity="0" d="M12 11l-8 -5h16l-8 5Z">
              <animate
                fill="freeze"
                attributeName="fill-opacity"
                begin="0.8s"
                dur="0.15s"
                values="0;0.3"
              />
            </path>
            <g
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            >
              <path
                stroke-dasharray="64"
                stroke-dashoffset="64"
                d="M4 5h16c0.55 0 1 0.45 1 1v12c0 0.55 -0.45 1 -1 1h-16c-0.55 0 -1 -0.45 -1 -1v-12c0 -0.55 0.45 -1 1 -1Z"
              >
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  dur="0.6s"
                  values="64;0"
                />
              </path>
              <path stroke-dasharray="24" stroke-dashoffset="24" d="M3 6.5l9 5.5l9 -5.5">
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  begin="0.6s"
                  dur="0.2s"
                  values="24;0"
                />
              </path>
            </g>
          </svg>
        </a>
        <a
          href="https://github.com/Meizuno"
          class="rounded-full bg-gray-800 p-4 flex items-center justify-center hover:bg-gray-700"
          target="_blank"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
            <rect width="24" height="24" fill="none" />
            <mask id="lineMdGithubLoop0" width="24" height="24" x="0" y="0">
              <g fill="#fff">
                <ellipse cx="9.5" cy="9" rx="1.5" ry="1" />
                <ellipse cx="14.5" cy="9" rx="1.5" ry="1" />
              </g>
            </mask>
            <g
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            >
              <path
                stroke-dasharray="32"
                stroke-dashoffset="32"
                d="M12 4c1.67 0 2.61 0.4 3 0.5c0.53 -0.43 1.94 -1.5 3.5 -1.5c0.34 1 0.29 2.22 0 3c0.75 1 1 2 1 3.5c0 2.19 -0.48 3.58 -1.5 4.5c-1.02 0.92 -2.11 1.37 -3.5 1.5c0.65 0.54 0.5 1.87 0.5 2.5c0 0.73 0 3 0 3M12 4c-1.67 0 -2.61 0.4 -3 0.5c-0.53 -0.43 -1.94 -1.5 -3.5 -1.5c-0.34 1 -0.29 2.22 0 3c-0.75 1 -1 2 -1 3.5c0 2.19 0.48 3.58 1.5 4.5c1.02 0.92 2.11 1.37 3.5 1.5c-0.65 0.54 -0.5 1.87 -0.5 2.5c0 0.73 0 3 0 3"
              >
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  dur="0.7s"
                  values="32;0"
                />
              </path>
              <path
                stroke-dasharray="10"
                stroke-dashoffset="10"
                d="M9 19c-1.406 0-2.844-.563-3.688-1.188C4.47 17.188 4.22 16.157 3 15.5"
              >
                <animate
                  attributeName="d"
                  dur="3s"
                  repeatCount="indefinite"
                  values="M9 19c-1.406 0-2.844-.563-3.688-1.188C4.47 17.188 4.22 16.157 3 15.5;M9 19c-1.406 0-3-.5-4-.5-.532 0-1 0-2-.5;M9 19c-1.406 0-2.844-.563-3.688-1.188C4.47 17.188 4.22 16.157 3 15.5"
                />
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  begin="0.8s"
                  dur="0.2s"
                  values="10;0"
                />
              </path>
            </g>
            <rect
              width="8"
              height="4"
              x="8"
              y="11"
              fill="currentColor"
              mask="url(#lineMdGithubLoop0)"
            >
              <animate
                attributeName="y"
                dur="10s"
                keyTimes="0;0.45;0.46;0.54;0.55;1"
                repeatCount="indefinite"
                values="11;11;7;7;11;11"
              />
            </rect>
          </svg>
        </a>
        <a
          href="https://apps.apple.com/cz/developer/yurii-myronov/id1788739582"
          class="rounded-full bg-gray-800 p-4 flex items-center justify-center hover:bg-gray-700"
          target="_blank"
        >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M17.05 20.28c-.98.95-2.05.8-3.08.35c-1.09-.46-2.09-.48-3.24 0c-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8c1.18-.24 2.31-.93 3.57-.84c1.51.12 2.65.72 3.4 1.8c-3.12 1.87-2.38 5.98.48 7.13c-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25c.29 2.58-2.34 4.5-3.74 4.25"
          /></svg>
        </a>
      </div>
    </div>
  </div>
</template>
