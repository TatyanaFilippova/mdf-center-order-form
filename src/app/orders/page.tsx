"use client";

import Header from "@/components/header/Header";
import Sidebar from "@/components/sidebar/Sidebar";
import Table from "@/components/table/Table";
import { TableElementItemProps } from "@/components/tableElement/TableElementItem";
import { Container, Shell, Wrapper } from "./styled";
import { useEffect, useState } from "react";
import axiosInstance from "@/api/axiosInstanse";

const breadCrumbs = [
  {
    title: "Главная",
  },
  {
    title: "Мои заказы",
  },
];

const Page = () => {
  const [orders, setOrders] = useState<TableElementItemProps[]>([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const result = await axiosInstance({
          method: "get",
          url: "/orders",
        });
        console.log(result);
        const orders = result.data.data.map((item: any, key: any) => {
          return {
            number: key + 1,
            title: item.name,
            sizes: `${item.height} ${item.width} ${item.thickness}`,
            radius: item.radius,
            colorType: item.coating,
            color: item.color,
            dateStart: item.dateStart,
            dateEnd: item.dateEnd,
            status:
              item.orderStatus === "todo"
                ? "todo"
                : item.orderStatus === "in-progress"
                  ? "inProgress"
                  : item.orderStatus === "expired"
                    ? "expired"
                    : "ready",
          };
        });
        setOrders(orders);
      } catch (e) {
        console.error(e);
      }
    };
    getData();
  }, []);
  return (
    <>
      <Wrapper>
        <Sidebar />
        <Shell>
          <Header breadCrumbs={breadCrumbs} />
          <Container>
            <Table list={orders} />
          </Container>
        </Shell>
      </Wrapper>
    </>
  );
};

export default Page;
