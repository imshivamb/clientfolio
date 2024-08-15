// src/components/CustomerDetails.tsx

import React from "react";
import { Customer } from "../types";
import PhotoGrid from "./PhotoGrid";

interface CustomerDetailsProps {
  customer: Customer;
}

const CustomerDetails: React.FC<CustomerDetailsProps> = ({ customer }) => {
  return (
    <div className="flex items-center justify-center flex-col">
      <h2 className="text-2xl font-bold mb-4">{customer.name}</h2>
      <p className="text-gray-600 mb-2">{customer.title}</p>
      <p className="text-gray-600">{customer.address}</p>
      <h3 className="text-xl font-semibold mb-4 mt-4">Photo Gallery</h3>
      <PhotoGrid customerId={customer.id} />
    </div>
  );
};

export default CustomerDetails;
