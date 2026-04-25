import getMatchedImg from "@/public/get-matched.svg";
import requestDeliveryImg from "@/public/Order Product Icon - Maptech X Webflow Template.svg";
import recordTimeImg from "@/public/record-time.svg";

export const stats = [
	{
		value: 98,
		unit: "%",
		text: "On-time deliveries",
	},
	{
		value: 15,
		unit: "k+",
		text: "Packages delivered",
	},
	{
		value: 4.9,
		unit: "/5",
		text: "Customer rating",
	},
	{
		value: 24,
		unit: "/7",
		text: "Live support access",
	},
];

export const faqs = [
	{
		question: "How long does delivery take?",
		answer:
			"Most local deliveries arrive the same day, depending on distance, traffic, and rider availability.",
	},
	{
		question: "Can I track my package?",
		answer: "Yes. The app shows live tracking from pickup to final drop-off.",
	},
	{
		question: "How do I pay?",
		answer:
			"You can pay securely in the app using the payment options shown at checkout.",
	},
	{
		question: "Who are the riders?",
		answer:
			"Our riders are verified delivery partners trained to handle packages safely and on time.",
	},
	{
		question: "What if there’s an issue with my delivery?",
		answer:
			"Contact support in the app or through our contact page and we’ll help resolve it quickly.",
	},
];

export const howItWorksSteps = [
	{
		id: "request",
		icon: requestDeliveryImg,
		title: "1. Request a Delivery",
		description: "Enter pickup and drop-off details in seconds.",
	},
	{
		id: "matched",
		icon: getMatchedImg,
		title: "2. Get Matched Instantly",
		description:
			"We assign an available rider as soon as your order is confirmed.",
	},
	{
		id: "receive",
		icon: recordTimeImg,
		title: "3. Receive it in record time",
		description:
			"Track your package live and receive it at the selected destination.",
	},
];
