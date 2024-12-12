
import InputEntrance from "../inputEntrance/InputEntrance";
import { Wrapper ,Body,BodyBlue,ButtonEntrance,ButtonReset,FormLogin,Title,WrapperButton} from "./styled";
import { useForm, SubmitHandler } from "react-hook-form";

function LoginPage() {
  const {register, handleSubmit } = useForm();
  const onSubmit = data => {
    console.log("aaa", data);
  }

  return (
    <Wrapper>
      <Body>
        <FormLogin>
          <Title>Войти</Title>
             
            <InputEntrance type ="text" placeholder="Введите логин" {...register("example")}/>
             
            <InputEntrance type="password" placeholder="Введите пароль" {...register("exampleRequired")} />
             
          
            <WrapperButton>
              <ButtonEntrance onClick={handleSubmit(onSubmit)}>Войти</ButtonEntrance>
              <ButtonReset>Сбросить пароль</ButtonReset>
              
            </WrapperButton>
        </FormLogin>
        
      </Body>
      <BodyBlue></BodyBlue>
    </Wrapper>  
  ); 
} 
 
export default LoginPage 