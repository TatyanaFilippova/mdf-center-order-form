"use client";

import Header from "@/components/header/Header";

import Sidebar from "@/components/sidebar/Sidebar";
import Table from "@/components/table/Table";
import { TableElementItemProps } from "@/components/tableElement/TableElementItem";
import { Container, Shell, Wrapper } from "./styled";

const breadCrumbs = [
  {
    title: "Главная",
  },
  {
    title: "Мои заказы",
  },
];

const list: TableElementItemProps[] = [
  {
    number: "1",
    title: "Фасад прямой, ручка “U“",
    sizes: "50x120x24 (24)",
    radius: "16 мм.",
    colorType: "Пленка ПВХ",
    color: "бирюзовый",
    dateStart: "24.02.24",
    dateEnd: "24.03.24",
    status: "todo",
  },
];

const Page = () => {
  return (
    <>
      <Wrapper>
        <Sidebar />
        <Shell>
          <Header breadCrumbs={breadCrumbs} />
          <Container>
            <Table list={list} />
          </Container>
        </Shell>
      </Wrapper>
    </>
  );
};

export default Page;
