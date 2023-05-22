import Button from './Button';
import ExpandablePanel from './ExpandablePanel';
import { GoTrashcan } from 'react-icons/go';
import { useDeleteAlbumMutation } from '../store';
import { Fragment } from 'react';
import PhotosList from './PhotosList';

const AlbumsListItem = ({ album }) => {
  const [deleteAlbum, deleteAlbumResults] = useDeleteAlbumMutation();

  const handleDeleteAlbum = () => {
    deleteAlbum(album);
  };

  const header = (
    <Fragment>
      <Button
        className="mr-2"
        onClick={handleDeleteAlbum}
        loading={deleteAlbumResults.isLoading}
      >
        <GoTrashcan />
      </Button>
      {album.title}
    </Fragment>
  );

  return (
    <ExpandablePanel key={album.id} header={header}>
      <PhotosList album={album} />
    </ExpandablePanel>
  );
};

export default AlbumsListItem;
