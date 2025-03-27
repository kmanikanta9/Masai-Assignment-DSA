
function Book(title,author){
    let book={}
    book.title=title;
    book.author=author;
    book.details=function(){
        console.log(`Title:${this.title}, Author:${this.author}`)
    }
    return book
}
function createLibrary(){
    return {
        libraryBooks:[],
        addBook:function(book){
            this.libraryBooks.push(book)
        },
        removeBook:function(remove){
            let  I=this.libraryBooks.findIndex((ele)=>{
                return ele.title==remove
            })
            if(I){
                this.libraryBooks.splice(I,1)
            }
        },
        listBooks:function(){
            this.libraryBooks.forEach((e)=>{
                console.log(`Title:${e.title}, Author:${e.author}`)
            })
        }
    }
}

const library = createLibrary();

const book1 = Book("To Kill a Mockingbird", "Harper Lee");
const book2 = Book("1984", "George Orwell");

library.addBook(book1);
library.addBook(book2);


library.listBooks();
// Output:
// Title: To Kill a Mockingbird, Author: Harper Lee
// Title: 1984, Author: George Orwell

library.removeBook("1984");
library.listBooks();
// Output:
// Title: To Kill a Mockingbird, Author: Harper Lee

