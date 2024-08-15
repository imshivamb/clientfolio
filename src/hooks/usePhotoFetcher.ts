import { useState, useEffect } from 'react';
import { Photo } from '../types';

const API_URL = 'https://api.unsplash.com/photos/random?count=9';
const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

interface UnsplashPhoto {
    id: string;
    urls: {
      small: string;
    };
    alt_description: string | null;
  }

  interface CustomerPhotos {
    [customerId: string]: Photo[];
  }
  
  export const usePhotoFetcher = (customerId: string) => {
    const [customerPhotos, setCustomerPhotos] = useState<CustomerPhotos>({});
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
  
    const fetchPhotosForCustomer = async (id: string) => {
      if (!ACCESS_KEY) {
        setError('Unsplash API key is missing');
        setLoading(false);
        return;
      }
  
      try {
        setLoading(true);
        const response = await fetch(API_URL, {
          headers: {
            Authorization: `Client-ID ${ACCESS_KEY}`
          }
        });
        if (!response.ok) {
          throw new Error('Failed to fetch photos');
        }
        const data = await response.json();
        const fetchedPhotos: Photo[] = data.map((item: UnsplashPhoto) => ({
          id: item.id,
          url: item.urls.small,
          alt: item.alt_description || 'Unsplash photo'
        }));
        
        setCustomerPhotos(prev => ({
          ...prev,
          [id]: fetchedPhotos
        }));
        setError(null);
      } catch (err) {
        setError('Error fetching photos');
        console.error('Error fetching photos:', err);
      } finally {
        setLoading(false);
      }
    };
  
    useEffect(() => {
      if (!customerPhotos[customerId]) {
        fetchPhotosForCustomer(customerId);
      }
      
      const interval = setInterval(() => {
        fetchPhotosForCustomer(customerId);
      }, 10000);
  
      return () => clearInterval(interval);
    }, [customerId]);
  
    return { 
      photos: customerPhotos[customerId] || [], 
      loading, 
      error 
    };
  };