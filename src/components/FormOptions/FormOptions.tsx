import Select from "../select/Select/Select";
import TextInput from "../textInput/TextInput";
import {
  ButtonForm,
  Container,
  Shell,
  ShellCoating,
  Title,
  Wrapper,
  WrapperButton,
  WrapperCoating,
  WrapperCoatingSecond,
} from "./styled";
import {
  selectOptions,
  selectOptionsСoating,
  selectOptionsСolor,
} from "./selectOptions";
import { Controller, useForm } from "react-hook-form";


const FormOptions = () => {
  const form = useForm();
  const ownSubmit = (values) => {
    console.log(values);
  };
  const submit = form.handleSubmit(ownSubmit);

  return (
    <Container>
      <Title>Новый фасад</Title>
      <Title>Размеры</Title>
      <Shell>
        <Wrapper>
          <TextInput label="Высота, мм" {...form.register("input")} />
        </Wrapper>
        <Wrapper>
          <TextInput label="Ширина, мм" {...form.register("input")} />
        </Wrapper>
        <Wrapper>
          <TextInput label="Толщина, мм" {...form.register("input")} />
        </Wrapper>
      </Shell>
      <Title>Параметры</Title>
      <Shell>
        <Wrapper>
          <Controller
            name="radius"
            control={form.control}
            render={(props) => {
              return (
                <Select
                  label="Радиус завала торца"
                  items={selectOptions}
                  onChange={props.field.onChange}
                  value={props.field.value}
                />
              );
            }}
          />
        </Wrapper>
        <Wrapper>
          <Controller
            name="name"
            control={form.control}
            render={(props) => {
              return (
                <Select
                  label="Интегрированная ручка"
                  items={selectOptions}
                  onChange={props.field.onChange}
                  value={props.field.value}
                />
              );
            }}
          />
        </Wrapper>
        <Wrapper>
          <Controller
            name="milling"
            control={form.control}
            render={(props) => {
              return (
                <Select
                  label="Фрезеровка"
                  items={selectOptions}
                  onChange={props.field.onChange}
                  value={props.field.value}
                />
              );
            }}
          />
        </Wrapper>
      </Shell>
      <Title>Покрытие</Title>
      <ShellCoating>
        <WrapperCoating>
          <Controller
            name="coating"
            control={form.control}
            render={(props) => {
              return (
                <Select
                  label="Тип покрытия"
                  items={selectOptionsСoating}
                  onChange={props.field.onChange}
                  value={props.field.value}
                />
              );
            }}
          />
        </WrapperCoating>
        <WrapperCoatingSecond>
          <Controller
            name="color"
            control={form.control}
            render={(props) => {
              return (
                <Select
                  label="Цвет"
                  items={selectOptionsСolor}
                  onChange={props.field.onChange}
                  value={props.field.value}
                />
              );
            }}
          />
        </WrapperCoatingSecond>
      </ShellCoating>
      <Shell>
        <Wrapper>
          <TextInput label="Количество" {...form.register("input")} />
        </Wrapper>
      </Shell>
      <WrapperButton>
        <ButtonForm onClick={() => submit()}>Отправить заказ</ButtonForm>
      </WrapperButton>
    </Container>
  );
};

export default FormOptions;
