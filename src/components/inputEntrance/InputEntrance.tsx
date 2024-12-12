import { Input } from "./styled"


interface InputProps{
  type: string;
  placeholder: string;
  
  

}

const InputEntrance = ({ type, placeholder, ...props}:InputProps) => {
  return <><Input type={type} placeholder={placeholder} {...props} /></>
}

export default InputEntrance
