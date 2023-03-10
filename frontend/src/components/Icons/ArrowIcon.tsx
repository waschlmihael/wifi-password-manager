import React from 'react';

const ArrowIcon = (props: React.SVGProps<SVGSVGElement>) => {
    return (
        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <g clipPath="url(#clip0)">
                <path
                    d="M1.20502 7.85707C1.27984 7.84573 1.35548 7.84092 1.4311 7.84268L14.3089 7.9761L14.0295 7.84259C13.7563 7.70983 13.5085 7.53044 13.2969 7.31252L9.7231 3.66384C9.25219 3.20489 9.17985 2.47369 9.55165 1.93135C9.98382 1.35379 10.8024 1.23589 11.38 1.66807C11.4266 1.703 11.4709 1.74101 11.5125 1.78186L17.9752 8.37983C18.4802 8.89489 18.4721 9.72183 17.957 10.2269C17.9567 10.2272 17.9563 10.2276 17.956 10.2279L11.358 16.6906C10.842 17.1946 10.0151 17.1849 9.51101 16.6688C9.47134 16.6282 9.43436 16.5851 9.4003 16.5397C9.03981 15.9897 9.12729 15.2602 9.60761 14.8111L13.2498 11.2306C13.4434 11.0408 13.6654 10.8822 13.9078 10.7607L14.3014 10.5884L1.47591 10.4556C0.808462 10.4734 0.22793 10.0013 0.109382 9.34418C0.0012964 8.63098 0.491815 7.9652 1.20502 7.85707Z"
                    fill="white"/>
            </g>
            <defs>
                <clipPath id="clip0">
                    <rect width="18.255" height="18.255" fill="white"
                          transform="matrix(-0.999946 -0.0103601 -0.0103601 0.999946 18.4431 0.189117)"/>
                </clipPath>
            </defs>
        </svg>

    );
};

export default ArrowIcon;