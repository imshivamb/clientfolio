import { CustomerListProps } from "../types";
import CustomerCard from "./CustomerCard";

const CustomerList: React.FC<CustomerListProps> = ({
  customers,
  onSelectCustomer,
  selectedCustomerId,
}) => {
  return (
    <div className="h-full overflow-auto p-4 custom-scrollbar">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Customers</h2>
      <div className="">
        {customers.map((customer) => (
          <CustomerCard
            key={customer.id}
            customer={customer}
            isSelected={customer.id === selectedCustomerId}
            onClick={() => onSelectCustomer(customer)}
          />
        ))}
      </div>
    </div>
  );
};

export default CustomerList;
