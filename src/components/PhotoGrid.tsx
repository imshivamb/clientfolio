import React from "react";
import { usePhotoFetcher } from "../hooks/usePhotoFetcher";

interface PhotoGridProps {
  customerId: string;
}

const PhotoGrid: React.FC<PhotoGridProps> = ({ customerId }) => {
  const { photos, loading, error } = usePhotoFetcher(customerId);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-gray-500">Loading photos...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-3 gap-4">
      {photos.map((photo) => (
        <div key={photo.id} className="aspect-square">
          <img
            src={photo.url}
            alt={photo.alt}
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
      ))}
    </div>
  );
};

export default PhotoGrid;
