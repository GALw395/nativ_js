
let users3 = {
  name: "Lexa3",
  age: 25,
  address: {
    city: 'Minsk'
  }
}

function fun(u: any, city: string) {
  return users3 = { ...u, address: { ...u.address, city: city } }
}

console.log(fun(users3, 'pdsachjbksj'));
console.log(users3.address.city);

let users4 = {
  name: "Lexa3",
  age: 25,
  address: {
    city: 'Minsk'
  },
  books: ['1', '2', '3']
}

let books12 = '4'


function fun2(u: any, books12: any) {
  return { ...u, books: [...u.books, books12] }
}

let copy = fun2(users4, books12)


console.log(copy);
console.log(users4.books);

// b => b === 'js' ? 'ts' : b
// b => b !== 'js' ? b : 'ts'








export const Component = () => {
  return (
    <div>
    </div>
  )
}


