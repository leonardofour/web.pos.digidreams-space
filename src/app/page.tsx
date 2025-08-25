"use client";
import React from "react";
// import React, { useState } from "react";
// import { Moon, Sun } from "lucide-react";
// import { useThemeContext } from "@/lib/provider/theme-provider/theme-provider";
// import InputShowcase from "@/components/showcase/input-showcae";
// import Example from "@/components/showcase/order-showcase";
// import OrderList from "@/components/common/order/order-list/order-list";
// import OrderCard from "@/components/common/order/order-card/order-card";
// import SimpleExample from "@/components/showcase/pagiantion-showcase";
// import TabsShowcase from "@/components/showcase/tabs-showcase";
// import DishListShowcase from "@/components/showcase/dish-list-showcase";
// import TogglesPage from "@/components/showcase/toogles-showcase";
// import CardItemsShowcase from "@/components/showcase/card-items-showcase";
// import ProfileShowcase from "@/components/showcase/profile-showcase";
// import DialPadShowcase from "@/components/showcase/dial-pad-showcase";
// import ModalShowcase from "@/components/showcase/modal-showcase";
// import EmployeesShowcase from "@/components/showcase/employees-showcase";
// import { SliderShowcase } from "@/components/showcase/slider-showcase";
import LoginPage from "@/components/login/login";
// import InputModal from "@/components/common/input-modal/input-modal";
// import ButtonShowcase from "@/components/button-showcase";

export default function Home() {
  // const [open, setOpen] = useState(false);

  // const handleSubmit = (customer: { name: string; phone: string }) => {
  //   console.log("Order Created for:", customer);
  // };
  // const { theme, toggleTheme } = useThemeContext();
  return (
    // <div>
    //   <button
    //     onClick={toggleTheme}
    //     className="p-3 rounded-lg transition-all duration-100 hover:scale-105"
    //     style={{
    //       backgroundColor: "var(--card-bg)",
    //       border: "1px solid var(--border)",
    //       boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    //     }}
    //   >
    //     {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
    //   </button>
    //   {/* <ButtonShowcase /> */}
    //   <InputShowcase />
    //   <Example />
    //   <div
    //     style={{
    //       display: "flex",
    //       alignItems: "center",
    //       justifyContent: "center",
    //     }}
    //   >
    //     <OrderList
    //       tableNumber="A1"
    //       customerName="Customer Name"
    //       itemCount={0}
    //       status="ready"
    //       subtext="Ready to serve"
    //     />
    //   </div>
    //   <div
    //     style={{
    //       display: "flex",
    //       alignItems: "center",
    //       justifyContent: "center",
    //     }}
    //   >
    //     <OrderCard
    //       tableNumber="A1"
    //       customerName="John Doe"
    //       orderNumber={200}
    //       orderType="dine-in"
    //       timestamp="August 17, 2023 09:23 AM"
    //       itemCount={0}
    //       total={0}
    //       status="ready"
    //       subtext="Ready to serve"
    //     />
    //   </div>
    //   <div
    //     style={{
    //       display: "flex",
    //       alignItems: "center",
    //       justifyContent: "center",
    //     }}
    //   >
    //     <SimpleExample />
    //   </div>
    //   <div
    //     style={{
    //       display: "flex",
    //       alignItems: "center",
    //       justifyContent: "center",
    //       marginBottom: "40px",
    //     }}
    //   >
    //     <TabsShowcase />
    //   </div>
    //   <div
    //     style={{
    //       display: "flex",
    //       alignItems: "center",
    //       justifyContent: "center",
    //       marginBottom: "40px",
    //     }}
    //   >
    //     <DishListShowcase />
    //   </div>
    //   <div
    //     style={{
    //       display: "flex",
    //       alignItems: "center",
    //       justifyContent: "center",
    //       marginBottom: "40px",
    //     }}
    //   >
    //     <TogglesPage />
    //   </div>
    //   <div
    //     style={{
    //       display: "flex",
    //       alignItems: "center",
    //       justifyContent: "center",
    //       marginBottom: "40px",
    //     }}
    //   >
    //     <CardItemsShowcase />
    //   </div>
    //   <div
    //     style={{
    //       display: "flex",
    //       alignItems: "center",
    //       justifyContent: "center",
    //       marginBottom: "40px",
    //     }}
    //   >
    //     <ProfileShowcase />
    //   </div>
    //   <div
    //     style={{
    //       display: "flex",
    //       alignItems: "center",
    //       justifyContent: "center",
    //       marginBottom: "40px",
    //     }}
    //   >
    //     <DialPadShowcase />
    //   </div>
    //   <div
    //     style={{
    //       display: "flex",
    //       alignItems: "center",
    //       justifyContent: "center",
    //       marginBottom: "40px",
    //     }}
    //   >
    //     <ModalShowcase />
    //   </div>
    //   <div
    //     style={{
    //       display: "flex",
    //       alignItems: "center",
    //       justifyContent: "center",
    //       marginBottom: "40px",
    //     }}
    //   >
    //     <EmployeesShowcase />
    //   </div>
    // <main style={{ padding: 20 }}>
    //   <button onClick={() => setOpen(true)}>Open Modal</button>
    //   <InputModal
    //     isOpen={open}
    //     onClose={() => setOpen(false)}
    //     onSubmit={handleSubmit}
    //   />
    // </main>
    // </div>
    <>
      <LoginPage />
    </>
  );
}
