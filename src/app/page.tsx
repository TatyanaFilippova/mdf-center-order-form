"use client";

import Sidebar from "@/components/sidebar/Sidebar";
import { Shell, ShellPersonCard, Wrapper } from "./styled";
import Header from "@/components/header/Header";
import PersonCard from "@/components/personCard/PersonCard";
import HomeCard from "@/components/homeCard/HomeCard";

const breadCrumbs = [
  {
    title: "Главная",
  },
];

export default function Home() {
  return (
    <div>
      <Wrapper>
        <Sidebar />
        <Shell>
          <Header
            title="Фабрика по производству мебельных фасадов"
            breadCrumbs={breadCrumbs}
          />
          <PersonCard />

          <ShellPersonCard>
            <HomeCard title="Активных заказов" numberOrders="24"></HomeCard>
            <HomeCard title="Активных заказов" numberOrders="24"></HomeCard>
            <HomeCard title="Активных заказов" numberOrders="24"></HomeCard>
          </ShellPersonCard>
        </Shell>
      </Wrapper>
    </div>
  );
}
