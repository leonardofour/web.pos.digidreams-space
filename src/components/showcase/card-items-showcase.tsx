import React, { useState } from "react";
import ItemCard from "../common/card-items/card-items";
import ExampleCard from "@/assets/card-items.jpg";

const CardItemsShowcase = () => {
  const [quantity, setQuantity] = useState(0);

  return (
    <div style={{ padding: "20px", backgroundColor: "var(--card-bg)" }}>
      <ItemCard
        image={ExampleCard}
        title="Delicious Food Item"
        description="Lorem ipsum dolor sit amet, consecte tur adipiscing elit kesed do eiusmod "
        price={10.0}
        originalPrice={12.0}
        quantity={quantity}
        isPopular={true}
        discount={10}
        onIncrement={() => setQuantity((prev) => prev + 1)}
        onDecrement={() => setQuantity((prev) => Math.max(0, prev - 1))}
      />
    </div>
  );
};

export default CardItemsShowcase;
