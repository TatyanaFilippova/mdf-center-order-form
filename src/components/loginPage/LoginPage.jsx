
import InputEntrance from "../inputEntrance/InputEntrance";
import { Wrapper ,Body,BodyBlue,ButtonEntrance,ButtonReset,FormLogin,Title,WrapperButton,ButtonСreate,WrapperButtonCreate} from "./styled";
import { useForm} from "react-hook-form";
import axiosInstance from '../../api/axiosInstanse'
import { useRouter } from 'next/navigation'


function LoginPage() {
  const router = useRouter()
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      email: "tatiana.filippova.98@mail.ru"
    }})
  const onSubmit = async (data) => {
    try {
      const result = await axiosInstance({
        method: "post",
        url: "/auth/local",
        data: JSON.stringify({
          "identifier": data.email,
          "password": data.password,
        }),
      
        
      })
      router.push('/')
      console.log(result)
    }
    catch(e) {
      console.log(e)
      alert("ошибка")
    }
  }


  return (
    <Wrapper>
      <Body>
        <FormLogin >
          
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
            <ButtonСreate onClick={ ()=>router.push('/registr')}>Создать нового пользователя</ButtonСreate>
          </WrapperButtonCreate>
        </FormLogin>
        
      </Body>
      <BodyBlue></BodyBlue>
    </Wrapper>  
  ); 
} 
 
export default LoginPage 