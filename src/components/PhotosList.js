import { useFetchPhotosQuery, useAddPhotoMutation } from '../store';
import Skeleton from './Skeleton';
import PhotosListItem from './PhotosListItem';
import Button from './Button';

const PhotosList = ({ album }) => {
  const { data, error, isFetching } = useFetchPhotosQuery(album);
  const [addPhoto, addPhotoResults] = useAddPhotoMutation();

  const handleAddPhoto = () => {
    addPhoto(album);
  };

  let content;
  if (isFetching) {
    content = <Skeleton className="w-8 h-8" times={4} />;
  } else if (error) {
    content = <div>Error fetching photos...</div>;
  } else {
    content = data.map((photo) => {
      return <PhotosListItem key={photo.id} photo={photo} />;
    });
  }

  return (
    <div>
      <div className="m-2 flex flex-row justify-between items-center">
        <h3 className="text-lg font-bold">Photos In {album.title}</h3>
        <Button
          secondary
          onClick={handleAddPhoto}
          loading={addPhotoResults.isLoading}
        >
          + Add Photo
        </Button>
      </div>
      <div className="m-8 flex flex-row flex-wrap justify-center">
        {content}
      </div>
    </div>
  );
};

export default PhotosList;
