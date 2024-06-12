

type LessonsPropsType = {
  title: string
}

export type ManPropsType = {
  name: string,
  age: number,
  lessons: LessonsPropsType[]
}

let user = {
  name: "Lera",
  age: 22,
  address: {
    city: {
      title: "Minsk"
    }
  }
}

let users = ["Lera", "Lera2", "Lera3", "Lera4"]


let userObj = {
  "0": "Lera0",
  "1": "Lera1",
  "2": "Lera2",
  "3": "Lera3"
}


let obj1 = {
  "101": { id: 101, name: "Lera0" },
  "3245": { id: 3245, name: "Lera1" },
  "1545134": { id: 1545134, name: "Lera2" },
  "11201": { id: 11201, name: "Lera3" },
}

let newUser = { id: 52342345, name: "Lexa" }

export const Component = () => {

  return (
    <div>
      <div>
        {user.address.city.title}
      </div>
      <div>
        {user['address']['city']['title']}
      </div>
      <div>
        {userObj['3']}
      </div>
      <div>
        {Object.keys(userObj)}
      </div>
      
      <div>
        {Object.values(userObj)}
      </div>


    </div>
  )
}


