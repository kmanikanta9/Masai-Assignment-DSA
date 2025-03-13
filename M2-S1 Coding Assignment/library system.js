function updateLibrary(library,newSection){
    let {sections}=library
    library.sections={...sections,...newSection}
    console.dir(library,{depth:null})
}
const library = {
    name: "Central Library",
    established: 1985,
    sections: {
      fiction: { books: 200, librarians: 3 },
      science: { books: 150, librarians: 2 },
      history: { books: 100, librarians: 1 }
    },
    members: [
      { name: "Amit", age: 25, borrowedBooks: ["fiction", "science"] },
      { name: "Priya", age: 30, borrowedBooks: ["history"] },
      { name: "Raj", age: 22, borrowedBooks: ["fiction", "history"] }
    ]
  };

  const newSection = {
    philosophy: { books: 80, librarians: 1 }
  };

updateLibrary(library,newSection)
  