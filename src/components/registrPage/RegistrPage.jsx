
import InputEntrance from "../inputEntrance/InputEntrance";
import { Wrapper ,Body,BodyBlue,ButtonEntrance,ButtonReset,FormLogin,Title,WrapperButton,ButtonСreate,WrapperButtonCreate} from "./styled";
import { useForm } from "react-hook-form";

function RegistrPage() {
  const {register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log("aaa", data);
  }
console.log(errors.example)
  return (
    <Wrapper>
      <Body>
        <FormLogin>
          <Title>Войти</Title>
          <InputEntrance
            type="text"
            placeholder="Введите email"
            {...register("email", { pattern: /(.+)@(.+){2,}\.(.+){2,}/, required: true })}
            isErrors={errors.email}
          />
          {errors.email?.type ==='pattern' && <p>Введите корректный email</p> }
          {errors.email?.type === 'required' && <p>Поле обязательно для ввода</p>}
          <InputEntrance
            type="password"
            placeholder="Введите пароль"
            {...register("password", { required: true, minLength: 8 })}
            isErrors={errors.password}
          />
          {errors.password?.type === 'required' && <p>Поле обязательно для ввода</p>}
          {errors.password && <p>Пароль должен содержать от 8 символов</p>}
          <WrapperButton>
            <ButtonEntrance onClick={handleSubmit(onSubmit)}>Войти</ButtonEntrance>
            <ButtonReset>Сбросить пароль</ButtonReset>
          </WrapperButton>
          <WrapperButtonCreate>
            <ButtonСreate>Создать нового пользователя</ButtonСreate>
          </WrapperButtonCreate>
        </FormLogin>
        
      </Body>
      <BodyBlue></BodyBlue>
    </Wrapper>  
  ); 
} 
 
export default RegistrPage