import Button from './Button';
import ExpandablePanel from './ExpandablePanel';
import { GoTrashcan } from 'react-icons/go';
import { useDeleteAlbumMutation } from '../store';
import { Fragment } from 'react';

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
      List of the photos in the album.
    </ExpandablePanel>
  );
};

export default AlbumsListItem;
