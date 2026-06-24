import DeleteAccountPageClient from "./delete-account-page-client";

export const metadata = {
	title: "Delete Account",
	description:
		"Request deletion of your WanPadi account and personal data. Submit your request and we'll process it promptly.",
};
const DeleteAccountPage = () => {
	return <DeleteAccountPageClient />;
};

export default DeleteAccountPage;
