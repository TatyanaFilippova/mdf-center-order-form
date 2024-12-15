import { Input } from "./styled"

const InputEntrance = ({ type, placeholder, isErrors, ...props}) => {
  return <><Input type={type} placeholder={placeholder} {...props} $isErrors={isErrors} /></>
}

export default InputEntrance
