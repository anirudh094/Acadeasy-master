import { useEffect } from "react";

function Razorpay5000() {
  useEffect(() => {
    const rzpPaymentForm = document.getElementById("rzp_payment_form5");
    if (!rzpPaymentForm.hasChildNodes()) {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/payment-button.js";
      script.async = true;
      script.dataset.payment_button_id = "pl_NTLaNNpA9rAWTJ";
      rzpPaymentForm.appendChild(script);
    }
  });
  return (
    <span>
      <form id="rzp_payment_form5"></form>
    </span>
  );
}

export default Razorpay5000;
