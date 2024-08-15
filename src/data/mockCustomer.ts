import { Customer } from '../types';

const titles = [
  'Software Engineer', 'Product Manager', 'Data Analyst', 'UX Designer',
  'Marketing Specialist', 'Sales Representative', 'HR Manager', 'Financial Analyst',
  'Operations Manager', 'Customer Support Specialist'
];

const cities = [
  'New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia',
  'San Antonio', 'San Diego', 'Dallas', 'San Jose'
];

const states = [
  'NY', 'CA', 'IL', 'TX', 'AZ', 'PA', 'TX', 'CA', 'TX', 'CA'
];

const generateRandomCustomer = (id: number): Customer => {
    const nameIndex = Math.floor(Math.random() * 1000);
    const titleIndex = Math.floor(Math.random() * titles.length);
    const locationIndex = Math.floor(Math.random() * cities.length);
    
    return {
      id: id.toString(),
      name: `Customer ${nameIndex + 1}`,
      title: titles[titleIndex],
      address: `${Math.floor(Math.random() * 9000) + 1000} ${['Main', 'Oak', 'Pine', 'Maple', 'Cedar'][Math.floor(Math.random() * 5)]} St, ${cities[locationIndex]}, ${states[locationIndex]} ${Math.floor(Math.random() * 90000) + 10000}`,
      
    };
  };

export const generateLargeCustomerSet = (): Customer[] => {
  const largeSet: Customer[] = [];
  for (let i = 0; i < 1000; i++) {
    largeSet.push(generateRandomCustomer(i + 1));
  }
  return largeSet;
};

