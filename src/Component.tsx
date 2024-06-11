

type LessonsPropsType = {
  title: string
}

export type ManPropsType = {
  name: string,
  age: number,
  lessons: LessonsPropsType[]
}




export const Component = (props: ManPropsType) => {
  const {name, age, lessons} = props

  return (
    <div>
      {name}
      {age}
      {lessons.map((el, index) => {
        return  <li key={index}>{el.title}</li> 
      })}
    </div>
  )
}


