

let users = [
  { name: "Lexa1", age: 15 },
  { name: "Lexa2", age: 32 },
  { name: "Lexa3", age: 25 },
]

let admins = users

admins.push({ name: "Lexa00", age: 0 })

console.log(users);


let users1 = [
  {
    name: "Lexa3",
    age: 25,
    address: { title: "Minsk" }
  },
]


let users2 = {
    name: "Lexa3",
    age: 25,
    address: { title: "Minsk" }
  }


let users3 = {
    name: "Lexa3",
    age: 25,
    address: users2.address
  }

  const users4 = [users2, users3, {name: "Lexa4", age: 1465, address: users2.address}]

  users3.address.title = "Bla bla"


  
  console.log(users3.address.title);
  console.log(users2.address.title);
  




export const Component = () => {
  return (
    <div>
    </div>
  )
}


