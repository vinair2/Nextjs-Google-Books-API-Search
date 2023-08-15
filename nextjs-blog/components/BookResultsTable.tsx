import React from 'react';
import Book from '../components/Book';


function BookResultsTable( { books }) {
	const style = {
		container: {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			height: '100vh', // Adjust as needed
			width:'200vh'
        },
		table: {
            width: '80%',
            borderCollapse: 'collapse',
            border: '1px solid #ddd',
        },
        cell: {
            width: '25%', // Each column occupies 25% of the table width
            height: '50px', // Each row has a fixed height of 50px
            padding: '8px',
            textAlign: 'center',
            borderBottom: '1px solid #ddd',
			border: '1px solid #ccc',
        },
		tableHeader: {
			backgroundColor: '#f0f8ff',
		}

    };
	const booksArray = books || [];
    return (
		<div style = {style.container}>		
				<table style = {style.table}>
					<thead style = {style.tableHeader}>
						<th style = {style.cell}>Title</th>
						<th style = {style.cell}>Subtitle</th>
						<th style = {style.cell}>Authors</th>
						<th style = {style.cell}>Thumbnail</th>
					</thead>
					<tbody>
						{booksArray.map((book, index) => (
							<Book bookData={booksArray[index]} />
						))}
					</tbody>
				</table>
			
		</div>
			

    );
}
export default BookResultsTable;
