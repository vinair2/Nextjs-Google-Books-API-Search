import axios from 'axios';
import React from 'react';
import { useState } from 'react';

interface bookItem {
    title: string;
    subtitle?: string;
    authors?: string;
    img: string;
}

interface Books {
    books : bookItem[];
}

function SearchBar({ setBooks }){
    const[useSearch, setSearch] = useState("");


    const buttonClicked = () => {
        axios.get('https://www.googleapis.com/books/v1/volumes', {
            params : {
                q : useSearch,
                maxResults : "3"
            }
        })
        .then(function (response) {
            const booksData : Books = {
                books : response.data.items.map( (item : any) => ({
                    title : item.volumeInfo.title,
                    subtitle: item.volumeInfo.subtitle,
                    authors : item.volumeInfo.authors,
                    img: item.volumeInfo.imageLinks?.smallThumbnail || '',
                })),
            };
           setBooks(booksData)  
           //console.log(booksData);
        }) 
        .catch(function (error) {
            console.log(error);
        });
    }
    const style = {
        container: {
            display: 'flex', // Add flex display to align items horizontally
            alignItems: 'center', // Vertically center items
        },
        button: {
            border: '0',
            outline: '0',
            cursor: 'pointer',
            color: 'white',
            backgroundColor: 'rgb(84, 105, 212)',
            borderRadius: '4px',
            fontSize: '14px',
            fontWeight: '500',
            padding: '4px 8px',
            display: 'inline-block',
            minHeight: '28px',
            
        },
        inputBox: {
            padding: '5px 12px',
            fontSize: '14px',
            lineHeight: '20px',
            color: '#24292e',
            verticalAlign: 'middle',
            backgroundColor: '#ffffff',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right 8px center',
            border: '1px solid #e1e4e8',
            borderRadius: '6px',
            outline: 'none',
            flex: '1', // Allow the input to take available space
            marginRight: '8px', // Add some spacing between input and button
            width: '500px'
        },
    };

     return (
     <h1>
        <div style = {style.container}>
         <input 
            type = "text" 
            id="searchText" 
            value = {useSearch} onChange = {((e) => setSearch(e.target.value))}
            style = {style.inputBox}
         ></input>


         <button onClick={buttonClicked} style = {style.button}>Search</button>
        </div>
    </h1>
     
     );
 }
 
 export default SearchBar;





 /*
 
                    
                
 */