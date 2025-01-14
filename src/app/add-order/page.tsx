"use client";

import Header from "@/components/header/Header";
import Sidebar from "@/components/sidebar/Sidebar";

import { Container, Shell, Wrapper } from "./styled";
import FormOptions from "@/components/FormOptions/FormOptions";

const breadCrumbs = [
  {
    title: "главная",
  },
  {
    title: "новый заказ",
  },
];

const Page = () => {
  return (
    <>
      <Wrapper>
        <Sidebar />
        <Shell>
          <Header title="Создание нового заказа" breadCrumbs={breadCrumbs} />

          <FormOptions />
        </Shell>
      </Wrapper>
    </>
  );
};

export default Page;
