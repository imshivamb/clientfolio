export interface Customer {
    id: string,
    name: string,
    title: string,
    address: string,

}

export interface Photo {
    id: string,
    url: string,
    alt: string,
}

export interface CustomerListProps {
    customers: Customer[],
    onSelectCustomer: (customer: Customer) => void,
    selectedCustomerId: string | undefined,
}

export interface CustomerCardProps {
    customer: Customer,
    isSelected: boolean,
    onClick: () => void
}

export interface CustomerDetailsProps {
    customer: Customer;
}

export interface PhotoGridProps {
    photos: Photo[];
}

export interface CustomerState {
    customers: Customer[];
    loading: boolean;
    error: string | null;
}

export interface PhotoState {
    photos: Photo[];
    loading: boolean;
    error: string | null;
}