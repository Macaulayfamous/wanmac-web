import type { Metadata } from "next";
import ContactPageClient from "./contact-page-client";

export const metadata: Metadata = {
	title: "Contact",
	description:
		"Get in touch with WanPadi for delivery support, business logistics enquiries, or general questions. We're here 24/7 to help.",
};

const ContactPage = () => {
	return <ContactPageClient />;
};

export default ContactPage;
