// const coding = ["js","ruby","java","python","cpp"]

// const values = coding.forEach(( item )=>{
//     console.log(item);
//     return item
// })

//  console.log(values);

// const myNums = [1,2,3,4,5,6,7,8,9,10]

//  const newNums = myNums.filter((num) => {
//     return num > 4
//  })

// const newNums = []
// myNums.forEach((num) =>{
//     if(num > 4){
//         newNums.push(num)
//     }
// })
// console.log(newNums);



const books = [

    { tittle: `Book one`, genre: 'ficton', published: 1981, edition: 2004 },
    { tittle: `Book two`, genre: ' Non-ficton', published: 1992, edition: 2008 },
    { tittle: `Book three`, genre: 'history', published: 1999, edition: 2007 },
    { tittle: `Book four`, genre: 'Non-ficton', published: 1989, edition: 2010 },
    { tittle: `Book five`, genre: 'science', published: 2009, edition: 2014 },
    { tittle: `Book six`, genre: 'ficton', published: 1987, edition: 2010 },
    { tittle: `Book seven`, genre: 'history', published: 1986, edition: 1996 },
    { tittle: `Book eight`, genre: 'science', published: 2011, edition: 2016 },
    { tittle: `Book nine`, genre: 'Non-ficton', published: 1981, edition: 1989 },
];

let userBooks = books.filter((bk) => bk.genre === 'history')

 userBooks = books.filter((bk)=>{
    return bk.genre >='published:1981'
    
})
console.log(userBooks)