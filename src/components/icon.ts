import { htm } from "@zeit/integration-utils";

import Image from "./image";

export const ICON_NAMES = {
  add: "add",
  open: "open",
  "arrows-ns": "arrows-ns",
  "arrow-up": "arrow-up",
  "arrow-down": "arrow-down",
  "arrow-right": "arrow-right",
  "arrow-left": "arrow-left",
  "camera-outline": "camera-outline",
  camera: "camera",
  "checkbox-checked": "checkbox-checked",
  "checkbox-unchecked": "checkbox-unchecked",
  checkmark: "checkmark",
  cloud: "cloud",
  settings: "settings",
  copy: "copy",
  window: "window",
  cross: "cross",
  folder: "folder",
  expand: "expand",
  collapse: "collapse",
  divider: "divider",
  dropdown: "dropdown",
  mail: "mail",
  "mail-open": "mail-open",
  smiley: "smiley",
  external: "external",
  file: "file",
  maximize: "maximize",
  minimize: "minimize",
  infinity: "infinity",
  info: "info",
  lambda: "lambda",
  "add-folder": "add-folder",
  plus: "plus",
  pause: "pause",
  link: "link",
  play: "play",
  question: "question",
  refresh: "refresh",
  reset: "reset",
  search: "search",
  speaker: "speaker",
  upload: "upload",
  users: "users",
  website: "website",
  "checkmark-circle": "checkmark-circle",
};

type IconName = keyof typeof ICON_NAMES;

