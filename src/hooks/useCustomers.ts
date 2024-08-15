import { useEffect, useState } from "react"
import { Customer, CustomerState } from "../types"
import { generateLargeCustomerSet } from "../data/mockCustomer";

export const useCustomers = (): CustomerState => {
    const [customers, setCustomers] = useState<Customer[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCustomers = async () => {
            try {
                setLoading(true)

                await new Promise(resolve => setTimeout(resolve, 1000))
                const data = generateLargeCustomerSet();
                setCustomers(data)
                setError(null)
            } catch (error) {
                setError('Failed to fetch customers')
                console.error('Error fetching customers', error)
            } finally {
                setLoading(false)
            }
        }
        fetchCustomers();
    }, [])

    return { customers, loading, error }
}