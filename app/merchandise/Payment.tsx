import { Input } from '@/components/ui/input';
import React, { useState } from 'react';
import Image from 'next/image';


const Payment: React.FC<{uid:string}> = ({ uid }) => {
  const [token, setToken] = useState<{
    transId:string,
    bankId:string
  }>({
    transId:'',
    bankId:''
  });
  const [loading, setLoading]  = useState(false);
  const [paymentStatus, setPaymentStatus] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Simulate payment processing with a bank
      const response = await fetch('/api/process-payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          uid: uid,
          transId: token.transId,
          bankId : token.bankId,
        }),
        cache:"no-cache"
      });

      const result = await response.json();

      if (result.success) {
        setPaymentStatus(result.paymentStatus);
      } else {
        setPaymentStatus('Payment Failed');
      }
    } catch (error) {
      console.error('Error processing payment:', error);
      setPaymentStatus('Payment Failed');
    }
    setLoading(false);
  };

  return (
    <div className="p-6">
            <h2 className="text-lg text-[#fcbf49] flex justify-center font-semibold mb-4">Complete Your Payment</h2>
            <p className="text-sm text-gray-400 text-center mb-2">
             Scan Any One of the Two QR codes provided to below, and pay via any UPI App.<br/>The Shirt will be provided to you on the event day. <br/>To change the size of the shirt, change your shirt size in the Profile tab.</p>

      <div className="flex justify-center space-x-4">
        <Image src="/payment1.jpg" alt="Payment1" width={200} height={200} />
        <Image src="/payment2.jpg" alt="Payment2" width={200} height={200} />
        </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        

        <div className="flex flex-col justify-center items-center">
  <div className="w-full max-w-md">
    <label className="block text-sm font-medium text-gray-200" htmlFor="transId">Transaction ID</label>
    <Input
      className="peer block w-full text-gray-300 bg-[#101720e7] focus:ring-gray-500 rounded-md px-3 py-2"
      type="number"
      placeholder="Enter Transaction ID"
      value={token.transId}
      onChange={(e) => {
        setToken((prev) => {
          let obj = { ...prev };
          obj.transId = e.target.value;
          return obj;
        });
      }}
    />
    <label className="block text-sm font-medium text-gray-200 mt-4" htmlFor="bankId">UTR/Vendor ID</label>
    <Input
      className="peer block w-full text-gray-300 bg-[#101720e7] focus:ring-gray-500 rounded-md px-3 py-2"
      type="text"
      placeholder="Enter Vendor ID"
      value={token.bankId}
      onChange={(e) => {
        setToken((prev) => {
          let obj = { ...prev };
          obj.bankId = e.target.value;
          return obj;
        });
      }}
    />
    <br />
    <button
      type="submit"
      className="bg-[#fcbf49] text-white py-2 px-4 rounded-full hover:bg-[#fabf49] focus:outline-none mt-4 w-full"
    >
      {!loading ? "Submit Payment" : "Please wait..."}
      </button>
     </div>  
     </div>
      </form>
      {paymentStatus && (
        <p className={`mt-4 font-semibold ${paymentStatus === 'pending' ? 'text-yellow-500' : 'text-red-500'}`}>
          {paymentStatus}
        </p>
      )}
    </div>
  );
};

export default Payment;
