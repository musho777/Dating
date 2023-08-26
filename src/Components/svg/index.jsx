export const DropdownDown = () => {
    return (
        <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.2139 11.9608C21.7128 11.4597 20.9034 11.4597 20.4024 11.9608L15.4175 16.9457L10.4325 11.9608C9.93148 11.4597 9.12208 11.4597 8.62102 11.9608C8.11996 12.4618 8.11996 13.2712 8.62102 13.7723L14.5181 19.6694C15.0192 20.1704 15.8286 20.1704 16.3296 19.6694L22.2267 13.7723C22.715 13.2841 22.715 12.4618 22.2139 11.9608Z" fill="#C8087E" />
        </svg>
    )
}

export const DropdownUp = () => {
    return (
        <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.6196 18.8742C9.12067 19.3753 9.93007 19.3753 10.4311 18.8742L15.416 13.8893L20.401 18.8742C20.902 19.3753 21.7114 19.3753 22.2125 18.8742C22.7135 18.3731 22.7135 17.5637 22.2125 17.0627L16.3154 11.1656C15.8143 10.6645 15.0049 10.6645 14.5039 11.1656L8.60676 17.0627C8.11854 17.5509 8.11854 18.3731 8.6196 18.8742Z" fill="#C8087E" />
        </svg>
    )
}

export const CheckBoxSvg = ({ active }) => {
    if (!active) {
        return <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_211_1932)">
                <circle cx="14" cy="14" r="11" stroke="white" strokeWidth="2" />
            </g>
            <defs>
                <clipPath id="clip0_211_1932">
                    <rect width="28" height="28" fill="white" />
                </clipPath>
            </defs>
        </svg>

    }
    else {
        return <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_211_1919)">
                <path d="M13.9997 25.6673C7.55618 25.6673 2.33301 20.4442 2.33301 14.0007C2.33301 7.55715 7.55618 2.33398 13.9997 2.33398C20.4432 2.33398 25.6663 7.55715 25.6663 14.0007C25.6663 20.4442 20.4432 25.6673 13.9997 25.6673ZM12.8365 18.6673L21.0848 10.4178L19.4352 8.76815L12.8365 15.368L9.53601 12.0675L7.88634 13.7172L12.8365 18.6673Z" fill="white" />
            </g>
            <defs>
                <clipPath id="clip0_211_1919">
                    <rect width="28" height="28" fill="white" />
                </clipPath>
            </defs>
        </svg>

    }
}