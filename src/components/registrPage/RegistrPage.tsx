
import InputEntrance from "../inputEntrance/InputEntrance";
import { Wrapper ,Body,BodyBlue,ButtonEntrance,ButtonReset,FormLogin,Title,WrapperButton} from "./styled";
import { useForm } from "react-hook-form";
import axiosInstance from '../../api/axiosInstanse'
import { useRouter } from 'next/navigation'


interface Inputs {
  email: string,
  password: string,
  username: string,
  passwordRepeat: string,
}


function RegistrPage() {
  const router = useRouter()
  const { register, handleSubmit, formState: { errors }, watch } = useForm<Inputs>({
    defaultValues: {
      email: "1234s5@mail.ru"
    }})
  const onSubmit = async (data: Inputs) => {
    try {
      const result = await axiosInstance({
        method: "post",
        url: "/auth/local/register",
        data: JSON.stringify({
          "email": data.email,
          "username": data.username,
          "password": data.password,
        }),
      
        
      })
      router.push('/login')
      console.log(result)
    }
    catch(e) {
      console.log(e)
      alert("ошибка")
    }
  }
  console.log(errors.passwordRepeat)
  return (
    <Wrapper>
      <Body>
        <FormLogin>
          <Title>Зарегестрироваться</Title>
          <InputEntrance
            type="text"
            placeholder="Введите email"
            {...register("email", { pattern: /(.+)@(.+){2,}\.(.+){2,}/, required: true })}
            isErrors={errors.email}
          />
          {errors.email?.type ==='pattern' && <p>Введите корректный email</p> }
          {errors.email?.type === 'required' && <p>Поле обязательно для ввода</p>}
          <InputEntrance
            type="text"
            placeholder="Введите имя"
            {...register("username", { pattern: /[А-Яа-яA-Za-zё]/, required: true })}
            isErrors={errors.username}
          />
          {errors.username?.type ==='pattern' && <p>Введите корректное имя</p> }
          {errors.username?.type === 'required' && <p>Поле обязательно для ввода</p>}
          <InputEntrance
            type="password"
            placeholder="Введите пароль"
            {...register("password", { required: true, minLength: 8 })}
            isErrors={errors.password}
          />
          {errors.password?.type === 'required' && <p>Поле обязательно для ввода</p>}
          {errors.password?.type && <p>Пароль должен содержать от 8 символов</p>}

          <InputEntrance
            type="password"
            placeholder="Повторите пароль"
            {...register("passwordRepeat", {
              required: true, minLength: 8,
              validate: (val) => {
                console.log(val,watch("password"))
                if (watch('password') != val) {

                  return "Пароли не совпадают"
                }
              }
             })}
            isErrors={errors.passwordRepeat}
          />
          {errors.passwordRepeat?.type === 'required' && <p>Поле обязательно для ввода</p>}
          {errors.passwordRepeat?.type === 'validate' && <p>Пароли не совпадают</p>}
          
          <WrapperButton>
            <ButtonEntrance onClick={handleSubmit(onSubmit)}>Создать нового пользователя</ButtonEntrance>
            <ButtonReset onClick={()=> router.push('/login')}>Войти</ButtonReset>
          </WrapperButton>
         
        </FormLogin>
        
      </Body>
      <BodyBlue></BodyBlue>
    </Wrapper>  
  ); 
} 
 
export default RegistrPage