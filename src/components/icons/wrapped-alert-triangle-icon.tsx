import type { SVGProps } from "react";

const WrappedAlertTriangleIcon = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg
			fill="none"
			height="56"
			viewBox="0 0 56 56"
			width="56"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M0 16C0 7.16344 7.16344 0 16 0H40C48.8366 0 56 7.16344 56 16V40C56 48.8366 48.8366 56 40 56H16C7.16344 56 0 48.8366 0 40V16Z"
				fill="#134CA2"
			/>
			<path
				d="M39.3518 35.0006L30.0185 18.6673C29.815 18.3082 29.5199 18.0095 29.1632 17.8017C28.8066 17.5939 28.4012 17.4844 27.9885 17.4844C27.5757 17.4844 27.1704 17.5939 26.8138 17.8017C26.4571 18.0095 26.162 18.3082 25.9585 18.6673L16.6252 35.0006C16.4195 35.3568 16.3116 35.7611 16.3125 36.1725C16.3134 36.5839 16.4231 36.9877 16.6303 37.343C16.8376 37.6984 17.1352 37.9926 17.4928 38.1959C17.8504 38.3992 18.2555 38.5043 18.6668 38.5006H37.3335C37.7429 38.5002 38.1449 38.392 38.4993 38.1871C38.8537 37.9821 39.1479 37.6875 39.3524 37.3329C39.5569 36.9782 39.6645 36.576 39.6644 36.1667C39.6643 35.7573 39.5565 35.3551 39.3518 35.0006Z"
				stroke="white"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2.33333"
			/>
			<path
				d="M28 24.5V29.1667"
				stroke="white"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2.33333"
			/>
			<path
				d="M28 33.834H28.0117"
				stroke="white"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2.33333"
			/>
		</svg>
	);
};

export default WrappedAlertTriangleIcon;
