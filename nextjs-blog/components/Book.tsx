import React from 'react';



function Book( { bookData } ){
  const style = {
    tr: {
      borderBottom: '3px solid #ddd',
			border: '1px solid #ccc',
      textAlign: 'center',
      width: '25%', // Each column occupies 25% of the table width
      height: '50px', // Each row has a fixed height of 50px
      padding: '8px',
    },
  }
  console.log(bookData);
    return (
      <tr style = {style.tr}>       
        <td>{bookData.title}</td>
        <td>{bookData.subtitle}</td>
        <td>{bookData.authors ? bookData.authors.join(', ') : 'Unknown'}</td>
        <td><img src={bookData.img}/></td>
      </tr>
      );
}
export default Book;
