import { useEffect } from "react";

function Razorpay9000() {
  useEffect(() => {
    const rzpPaymentForm = document.getElementById("rzp_payment_form9");
    if (!rzpPaymentForm.hasChildNodes()) {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/payment-button.js";
      script.async = true;
      script.dataset.payment_button_id = "pl_NjtPWqk2PIzGMv";
      rzpPaymentForm.appendChild(script);
    }
  });
  return (
    <span>
      <form id="rzp_payment_form9"></form>
    </span>
  );
}

export default Razorpay9000;