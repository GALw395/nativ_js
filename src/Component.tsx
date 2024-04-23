import { ChangeEvent, MouseEvent } from "react"



export function Component() {

  const deleteUser = (event: MouseEvent<HTMLButtonElement>) => {
    
    alert(event.currentTarget.name)
  }
  // const saveUser = () => {
  //   alert('User saved')
  // }
  const onNameChanged = () => {
    console.log('name changed')    
  }
  const focusLostHandler = () => {
    console.log('focus lost')    
  }
  const onAgeChanged = (event: ChangeEvent<HTMLInputElement>) => {
    console.log('age changed ' + event.currentTarget.value)    
  }


  return (
    <div> <textarea onChange={onNameChanged} onBlur={focusLostHandler}>Lexa</textarea>
    <input onChange={onAgeChanged} type="number" />
      <button name="delete" onClick={deleteUser}>Delete</button>
      <button name="save" onClick={deleteUser}>Save</button>
    </div>
  );
}


