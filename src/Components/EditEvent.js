import React, { useEffect } from 'react';

const EditEvent = (props) => {
	const { handleEdit, handleDelete, event, editID } = props;

	useEffect(() => {
		axiosWithAuth()
			.get(`/articles/${editId}`)
			.then((resp) => {
				setArticle(resp.data);
			})
			.catch((err) => console.log(err));
	}, [editId]);

	return <div></div>;
};

export default EditEvent;
