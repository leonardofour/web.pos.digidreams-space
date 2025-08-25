import React from "react";
import Modals from "@/components/common/modal/modal";

const ModalShowcase: React.FC = () => {
  const [modal1, setModal1] = React.useState(false);
  const [modal2, setModal2] = React.useState(false);
  const [modal3, setModal3] = React.useState(false);
  const [modal4, setModal4] = React.useState(false);

  const buttonStyle = {
    padding: "10px 20px",
    background: "var(--primary)",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    margin: "5px",
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Enhanced Modal with Bold Text Support</h2>

      <div style={{ marginBottom: "20px" }}>
        <button style={buttonStyle} onClick={() => setModal1(true)}>
          Order Confirmation
        </button>
        <button style={buttonStyle} onClick={() => setModal2(true)}>
          Login Success
        </button>
        <button style={buttonStyle} onClick={() => setModal3(true)}>
          PIN Change Success
        </button>
        <button style={buttonStyle} onClick={() => setModal4(true)}>
          Multiple Bold Texts
        </button>
      </div>

      <Modals
        isOpen={modal1}
        onClose={() => setModal1(false)}
        title="Order Confirmed!"
        message="Order # 289 will be processed in the kitchen, wait for the order ready to serve, thank you!"
        boldTexts={["Order # 289"]}
        primaryText="Done"
      />

      <Modals
        isOpen={modal2}
        onClose={() => setModal2(false)}
        title="Login Success!"
        message="You logged in at 07:58 AM, Good luck and Happy working for today"
        boldTexts={["07:58 AM"]}
        primaryText="Done"
      />

      <Modals
        isOpen={modal3}
        onClose={() => setModal3(false)}
        title="Change PIN Success!"
        message="Your PIN has been changed successfully. Please remember your new PIN for future transactions."
        boldTexts={["PIN"]}
        primaryText="Done"
      />

      <Modals
        isOpen={modal4}
        onClose={() => setModal4(false)}
        title="Payment Successful!"
        message="Your payment of $25.99 for Table 5 has been processed successfully at 14:30 PM"
        boldTexts={["$25.99", "Table 5", "14:30 PM"]}
        showSecondary={true}
        primaryText="Print Receipt"
        secondaryText="Close"
      />
    </div>
  );
};

export default ModalShowcase;
