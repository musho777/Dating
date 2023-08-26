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