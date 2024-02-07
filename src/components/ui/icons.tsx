import type { ComponentPropsWithoutRef } from "react";

type IconProps = ComponentPropsWithoutRef<"svg">;

export const Icons = {
    logo: (props: IconProps) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 202 35"
            fill="none"
            {...props}
        >
            <g filter="url(#filter0_d_2_7)">
                <path
                    d="M24.6719 26H21.8008L19.3984 18.7148H9.32031L6.95703 26H4.08594L12.5625 0.511719H16.1953L24.6719 26ZM18.6367 16.3516L14.3594 3.20703L10.082 16.3516H18.6367ZM37.9922 26H34.3594V22.3672H37.9922V26ZM66.4688 19.3594C66.4688 20.4271 66.2474 21.3971 65.8047 22.2695C65.362 23.1289 64.7695 23.8711 64.0273 24.4961C63.2852 25.1211 62.4323 25.6029 61.4688 25.9414C60.5052 26.2799 59.5026 26.4492 58.4609 26.4492C57.0286 26.4492 55.7135 26.1823 54.5156 25.6484C53.3177 25.1146 52.3672 24.3268 51.6641 23.2852V26H49.3984V18.2461H51.6641C51.6641 19.1185 51.8659 19.9193 52.2695 20.6484C52.6732 21.3646 53.1875 21.9831 53.8125 22.5039C54.4375 23.0247 55.1536 23.4349 55.9609 23.7344C56.7812 24.0208 57.6146 24.1641 58.4609 24.1641C59.2161 24.1641 59.9128 24.0599 60.5508 23.8516C61.1888 23.6302 61.7487 23.3242 62.2305 22.9336C62.7122 22.5299 63.0898 22.0417 63.3633 21.4688C63.6497 20.8958 63.793 20.2448 63.793 19.5156C63.793 18.6953 63.6107 17.9922 63.2461 17.4062C62.8945 16.8203 62.4128 16.319 61.8008 15.9023C61.2018 15.4857 60.5247 15.1341 59.7695 14.8477C59.0143 14.5482 58.2461 14.2552 57.4648 13.9688C56.5404 13.6432 55.6159 13.3047 54.6914 12.9531C53.7669 12.5885 52.9401 12.1328 52.2109 11.5859C51.4818 11.0391 50.8893 10.375 50.4336 9.59375C49.9779 8.79948 49.75 7.81641 49.75 6.64453C49.75 5.60286 49.9714 4.67839 50.4141 3.87109C50.8568 3.05078 51.4362 2.36068 52.1523 1.80078C52.8685 1.24089 53.7018 0.817708 54.6523 0.53125C55.6029 0.231771 56.5794 0.0820312 57.582 0.0820312C58.819 0.0820312 59.9583 0.335938 61 0.84375C62.0547 1.35156 62.875 2.1263 63.4609 3.16797V0.511719H65.8242V7.79688H63.4609C63.4609 7.02865 63.2982 6.3125 62.9727 5.64844C62.6602 4.97135 62.2305 4.39844 61.6836 3.92969C61.1367 3.44792 60.5117 3.07031 59.8086 2.79688C59.1055 2.51042 58.3633 2.36719 57.582 2.36719C56.8919 2.36719 56.2344 2.44531 55.6094 2.60156C54.9844 2.75781 54.4375 3.01172 53.9688 3.36328C53.5 3.70182 53.1224 4.14453 52.8359 4.69141C52.5625 5.23828 52.4258 5.88932 52.4258 6.64453C52.4258 7.30859 52.5885 7.875 52.9141 8.34375C53.2526 8.8125 53.7018 9.22917 54.2617 9.59375C54.8216 9.94531 55.4661 10.2708 56.1953 10.5703C56.9375 10.8568 57.6927 11.1497 58.4609 11.4492C59.4245 11.7878 60.3815 12.1654 61.332 12.582C62.2826 12.9987 63.1354 13.5 63.8906 14.0859C64.6458 14.6719 65.2643 15.3945 65.7461 16.2539C66.2279 17.1003 66.4688 18.1354 66.4688 19.3594ZM70.707 21.0781C70.707 19.9323 70.9935 18.9753 71.5664 18.207C72.1393 17.4258 72.888 16.8138 73.8125 16.3711C74.75 15.9154 75.8177 15.5898 77.0156 15.3945C78.2266 15.1862 79.457 15.082 80.707 15.082C81.1888 15.082 81.6185 15.0885 81.9961 15.1016C82.3867 15.1146 82.7513 15.1341 83.0898 15.1602C83.4414 15.1862 83.793 15.2188 84.1445 15.2578C84.4961 15.2969 84.8802 15.3424 85.2969 15.3945V14.0859C85.2969 13.2005 85.1016 12.4714 84.7109 11.8984C84.3333 11.3255 83.8646 10.8763 83.3047 10.5508C82.7448 10.2122 82.1589 9.97786 81.5469 9.84766C80.9349 9.70443 80.4141 9.63281 79.9844 9.63281C78.6302 9.63281 77.3802 9.8151 76.2344 10.1797C75.0885 10.5443 74.0208 11.0326 73.0312 11.6445L71.8203 9.63281C72.9141 8.96875 74.138 8.42839 75.4922 8.01172C76.8594 7.58203 78.3568 7.36719 79.9844 7.36719C80.974 7.36719 81.944 7.4974 82.8945 7.75781C83.8581 8.00521 84.7174 8.39583 85.4727 8.92969C86.2409 9.45052 86.8529 10.1406 87.3086 11C87.7643 11.8594 87.9922 12.888 87.9922 14.0859V26H85.2969V22.9531C84.8281 23.5391 84.2943 24.0534 83.6953 24.4961C83.1094 24.9388 82.4909 25.3034 81.8398 25.5898C81.1888 25.8633 80.5378 26.0716 79.8867 26.2148C79.2357 26.3711 78.6172 26.4492 78.0312 26.4492C75.6224 26.4492 73.7995 25.987 72.5625 25.0625C71.3255 24.138 70.707 22.8099 70.707 21.0781ZM78.0312 24.1641C79.151 24.1641 80.1536 24.0013 81.0391 23.6758C81.9375 23.3372 82.6992 22.9206 83.3242 22.4258C83.9492 21.931 84.431 21.4036 84.7695 20.8438C85.1211 20.2839 85.2969 19.776 85.2969 19.3203V17.6016C84.4245 17.4714 83.5846 17.3997 82.7773 17.3867C81.9831 17.3737 81.293 17.3672 80.707 17.3672C79.7435 17.3672 78.8125 17.4323 77.9141 17.5625C77.0286 17.6927 76.2539 17.9076 75.5898 18.207C74.9258 18.4935 74.3919 18.8711 73.9883 19.3398C73.5846 19.8086 73.3828 20.388 73.3828 21.0781C73.3828 21.8464 73.7539 22.556 74.4961 23.207C75.2513 23.8451 76.4297 24.1641 78.0312 24.1641ZM109.828 26H107.133V24.3203C106.365 25.0104 105.518 25.5378 104.594 25.9023C103.682 26.2669 102.745 26.4492 101.781 26.4492C100.336 26.4492 99.0404 26.2148 97.8945 25.7461C96.7487 25.2773 95.7786 24.6263 94.9844 23.793C94.2031 22.9466 93.5977 21.9375 93.168 20.7656C92.7513 19.5938 92.543 18.3112 92.543 16.918C92.543 15.5378 92.7513 14.2617 93.168 13.0898C93.5977 11.9049 94.2031 10.8958 94.9844 10.0625C95.7786 9.21615 96.7487 8.55859 97.8945 8.08984C99.0404 7.60807 100.336 7.36719 101.781 7.36719C102.745 7.36719 103.682 7.54297 104.594 7.89453C105.518 8.23307 106.365 8.7474 107.133 9.4375V2.79688H103.5V0.511719H109.828V26ZM107.133 12.0352C106.365 11.1888 105.525 10.5768 104.613 10.1992C103.715 9.82161 102.758 9.63281 101.742 9.63281C100.674 9.63281 99.7305 9.82161 98.9102 10.1992C98.1029 10.5768 97.4258 11.0911 96.8789 11.7422C96.332 12.3932 95.9154 13.1615 95.6289 14.0469C95.3555 14.9193 95.2188 15.8763 95.2188 16.918C95.2188 17.9596 95.3555 18.9232 95.6289 19.8086C95.9154 20.681 96.332 21.4427 96.8789 22.0938C97.4258 22.7448 98.1029 23.2591 98.9102 23.6367C99.7305 24.0143 100.674 24.2031 101.742 24.2031C103.799 24.2031 105.596 23.3893 107.133 21.7617V12.0352ZM115.375 7.79688H118.051V19.0469C118.051 20.6745 118.402 21.9375 119.105 22.8359C119.822 23.7214 120.967 24.1641 122.543 24.1641C123.533 24.1641 124.424 23.9362 125.219 23.4805C126.013 23.0247 126.69 22.4193 127.25 21.6641C127.81 20.8958 128.233 20.0234 128.52 19.0469C128.819 18.0573 128.969 17.0286 128.969 15.9609V7.79688H131.664V26H128.969V21.4492C127.693 24.7826 125.401 26.4492 122.094 26.4492C117.615 26.4492 115.375 23.9818 115.375 19.0469V7.79688ZM150.805 26H139.887V23.7148H144.008V2.79688H139.887V0.511719H146.703V23.7148H150.805V26ZM172.641 26H161.723V23.7148H165.844V2.79688H161.723V0.511719H168.539V23.7148H172.641V26ZM179.887 21.0781C179.887 19.9323 180.173 18.9753 180.746 18.207C181.319 17.4258 182.068 16.8138 182.992 16.3711C183.93 15.9154 184.997 15.5898 186.195 15.3945C187.406 15.1862 188.637 15.082 189.887 15.082C190.368 15.082 190.798 15.0885 191.176 15.1016C191.566 15.1146 191.931 15.1341 192.27 15.1602C192.621 15.1862 192.973 15.2188 193.324 15.2578C193.676 15.2969 194.06 15.3424 194.477 15.3945V14.0859C194.477 13.2005 194.281 12.4714 193.891 11.8984C193.513 11.3255 193.044 10.8763 192.484 10.5508C191.924 10.2122 191.339 9.97786 190.727 9.84766C190.115 9.70443 189.594 9.63281 189.164 9.63281C187.81 9.63281 186.56 9.8151 185.414 10.1797C184.268 10.5443 183.201 11.0326 182.211 11.6445L181 9.63281C182.094 8.96875 183.318 8.42839 184.672 8.01172C186.039 7.58203 187.536 7.36719 189.164 7.36719C190.154 7.36719 191.124 7.4974 192.074 7.75781C193.038 8.00521 193.897 8.39583 194.652 8.92969C195.421 9.45052 196.033 10.1406 196.488 11C196.944 11.8594 197.172 12.888 197.172 14.0859V26H194.477V22.9531C194.008 23.5391 193.474 24.0534 192.875 24.4961C192.289 24.9388 191.671 25.3034 191.02 25.5898C190.368 25.8633 189.717 26.0716 189.066 26.2148C188.415 26.3711 187.797 26.4492 187.211 26.4492C184.802 26.4492 182.979 25.987 181.742 25.0625C180.505 24.138 179.887 22.8099 179.887 21.0781ZM187.211 24.1641C188.331 24.1641 189.333 24.0013 190.219 23.6758C191.117 23.3372 191.879 22.9206 192.504 22.4258C193.129 21.931 193.611 21.4036 193.949 20.8438C194.301 20.2839 194.477 19.776 194.477 19.3203V17.6016C193.604 17.4714 192.764 17.3997 191.957 17.3867C191.163 17.3737 190.473 17.3672 189.887 17.3672C188.923 17.3672 187.992 17.4323 187.094 17.5625C186.208 17.6927 185.434 17.9076 184.77 18.207C184.105 18.4935 183.572 18.8711 183.168 19.3398C182.764 19.8086 182.562 20.388 182.562 21.0781C182.562 21.8464 182.934 22.556 183.676 23.207C184.431 23.8451 185.609 24.1641 187.211 24.1641Z"
                    fill="white"
                />
            </g>
            <defs>
                <filter
                    id="filter0_d_2_7"
                    x="0.0859375"
                    y="0.0820312"
                    width="201.086"
                    height="34.3672"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_2_7"
                    />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_2_7"
                        result="shape"
                    />
                </filter>
            </defs>
        </svg>
    ),
    arrow: (props: IconProps) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            {...props}
        >
            <path
                d="M12 9.25953V1.53182C12 1.06273 11.7035 0.75 11.2258 0.75L3.49249 0.766459C3.03129 0.766459 2.7348 1.10388 2.7348 1.49067C2.7348 1.87747 3.07246 2.20666 3.45954 2.20666H5.90555L9.82575 2.05852L8.33508 3.37528L0.9806 10.7409C0.832357 10.889 0.75 11.0701 0.75 11.2429C0.75 11.6297 1.0959 12 1.49945 12C1.68887 12 1.86182 11.9259 2.01006 11.7778L9.37279 4.41223L10.6987 2.92265L10.5423 6.66716V9.29245C10.5423 9.67102 10.8717 10.0167 11.2752 10.0167C11.6623 10.0167 12 9.6957 12 9.25953Z"
                fill="white"
            />
        </svg>
    ),
    burger: (props: IconProps) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            {...props}
        >
            <rect x="2" y="6" width="20" height="3" fill="#8491A0" />
            <rect x="8" y="14" width="14" height="3" fill="#8491A0" />
        </svg>
    ),
    social: {
        twitter: (props: IconProps) => (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="16"
                viewBox="0 0 20 16"
                fill="none"
                {...props}
            >
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M20 1.87195C19.3103 2.16751 18.5222 2.36453 17.6355 2.46305C18.4236 1.97044 19.1133 1.18225 19.4089 0.295554C18.6207 0.788165 17.734 1.08373 16.8473 1.28078C16.1576 0.492599 15.0739 0 13.8916 0C11.6256 0 9.85222 1.7734 9.85222 3.94089C9.85222 4.23645 9.85222 4.53204 9.95074 4.82761C6.60099 4.63057 3.64532 3.0542 1.57636 0.689667C1.18227 1.2808 0.985222 1.97046 0.985222 2.66011C0.985222 4.03942 1.67488 5.22165 2.75862 6.00983C2.06896 6.00983 1.47783 5.81278 0.886694 5.51722C0.886694 5.51722 0.886694 5.51725 0.886694 5.61578C0.886694 7.58622 2.26601 9.16257 4.13793 9.55666C3.84236 9.65518 3.44828 9.65516 3.05419 9.65516C2.75862 9.65516 2.56158 9.65518 2.26601 9.55666C2.75862 11.133 4.23645 12.3153 6.00985 12.3153C4.63054 13.399 2.85715 13.9902 0.985222 13.9902C0.689655 13.9902 0.295567 13.9901 0 13.8916C1.7734 15.0739 3.94089 15.665 6.2069 15.665C13.5961 15.665 17.734 9.55667 17.734 4.335C17.734 4.13796 17.734 3.94091 17.734 3.84239C18.8177 3.34978 19.5074 2.66012 20 1.87195Z"
                    fill="#26A7DE"
                />
            </svg>
        ),
        linkedin: (props: IconProps) => (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                {...props}
            >
                <path
                    d="M16.65 0H1.35C0.63 0 0 0.542681 0 1.2663V16.7337C0 17.4573 0.63 18 1.35 18H16.65C17.37 18 18 17.4573 18 16.7337V1.2663C18 0.633133 17.37 0 16.65 0ZM5.31 15.4673H2.61V6.87435H5.31V15.4673ZM3.96 5.608C3.06 5.608 2.43 4.88442 2.43 4.07035C2.43 3.25628 3.15 2.53265 3.96 2.53265C4.77 2.53265 5.49 3.25628 5.49 4.07035C5.58 4.97488 4.86 5.608 3.96 5.608ZM15.3 15.4673H12.6V11.3066C12.6 10.3116 12.6 9.04523 11.25 9.04523C9.89999 9.04523 9.63001 10.1307 9.63001 11.3066V15.5578H6.93001V6.96478H9.44999V8.14071C9.80999 7.41709 10.71 6.78392 11.97 6.78392C14.67 6.78392 15.21 8.59297 15.21 10.8543V15.4673H15.3Z"
                    fill="#0077B5"
                />
            </svg>
        ),
        telegram: (props: IconProps) => (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                {...props}
            >
                <path d="m20.665 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z"></path>
            </svg>
        ),
        github: (props: IconProps) => (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                {...props}
            >
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                ></path>
            </svg>
        ),
    },
};
