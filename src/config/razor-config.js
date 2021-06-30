const razorOptions = {
  key: 'rzp_test_ERXB8DGAN5yYic', // Enter the Key ID generated from the Dashboard
  amount: '500', // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
  currency: 'INR',
  name: 'Little Tags',
  description: 'Little Tags Test Transaction',
  image: './logo.png',
  //   order_id: `9A33XWu170gUtm_${new Date().toString()}`, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
  handler: function (response) {
    alert(response.razorpay_payment_id);
    alert(response.razorpay_order_id);
    alert(response.razorpay_signature);
  },
  prefill: {
    name: 'Durgesh Singh',
    email: 'singh.durgesh2011@gmail.com',
    contact: '9999999999',
  },
  notes: {
    address: 'Razorpay Corporate Office',
  },
  theme: {
    color: '#d1d1d1',
  },
};

export const proceedToPayWithRazor = (orderId, amount, name, email, contact) => {
  return new Promise((resolve, reject) => {
    if (window) {
      razorOptions.amount = amount * 100;
      razorOptions.prefill = { name, email, contact };
      if (orderId) razorOptions.order_id = orderId;
      razorOptions.handler = (successResponse) => resolve(successResponse);

      const razorInstance = new window.Razorpay(razorOptions);
      razorInstance.open();
      razorInstance.on('payment.failed', function (errorResponse) {
        const {
          code,
          description,
          source,
          step,
          reason,
          metadata: { order_id, payment_id },
        } = errorResponse?.error || {};
        console.log(
          `Payment failed due to ${code} - ${description} - ${source} - ${step} - ${reason} - ${order_id} - ${payment_id}`,
        );
        reject(`Payment failed due to ${reason} - ${description}`);
      });
    } else {
      reject('Something went wrong. Please try after some time.');
    }
  });
};
