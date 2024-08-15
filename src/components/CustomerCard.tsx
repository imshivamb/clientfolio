import { CustomerCardProps } from "../types";

const CustomerCard: React.FC<CustomerCardProps> = ({
  customer,
  isSelected,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={` border-gray-200 border-b cursor-pointer transition-colors duration-150 ${
        isSelected ? "bg-gray-200" : "hover:bg-gray-50"
      }`}
    >
      <div className="px-4 py-6">
        <h3 className="text-lg font-semibold text-gray-800">{customer.name}</h3>
        <p className="text-sm text-gray-600 mt-1">{customer.title}</p>
      </div>
    </div>
  );
};

export default CustomerCard;
