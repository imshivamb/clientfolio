import React, { useEffect, useState } from "react";
import { useCustomers } from "./hooks/useCustomers";
import { Customer } from "./types";
import CustomerList from "./components/CustomerList";
import CustomerDetails from "./components/CustomerDetails";

const App: React.FC = () => {
  const { customers, loading, error } = useCustomers();
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(
    null
  );

  useEffect(() => {
    if (customers.length > 0 && !selectedCustomer) {
      setSelectedCustomer(customers[0]);
    }
  }, [customers, selectedCustomer]);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center w-full">
        Loading...
      </div>
    );
  }
  if (error)
    return (
      <div className="flex items-center justify-center h-screen text-red-500">
        Error: {error}
      </div>
    );

  return (
    <div className="flex h-screen w-full">
      <div className="w-1/4 border-r border-gray-200 overflow-hidden">
        <CustomerList
          customers={customers}
          onSelectCustomer={setSelectedCustomer}
          selectedCustomerId={selectedCustomer?.id}
        />
      </div>
      <div className="w-3/4 p-6 overflow-auto">
        {selectedCustomer ? (
          <CustomerDetails customer={selectedCustomer} />
        ) : (
          <p className="text-gray-500 text-center mt-10">
            Select a customer to view details
          </p>
        )}
      </div>
    </div>
  );
};

export default App;
