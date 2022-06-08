import React, { useState } from "react";
import { ContactsSearchForm } from "../ContactsSearchForm";
import { ContactsSearchResults } from "../ContactsSearchResults";

export const ContactsSearch = () => {
	const [formValues, setFormValues] = useState(null);

	const handleOnClickSearchButton = (formValues) => {
		console.log("toto");
		console.log(formValues);
		setFormValues(formValues);
	};

	const handleOnClickCancelButton = (formValues) => {
		setFormValues(formValues);
	};
	return (
		<>
			<ContactsSearchForm
				handleOnClickSearchButton={handleOnClickSearchButton}
				handleOnClickCancelButton={handleOnClickCancelButton}
			/>
			{formValues ? <ContactsSearchResults formValues={formValues} /> : null}
		</>
	);
};