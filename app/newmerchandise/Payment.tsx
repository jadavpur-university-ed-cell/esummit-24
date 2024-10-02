import { Input } from '@/components/ui/input';
import React, { useState } from 'react';

interface PaymentProps {
  token: {
    uid: string;
    transId: string;
  };
}

const Payment: React.FC<PaymentProps> = ({ token }) => {
  const [bankId, setBankId] = useState<string>('');
  const [paymentStatus, setPaymentStatus] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      // Simulate payment processing with a bank
      const response = await fetch('/api/process-payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          uid: token.uid,
          transId: token.transId,
          bankId,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setPaymentStatus('Payment Successful');
      } else {
        setPaymentStatus('Payment Failed');
      }
    } catch (error) {
      console.error('Error processing payment:', error);
      setPaymentStatus('Payment Failed');
    }
  };

  return (
    <div className="p-6">
        <img src="/payment1.jpg" alt="Payment1" width={200} height={200} />
        <img src="/payment2.jpg" alt="Payment2" width={200} height={200} />
      <h2 className="text-lg text-[#fcbf49] font-semibold mb-4">Complete Your Payment</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
            <label className="block text-sm font-medium text-gray-300" htmlFor="email">Transaction ID</label>
            <Input className="text-gray-300 bg-[#101720e7] focus:ring-gray-500" type='number' placeholder="Enter Transaction ID" value={token.transId} />

            <label className="block text-sm font-medium text-gray-300" htmlFor="email">UTR/Vendor ID</label>
            <Input className="text-gray-300 bg-[#101720e7] focus:ring-gray-500" placeholder="Enter Vendor ID" value={token.transId} />
        </div>
        {/* //TODO: register query in the database */}

        <button
          type="submit"
          className="bg-[#fcbf49] text-white py-2 px-4 rounded hover:bg-[#fabf49] focus:outline-none">
          Submit Payment
        </button>
      </form>
      {paymentStatus && (
        <p className={`mt-4 font-semibold ${paymentStatus === 'Payment Successful' ? 'text-green-500' : 'text-red-500'}`}>
          {paymentStatus}
        </p>
      )}
    </div>
  );
};

export default Payment;
