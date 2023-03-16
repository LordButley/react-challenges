import React from 'react';
import Book from './Book';

function RenderingLists(){
    
    const bookList = [
        {
            title:"To Kill A Mockingbird",
            author:"Harper Lee",
            pages: 281
        },
        {
            title:"The Great Gatsby",
            author:"Scott Fitzgerald",
            pages: 218
        },
        {
            title:"The Catcher In The Rye",
            author:"J. D. Salinger",
            pages: 234
        }
    ]


    return(
        <div>
            {bookList.map(
                (book) => {
                    return(
                        <Book key={book.title} book={book} />
                    // <>
                    // <h5>{book.title}</h5>
                    // <p>{book.author}</p>
                    // <p>{book.pages}</p>s
                    // </>
                    )
                }
            )}
        </div>
    )
}

export default RenderingLists;