const getIconShape = (
  name: IconName,
  fill: string,
  iconWidth: string | number,
  iconHeight: string | number
) => {
  const width = iconWidth + "px";
  const height = iconHeight + "px";

  switch (name) {
    case "add":
      return `
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 21" width="${width}" height="${height}">
            <circle cx="10" cy="10" r="9.75" stroke="#EAEAEA" />
            <line x1="7" y1="9.98" x2="13" y2="9.98" stroke="#999" />
            <line x1="9.98" y1="13" x2="9.98" y2="7" stroke="#999" />
          </svg>
        `;
    case "open":
      return `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 19 19" width="${width}" height="${height}">
          <circle cx="9.5" cy="9.5" r="9" stroke="#EAEAEA" stroke-width="1.2" />
          <path stroke="#999" stroke-width="1.2" d="M8 6.5l2.8 3-2.8 3" />
        </svg>
        `;
    case "arrows-ns":
      return `
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 31" width="${width}" height="${height}">
            <path fill-rule="evenodd" stroke="${fill}" stroke-width="3" d="M1 10l8-8 8 8M17 21l-8 8-8-8" />
          </svg>
        `;
    case "arrow-up":
      return `
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 22 12" width="${width}" height="${height}">
            <path stroke="${fill}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" d="M21 11L11 1L1 11" />
          </svg>
        `;
    case "arrow-down":
      return `
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 22 12" width="${width}" height="${height}">
            <path stroke="${fill}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" d="M1 1L11 11L21 1" />
          </svg>
        `;
    case "arrow-right":
      return `
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 22" width="${width}" height="${height}">
            <path stroke="${fill}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" d="M1 1L11 11L1 21" />
          </svg>
        `;
    case "arrow-left":
      return `
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 22" width="${width}" height="${height}">
            <path stroke="${fill}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" d="M11 1L1 11L11 21" />
          </svg>
        `;
    case "camera-outline":
      return `
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 20" width="${width}" height="${height}">
            <path fill="#000" fill-rule="nonzero" stroke="#ddd" d="M8 1L6.17 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-3.17L14 1H8zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" />
          </svg>
        `;
    case "camera":
      return `
          <svg xmlns="http://www.w3.org/2000/svg" fill="${fill}" viewBox="2 2 22 18" width="${width}" height="${height}">
            <path d="M9 2L7.2 4H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-3.2L15 2H9zm3 15a5 5 0 1 1 0-10 5 5 0 0 1 0 10z"/>
          </svg>
        `;
    case "checkbox-checked":
      return `
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 16" width="${width}" height="${height}">
            <rect x="0" y="0" width="16" height="16" rx="3" fill="#000" />
            <path d="M16 3L7.72491 11L5 8" stroke="#fff" stroke-width="1.5" />
          </svg>
        `;
    case "checkbox-unchecked":
      return `
          <svg xmlns="http://www.w3.org/2000/svg" fill="#000" viewBox="0 0 17 16" width="${width}" height="${height}">
            <rect x="0" y="0" width="16" height="16" rx="3" fill="#000" />
          </svg>
        `;
    case "checkmark":
      return `
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 7" width="${width}" height="${height}">
            <path stroke="#000" d="M.5 2.5l2.828 2.828M8.657 0L3 5.657" />
          </svg>
        `;
    case "cloud":
      return `
          <svg xmlns="http://www.w3.org/2000/svg" fill="${fill}" viewBox="0 0 10 8" width="${width}" height="${height}">
            <path d="M7.1875,7.48406218 L7.1875,7.5 L2.8125,7.5 C1.25921875,7.5 0,6.24106753 0,4.6874414 C0,3.29444362 1.01546875,2.14551345 2.345,1.9220713 C2.7190625,0.807985575 3.75984375,0 5,0 C6.12265625,0 7.08375,0.6622013 7.53484375,1.61331485 C8.9334375,1.85347613 10,3.06412633 10,4.53118815 C9.99984375,6.1171587 8.7528125,7.40124795 7.1875,7.48406218 Z M7.0875,2.19285818 C6.81890625,1.28846435 5.99125,0.624700525 4.99984375,0.624700525 C3.89765625,0.624700525 2.99484375,1.4423738 2.8434375,2.50286465 C2.8328125,2.5027084 2.82296875,2.49989583 2.81234375,2.49989583 C1.60421875,2.49989583 0.62484375,3.47913497 0.62484375,4.68728515 C0.62484375,5.89543532 1.60421875,6.87498698 2.81234375,6.87498698 L7.18734375,6.87498698 L7.18734375,6.85904915 C8.40734375,6.77748495 9.37484375,5.7721515 9.37484375,4.5310319 C9.37484375,3.25616157 8.35515625,2.22348382 7.0875,2.19285818 Z" />
          </svg>
        `;
    case "settings":
      return `
          <svg xmlns="http://www.w3.org/2000/svg" fill="${fill}" viewBox="0 0 16 16" width="${width}" height="${height}">
            <path d="M15 9.5l-1.28.2c-.12.4-.27.78-.46 1.13l.75 1.06c.4.35.4 1 0 1.4l-.7.7c-.4.4-1 .4-1.4 0l-1.04-.77c-.35.2-.72.34-1.12.46l-.2 1.3c0 .53-.45 1-1 1h-1c-.55 0-1-.47-1-1l-.2-1.3c-.4-.1-.78-.27-1.13-.46l-1.06.75c-.38.4-1 .4-1.4 0l-.7-.7c-.4-.4-.4-1.03 0-1.4l.74-1.08c-.2-.35-.34-.72-.46-1.12l-1.26-.2c-.55 0-1-.43-1-1v-1c0-.53.45-1 1-1l1.28-.2c.13-.4.28-.76.47-1.12L2.08 4.1c-.4-.38-.4-1 0-1.4l.7-.7c.4-.4 1.02-.4 1.4 0l1.07.74c.35-.2.7-.34 1.1-.46l.2-1.26c0-.55.47-1 1-1h1c.57 0 1 .45 1 1l.2 1.28c.4.13.8.28 1.15.47l1.06-.76c.4-.4 1-.4 1.4 0l.7.7c.4.4.4 1.03 0 1.4l-.73 1.07c.2.36.34.73.46 1.13l1.28.2c.56 0 1 .45 1 1v1c0 .55-.44 1-1 1L15 9.5zm-.42-1.98l-1.57-.26a5.14 5.14 0 0 0-.9-2.2l.92-1.28c.2-.2.2-.52 0-.7-.2-.2-.5-.2-.7 0l-1.3.92a4.99 4.99 0 0 0-2.2-.9l-.25-1.58c0-.28-.22-.5-.5-.5s-.5.22-.5.5L7.32 3.1c-.8.12-1.55.44-2.18.9l-1.3-.93c-.2-.2-.5-.2-.7 0-.2.2-.2.5 0 .7l.92 1.3c-.47.64-.8 1.38-.9 2.2l-1.58.25c-.28 0-.5.22-.5.5s.22.5.5.5l1.57.26c.12.8.44 1.55.9 2.18l-.92 1.3c-.2.2-.2.5 0 .7.2.2.5.2.7 0l1.3-.92c.64.46 1.38.78 2.2.9l.25 1.58c0 .28.22.5.5.5s.5-.22.5-.5l.26-1.58c.8-.12 1.55-.44 2.18-.9l1.3.93c.2.2.5.2.7 0 .2-.2.2-.5 0-.7l-.92-1.3c.47-.64.8-1.38.9-2.2l1.58-.25c.28 0 .5-.22.5-.5s-.22-.5-.5-.5zM8 10.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5zm0-4c-.83 0-1.5.67-1.5 1.5S7.17 9.5 8 9.5 9.5 8.83 9.5 8 8.83 6.5 8 6.5z" />
          </svg>
        `;
    case "copy":
      return `
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 13 15" width="${width}" height="${height}">
            <rect stroke="${fill}" x="0.5" y="0.5" width="9" height="11" rx="1.5" />
            <rect stroke="${fill}" x="3.5" y="3.5" width="9" height="11" rx="1.5" />
          </svg>
        `;
    case "window":
      return `
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 15" width="${width}" height="${height}">
            <rect stroke="${fill}" stroke-width="1.5" x="0.5" y="0.5" width="19" height="14" rx="2" />
            <path stroke="${fill}" stroke-width="1.5" d="M1.5,4.5 L19.5,4.5" stroke-linecap="square" />
          </svg>
        `;
    case "cross":
      return `
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 7 7" width="${width}" height="${height}">
            <path stroke="${fill}" stroke-width="0.8" d="M6.093.593L.906 5.719m0-5.126l5.188 5.126" />
          </svg>
        `;
    case "folder":
      return `
          <svg xmlns="http://www.w3.org/2000/svg" fill="${fill}" viewBox="0 0 20 16" width="${width}" height="${height}">
            <path d="M18.7839 3.86928C18.5957 3.68105 18.3866 3.57647 18.2192 3.51373V2.42614C18.2192 1.77778 17.6964 1.2549 17.0689 1.2549H8.99571L7.90812 0.25098C7.76172 0.104575 7.53165 0 7.30159 0H2.09374C1.44538 0 0.943417 0.522876 0.943417 1.17124V3.4719C0.734267 3.55556 0.546032 3.68105 0.378712 3.82745C0.106816 4.12026 -0.0186741 4.47582 0.0022409 4.83137L0.399627 14.6614C0.420542 15.3935 1.04799 16 1.80093 16H17.3826C18.1356 16 18.7421 15.4144 18.7839 14.6614L19.1813 4.83137C19.2022 4.51765 19.0558 4.14118 18.7839 3.86928ZM1.84276 3.40915V1.19216C1.84276 1.04575 1.94734 0.920261 2.09374 0.920261H7.25976L8.49374 2.00784C8.5774 2.04967 8.66107 2.11242 8.78656 2.11242H17.0689C17.1944 2.11242 17.3199 2.23791 17.3199 2.38431V3.40915H1.84276ZM17.3826 15.1216H1.78002C1.50812 15.1216 1.29897 14.9124 1.29897 14.6614L0.901587 4.83137C0.901587 4.68497 0.943417 4.58039 1.02708 4.47582C1.13165 4.37124 1.25714 4.32941 1.40355 4.32941H17.78C17.9055 4.32941 18.0519 4.39216 18.1565 4.47582C18.2402 4.55948 18.282 4.68497 18.282 4.81046L17.8637 14.6405C17.8428 14.9124 17.6336 15.1216 17.3826 15.1216Z" />
          </svg>
        `;
    case "expand":
      return `
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 11 11" width="${width}" height="${height}">
            <rect stroke="${fill}" stroke-width="0.8" x="1" y="1" width="9" height="9" rx="1.5" />
            <path stroke="${fill}" stroke-width="0.8" d="M3.5 5.5h4m-2-2v4" />
          </svg>
        `;
    case "collapse":
      return `
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 11 11" width="${width}" height="${height}">
            <rect stroke="${fill}" stroke-width="0.8" x="1" y="1" width="9" height="9" rx="1.5" />
            <path stroke="${fill}" stroke-width="0.8" d="M3.5 5.5h4" />
          </svg>
        `;
    case "divider":
      return `
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 25" width="${width}" height="${height}">
            <path stroke="${fill}" d="M15 0.5L1.5 24.5" />
          </svg>
        `;
    case "dropdown":
      return `
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 11 7" width="${width}" height="${height}">
            <path stroke="${fill}" d="M1.5 1.5L5.5 5.59119M9.74261 1.5L5.82163 5.58057" />
          </svg>
        `;
    case "mail":
      return `
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 15 11" width="${width}" height="${height}">
            <rect stroke="${fill}" x="0.5" y="0.5" width="14" height="10" rx="2" />
            <path stroke="${fill}" d="M1.175 1.135L7.5 5.5M14.04.912L7.5 5.5" />
          </svg>
        `;
    case "mail-open":
      return `
          <svg xmlns="http://www.w3.org/2000/svg" fill="${fill}" viewBox="0 0 78 80" width="${width}" height="${height}">
            <path d="M76.386,30.7493948 C76.288,30.5713948 76.181,30.4153948 76.054,30.2873948 C76.011,30.2423948 75.939,30.1763948 75.853,30.0933948 C75.415,29.5993948 74.931,29.1513948 74.38,28.7833948 C67.86,23.0633948 44.984,3.62239481 42.691,1.29339481 C40.976,-0.444605185 36.888,-0.417605185 35.173,1.29339481 C33.382,3.07839481 7.735,24.8153948 2.697,29.4533948 C2.507,29.6223948 2.318,29.7863948 2.145,29.9733948 C2.079,30.0393948 2,30.1123948 1.957,30.1613948 C1.877,30.2453948 1.804,30.3613948 1.733,30.4803948 C0.665,31.8403948 0,33.5383948 0,35.4183948 L0,72.0403948 C0,76.4363948 3.513,80.0003948 7.843,80.0003948 L70.06,80.0003948 C74.392,80.0003948 77.898,76.4383948 77.898,72.0403948 L77.898,35.4183948 C77.897,33.6653948 77.327,32.0643948 76.386,30.7493948 L76.386,30.7493948 Z M41.552,61.3573948 C40.364,62.5453948 37.517,62.5683948 36.323,61.3573948 C35.777,60.8043948 33.481,58.4723948 30.512,55.4533948 L47.381,55.4533948 C44.307,58.5693948 41.968,60.9423948 41.552,61.3573948 L41.552,61.3573948 Z M65.706,36.7893948 C64.877,37.6663948 57.841,44.8303948 51.56,51.2083948 C51.554,51.2083948 51.55,51.2033948 51.542,51.2033948 L26.336,51.2033948 C19.961,44.7243948 12.821,37.4603948 12.222,36.8433948 C10.91,35.4963948 12.579,32.9003948 14.827,32.9003948 L63.116,32.9003948 C65.593,32.8993948 66.79,35.6413948 65.706,36.7893948 L65.706,36.7893948 Z M51.543,40.5893948 L25.793,40.5893948 C24.638,40.5893948 23.7,41.5413948 23.7,42.7143948 C23.7,43.8863948 24.638,44.8353948 25.793,44.8353948 L51.543,44.8353948 C52.697,44.8353948 53.634,43.8863948 53.634,42.7143948 C53.634,41.5423948 52.697,40.5893948 51.543,40.5893948 L51.543,40.5893948 Z" />
          </svg>
        `;
    case "smiley":
      return `
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" width="${width}" height="${height}">
            <circle stroke="${fill}" cx="7" cy="7" r="6.5" />
            <path fill="${fill}" d="M3.3 8.1c0-.4.4-.3.7-.4h1l.3-.1h4.3l.7.2c.2 0 .4 0 .5.3v.4c0 1.2-1 2.3-2.4 2.7h-.6l-.2.1a2 2 0 0 1-1 0h-.3c-1.6-.3-2.7-1.3-3-2.6V8m6.4-3.7c.4.1.7.3.8.8v.5c-.1.5-.6.8-1 .8-.6 0-1-.5-1.1-1 0-.5.3-1 .8-1.1h.5m-4.2.9c.1.4-.2 1-.6 1.1-.6.2-1.1 0-1.4-.5V5c0-.5.3-.7.7-.8h.5c.4 0 .7.3.8.8v.1" />
          </svg>
        `;
    case "external":
      return `
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 13 13" width="${width}" height="${height}">
            <path stroke="${fill}" stroke-width="0.8" d="M6.2 6.7l5-5.3M7.9.9h4m0 0v4m-2 2.5v2.5a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-5c0-1.1.9-2 2-2h2.5" />
          </svg>
        `;
    case "file":
      return `
          <svg xmlns="http://www.w3.org/2000/svg" fill="${fill}" viewBox="0 0 15 19" width="${width}" height="${height}">
            <path d="M10 8C8.34 8 7 6.66 7 5V1H3C1.9 1 1 1.9 1 3V16C1 17.1 1.9 18 3 18H12C13.1 18 14 17.1 14 16V8H10ZM8 5C8 6.1 8.9 7 10 7H13.59L8 1.41V5ZM3 0H8L15 7V16C15 17.66 13.66 19 12 19H3C1.34 19 0 17.66 0 16V3C0 1.34 1.34 0 3 0Z" />
          </svg>
        `;
    case "maximize":
      return `
          <svg xmlns="http://www.w3.org/2000/svg" fill="${fill}" viewBox="0 0 15 15" width="${width}" height="${height}">
            <path d="M0 0V0.548781V4.20732H1.09756V1.86928L4.5503 5.32203L5.32774 4.5503L1.875 1.09756H4.20732V0H0.548781H0ZM10.7927 0V1.09756H13.125L9.67226 4.5503L10.4497 5.32203L13.9024 1.86928V4.20732H15V0.548781V0H14.4512H10.7927ZM4.5503 9.67226L1.09756 13.125V10.7927H0V14.4512V15H0.548781H4.20732V13.9024H1.86928L5.32774 10.444L4.5503 9.67226ZM10.4497 9.67226L9.67226 10.444L13.1307 13.9024H10.7927V15H14.4512H15V14.4512V10.7927H13.9024V13.125L10.4497 9.67226Z" />
          </svg>
        `;
    case "minimize":
      return `
          <svg xmlns="http://www.w3.org/2000/svg" fill="${fill}" viewBox="0 0 19 19" width="${width}" height="${height}">
            <path d="M6.74848,6.74123 L6.74848,6.046108 L6.74848,1.41196 L5.35824,1.41196 L5.35824,4.37347 L0.98476,-8.8817842e-16 L8.8817842e-16,0.97751 L4.37348,5.35099 L1.41921,5.35099 L1.41921,6.74123 L6.053358,6.74123 L6.74848,6.74123 Z M17.5808,6.74123 L17.5808,5.35099 L14.6265,5.35099 L19,0.97751 L18.0152,0 L13.6417,4.37347 L13.6417,1.41196 L12.2515,1.41196 L12.2515,6.046108 L12.2515,6.74123 L12.9466,6.74123 L17.5808,6.74123 Z M0.98476,19 L5.35824,14.6265 L5.35824,17.5808 L6.74848,17.5808 L6.74848,12.9466 L6.74848,12.2515 L6.053358,12.2515 L1.41921,12.2515 L1.41921,13.6417 L4.38072,13.6417 L0,18.0225 L0.98476,19 Z M18.0152,19 L19,18.0225 L14.6193,13.6417 L17.5808,13.6417 L17.5808,12.2515 L12.9466,12.2515 L12.2515,12.2515 L12.2515,12.9466 L12.2515,17.5808 L13.6417,17.5808 L13.6417,14.6265 L18.0152,19 Z" />
          </svg>
        `;
    case "infinity":
      return `
          <svg xmlns="http://www.w3.org/2000/svg" fill="${fill}" viewBox="0 0 20 10" width="${width}" height="${height}">
            <path d="M15.08 1c-1.73 0-3.02 1.21-4.06 2.18l-.11.12a.5.5 0 0 0-.02.7c.19.2.5.2.7.02l.12-.11c1-.94 2.04-1.92 3.37-1.92A2.94 2.94 0 0 1 18 5c0 1.88-1.49 3-2.92 3-2.04 0-4.46-3.05-4.75-3.38C10.08 4.33 7.51 1 4.93 1A3.92 3.92 0 0 0 1 5c0 2.5 2 4 3.92 4 1.73 0 3.02-1.21 4.06-2.18l.09-.09a.5.5 0 0 0 .02-.7.5.5 0 0 0-.71-.02l-.09.08c-1 .94-2.04 1.92-3.37 1.92A2.94 2.94 0 0 1 2 5C2 3.12 3.5 2 4.92 2 7 2 9.31 4.96 9.57 5.25 9.85 5.6 12.52 9 15.07 9 17 9 19 7.5 19 5s-2-4-3.92-4z"/>
          </svg>
        `;
    case "info":
      return `
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" width="${width}" height="${height}">
            <circle fill="#eaeaea" cx="6" cy="6" r="6"/>
            <path d="M5.64 9h.68V4.79h-.68V9zm.34-5.07c.13 0 .24-.04.33-.14.1-.09.14-.2.14-.33a.45.45 0 0 0-.14-.33.45.45 0 0 0-.33-.13.45.45 0 0 0-.33.13c-.1.1-.14.2-.14.33s.05.24.14.33c.1.1.2.14.33.14z"/>
          </svg>
        `;
    case "lambda":
      return `
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 15 19" width="${width}" height="${height}">
            <path fill="${fill}" d="M3.5 14.4h1.8l2-4.6h.1l1.3 3.3c.4 1 .9 1.4 2 1.4l.8-.1v-1.2h-.3c-.6 0-.8-.2-1-.7L8 7c-.8-2-1.5-2.6-2.9-2.6a3 3 0 0 0-.7 0v1.3h.4c.8 0 1.1.2 1.6 1.4l.2.6-3.1 6.6z"/>
            <rect stroke="${fill}" width="14" height="18" x=".5" y=".5" rx="1.5"/>
          </svg>
        `;
    case "add-folder":
      return `
          <svg xmlns="http://www.w3.org/2000/svg" fill="${fill}" viewBox="0 0 30 25" width="${width}" height="${height}">
          <path d="M28.7 6a2.4 2.4 0 0 0-.8-.6V3.7c0-1-.8-1.8-1.8-1.8H13.8L12 .4a1.4 1.4 0 0 0-1-.4H3.3c-1 0-1.8.8-1.8 1.8v3.5a3 3 0 0 0-.8.6A2 2 0 0 0 0 7.4l.6 15c0 1.1 1 2 2.2 2h23.8a2.1 2.1 0 0 0 2.1-2l.6-15c0-.5-.2-1-.6-1.5zM2.8 5.1V1.8c0-.2.2-.4.4-.4h7.9L13 3.1l.4.1h12.7c.2 0 .4.2.4.4v1.6H2.8zm23.8 18H2.7a.7.7 0 0 1-.7-.8l-.6-15c0-.2 0-.4.2-.6a.8.8 0 0 1 .5-.2h25l.7.2.2.6-.7 15c0 .4-.3.7-.7.7zM15.5 15h3v-1h-3v-3h-1v3h-3v1h3v3h1v-3z"/>
          </svg>
        `;
    case "plus":
      return `
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 15 15" width="${width}" height="${height}">
            <path stroke="${fill}" d="M7.5 0v15M15 7.5H0"/>
          </svg>
        `;
    case "pause":
      return `
          <svg xmlns="http://www.w3.org/2000/svg" fill="${fill}" viewBox="0 0 8 12" width="${width}" height="${height}">
            <path d="M0 0h3v12H0zM5 0h3v12H5z" />
          </svg>
        `;
    case "link":
      return `
          <svg xmlns="http://www.w3.org/2000/svg" fill="${fill}" viewBox="0 0 11 11" width="${width}" height="${height}">
            <path d="M10.37 3.67L8.54 5.5c-.5.5-1.17.7-1.82.6l1.21-1.2 1.83-1.83a1.3 1.3 0 0 0-1.83-1.83L6.11 3.07 4.9 4.27c-.1-.64.1-1.32.6-1.81L7.33.63a2.15 2.15 0 1 1 3.04 3.04zM6.72 4.9L4.89 6.72l-.6-.61L6.1 4.28l.6.61zM1.24 7.93a1.3 1.3 0 0 0 1.83 1.83l1.82-1.83 1.21-1.2c.1.64-.1 1.32-.6 1.81l-1.83 1.83A2.15 2.15 0 1 1 .63 7.33L2.46 5.5c.5-.5 1.17-.7 1.82-.6L3.07 6.1 1.24 7.94z"/>
          </svg>
        `;
    case "play":
      return `
          <svg xmlns="http://www.w3.org/2000/svg" fill="${fill}" viewBox="0 0 23 30" width="${width}" height="${height}">
            <path d="M23 15L1 29V0l22 15z"/>
          </svg>
        `;
    case "question":
      return `
          <svg xmlns="http://www.w3.org/2000/svg" fill="${fill}" viewBox="0 0 17.8 18.7" width="${width}" height="${height}">
            <path d="M14.8 0H3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h3.9l5 4.7V14h2.9a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3zm2 11a2 2 0 0 1-2 2h-3.9v3.4l-3.3-3.1-.3-.3H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h11.8a2 2 0 0 1 2 2zM8.6 9.4a.8.8 0 1 0 .8.9.8.8 0 0 0-.8-.9zm.2-6.2a2.1 2.1 0 0 0-2.3 2.2h1.3a1 1 0 0 1 1-1 .8.8 0 0 1 .8.9c0 .5-.2.8-.8 1.2A1.7 1.7 0 0 0 8 8.3v.2h1.2v-.2c0-.5.2-.8.8-1.2a2 2 0 0 0 1-1.8 2 2 0 0 0-2.2-2.1z"/>
          </svg>
        `;
    case "refresh":
      return `
          <svg xmlns="http://www.w3.org/2000/svg" fill="${fill}" viewBox="0 0 18 16" width="${width}" height="${height}">
            <path d="M14.89 6.77A6.91 6.91 0 0 0 1.95 5.03a6.7 6.7 0 0 0 2.06 8.39 6.96 6.96 0 0 0 8.75-.42l.95.81a8.22 8.22 0 0 1-10.35.67A7.92 7.92 0 0 1 .77 4.59a8.17 8.17 0 0 1 15.39 2.18H18l-1.77 1.76-.7.7L13 6.77h1.89z"/>
          </svg>
        `;
    case "reset":
      return `
          <svg xmlns="http://www.w3.org/2000/svg" fill="${fill}" viewBox="0 0 16 18" width="${width}" height="${height}">
            <path d="M6.77 3.11a6.91 6.91 0 0 0-1.74 12.94 6.7 6.7 0 0 0 8.39-2.06A6.96 6.96 0 0 0 13 5.24l.81-.95a8.22 8.22 0 0 1 .67 10.35 7.92 7.92 0 0 1-9.89 2.59A8.17 8.17 0 0 1 6.77 1.84V0l1.76 1.77.7.7L6.77 5V3.11z"/>
          </svg>
        `;
    case "search":
      return `
          <svg xmlns="http://www.w3.org/2000/svg" fill="${fill}" viewBox="0 0 13 13" width="${width}" height="${height}">
            <path d="M8.871 8.164l3.25 3.25-.707.707-3.25-3.25a5 5 0 1 1 .707-.707zM5 9a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
          </svg>
        `;
    case "speaker":
      return `
          <svg xmlns="http://www.w3.org/2000/svg" fill="${fill}" viewBox="0 0 36 30" width="${width}" height="${height}">
            <path d="M28.1 24.1v-1.8L15 20.4v4.9l-.2.3-.2.2h-.1l-.2.2h-.5l-7.2-2a1 1 0 0 1-1-.8V19L2 18.6a2 2 0 0 1-1.9-1.9V7.4c0-1 .8-1.8 1.9-1.8l26-3.7V0h2v24.1h-1.9zM7.5 22.5l5.6 1.4v-3.7l-5.6-.8v3zM1.9 8.4v7.4c0 .5.4 1 1 1l19.6 3V4.3l-19.7 3a1 1 0 0 0-1 1zM28 4.6c0-.5-.4-.9-1-.9l-2.7.4V20l2.8.4c.5 0 1-.4 1-.9V4.6z"/>
          </svg>
        `;
    case "upload":
      return `
          <svg xmlns="http://www.w3.org/2000/svg" fill="${fill}" viewBox="0 0 20 20" width="${width}" height="${height}">
            <path d="M12.7 14.7h-.3v-1.2h.5c2.2-.2 4-2 4-4.4 0-2.3-1.8-4.2-4-4.4A4 4 0 0 0 9 1.2a4 4 0 0 0-4 4 4 4 0 0 0-3.9 4.2 4 4 0 0 0 4 4.1h1.7v1.2H5C2.3 14.7 0 12.3 0 9.4c0-2.6 1.7-4.7 4-5.2A5.1 5.1 0 0 1 9 0a5 5 0 0 1 4.8 3.7C16.2 4.2 18 6.4 18 9c0 3.1-2.4 5.6-5.3 5.6zm-7-3.7a.6.6 0 0 1 0-.8l3.4-3.5.1-.1.3-.1.4.1 3.4 3.6c.3.2.3.6 0 .8-.2.2-.5.2-.7 0L10 8.5v9c0 .2-.2.5-.5.5a.6.6 0 0 1-.6-.6v-9L6.6 11c-.3.2-.6.2-.8 0z"/>
          </svg>
        `;
    case "users":
      return `
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18" width="${width}" height="${height}">
            <path stroke="${fill}" stroke-width=".9" d="M8 11h-.3l-.7.5h-.1l-1.3.6c-.4.2-.8.5-1 .8-.6.8-.9 1.6-1 2.5 0 .8.1 1 .8 1.4h.2c.9.3 1.8.4 3 .5a33.4 33.4 0 0 0 8-.6h.2c.4-.2.6-.5.6-1 0-1.8-.7-3.1-2.3-3.8l-.6-.3-1.3-.6.2-.6c0-.3.2-.6.4-1 .4-.4.5-1 .5-1.5 0-.2-.1-.5-.3-.6v-.5-1c-.2-1.1-.9-2-2-2.2H9C7.8 4 7 5.2 7.1 6.3V7.3c-.2.3-.3.6-.2 1 0 .6.3 1.2.7 1.7 0 .3.2.6.4 1z"/>
            <path stroke="${fill}" stroke-width=".9" d="M15 8a5.2 5.2 0 0 0 .3-.5l.4-.8c.3-.6.5-1 .5-1.6 0-.4 0-.6-.3-.8V4 3c-.1-1.2-.8-2-2-2.3-.5-.1-1-.1-1.6 0-1 .1-2 1-2.1 2v1h.5c1.1.2 1.9 1 2 2.1l.1.5v.1l.2 1.3a2 2 0 0 1-.2 1.6l-.5.8-.3.6-.1.3.3.2.4.2h.1l1.8 1c.6.2 1 .6 1.2 1.2.1.4.4.5.7.4h.9l.2-.1 1-.2c.6 0 .9-.5.8-1v-.2-.1c-.1-1.6-.8-2.8-2.2-3.4L16 8.4l-.7-.3H15zM5 8l-.3.2-.7.3-1.5.7c-1.3.8-1.9 2-1.9 3.7 0 .4.3.7.7.8l.3.1h.7l.3.1 1 .1c.3 0 .5 0 .6-.4.2-.6.7-1 1.3-1.3l1.7-.8.5-.3.4-.2-.2-.3-.2-.4-.1-.3-.4-.7a2.4 2.4 0 0 1-.2-2c.1-.4.2-.6.1-.8V6l.1-.2v-.2A2 2 0 0 1 8.5 4l.6-.2h.4l.3-.1v-.3c.1-1-.5-2.1-1.4-2.5-.6-.3-1.2-.3-2-.2-1.2 0-2 .8-2.3 2v1.6h.1c-.4.2-.4.5-.4 1 0 .6.3 1.1.7 1.6V7L5 8z"/>
          </svg>
        `;
    case "website":
      return `
          <svg xmlns="http://www.w3.org/2000/svg" fill="${fill}" viewBox="0 0 24 24" width="${width}" height="${height}">
            <path fill-rule="evenodd" d="M0 12a12 12 0 1 0 20.5-8.5h-.1A12 12 0 0 0 0 12zM10.8.9a11.2 11.2 0 0 1 4.8.5c0 1.5.9 1.7 1.6 2 .3 0 .5.1.8.3l-.5.5c0 .5.3.8.7 1l.1.2.4.4c.5.7.4 1.7.4 2.7v2c0 .3.4 1.8 1.3 2.5.3.1.6.3 1 .3l.3-.1c.4-.1.7-.5 1-.8l.2-.3.3.2a11.2 11.2 0 1 1-21-5.8l.4 1.7c.3.7.5 1.5 1.5 1.8h.2l.9.4.4.3.1.1.8.6.6.3c.5.2.7.3.8.8v.9l.3 1.5c.2.5.5.8.8 1 .3.3.6.5.7 1 .2.4.1 1 .1 1.6 0 1.4-.1 3.1 1.7 3.6h.2l.1-.4v-.4-.2c-.2-.4-.2-.9 0-1a38.7 38.7 0 0 1 1-.5l.6-.5c.7-.5.8-1 1-1.6 0-.3.2-.4.4-.5l.2-.2.3-.2c.5-.4 1.4-1.6 1.4-2.6 0-.4-.1-.8-.4-1-.3-.4-.7-.5-1-.7l-.6-.2-.5-.5v-.1l-.6-.6c-.4-.3-.9-.4-1.3-.4a21 21 0 0 1-1.2-.3h-.2l-1-.4a4 4 0 0 0-2 0l-.3.1h-.3v-.3C7 9 6.4 8.8 6 8.6c-.6 0-.7 0-.6-.6.1-.4.4-.7.8-.8.5-.1 1 0 1.3.3.1 0 .3.1.4 0 .2 0 .3-.1.3-.3 0-.8.6-1.6 1.1-2.2.6-.8 1-.8 2-.8.3 0 .7 0 1-.3v-.6c0-.3-.4-.5-.6-.7l-.3-.2-.3-.7-.4-.8zM14 16.5zM6.4 9.7h-.2.2z" />
          </svg>
        `;
    case "checkmark-circle":
      return `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="${width}" height="${height}">
          <circle cx="9" cy="9" r="9" fill="#0076ff"></circle>
          <path d="M6.42871 9.21445L8.30371 11.0895L12.3216 7.07159" stroke="#FFF" stroke-width="2" stroke-linecap="round"></path>
        </svg>
        `;
  }
};

interface IconProps {
  icon: IconName;
  width: string | number;
  height: string | number;
  fill: string;
}

const Icon = ({
  icon,
  width = 16,
  height = width,
  fill = "#000"
}: IconProps) => {
  const iconShape = getIconShape(icon, fill, width, height);
  const minifiedIcon = iconShape.replace(/(\n|\s\s)/g, "");
  const encodedIcon = encodeURIComponent(minifiedIcon);

  return htm`
    <${Image}
      src=${`data:image/svg+xml;utf8,${encodedIcon}`}
      width=${width}
      height=${height}
    />
  `;
};

export default Icon;
