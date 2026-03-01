"use client";

import { useState } from "react";
import { CreateOrderView } from "./CreateOrderView";
import { OrdersAllHero } from "./OrdersAllHero";

type OrdersView = "list" | "create";

export const OrdersAllMain = () => {
  const [view, setView] = useState<OrdersView>("list");

  if (view === "create") {
    return <CreateOrderView onBack={() => setView("list")} />;
  }

  return <OrdersAllHero onCreateOrder={() => setView("create")} />;
};
