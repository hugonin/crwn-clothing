import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51IxICYJKih7oF6YSGb4cCXUje5ilTXuUWbcZ55FPIW15J8dAUDvrc3218QQ7Trrb1jARs6F7KGkoqkmMPCbmx5C200VERaxg6s";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Succesful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="JeeAsH Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/Xzy.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
