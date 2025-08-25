import OrderState from "@/components/common/order/order-state";

export default function Example() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "auto",
        padding: "20px",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "200px",
          height: "auto",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <OrderState status="ready" subtext="Ready to serve" />
        <OrderState status="in-progress" subtext="Cooking Now" />
        <OrderState status="in-progress" subtext="In the Kitchen" />
        <OrderState status="completed" subtext="Waiting For Payment" />
        <OrderState status="completed" subtext="Order Completed" />
      </div>
    </div>
  );
}
