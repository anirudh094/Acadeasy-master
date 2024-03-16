import { useEffect } from "react";

function Razorpay13000() {
  useEffect(() => {
    const rzpPaymentForm = document.getElementById("rzp_payment_form13");
    if (!rzpPaymentForm.hasChildNodes()) {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/payment-button.js";
      script.async = true;
      script.dataset.payment_button_id = "pl_NjtQzOs5cd4DJH";
      rzpPaymentForm.appendChild(script);
    }
  });
  return (
    <span>
      <form id="rzp_payment_form13"></form>
    </span>
  );
}

export default Razorpay13000;
