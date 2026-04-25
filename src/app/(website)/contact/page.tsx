import type { Metadata } from "next";
import ContactPageClient from "./contact-page-client";

export const metadata: Metadata = {
	title: "Contact",
};

const ContactPage = () => {
	return <ContactPageClient />;
};

export default ContactPage;
