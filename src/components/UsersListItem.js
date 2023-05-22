import { GoTrashcan } from 'react-icons/go';
import Button from './Button';
import { deleteUser } from '../store';
import { useThunk } from '../hooks/use-thunk';
import { Fragment } from 'react';
import ExpandablePanel from './ExpandablePanel';
import AlbumsList from './AlbumsList';

const UsersListItem = ({ user }) => {
  const [doDeleteUsers, isDeletingUsers, deletingUsersError] =
    useThunk(deleteUser);

  const handleDeleteUser = () => {
    doDeleteUsers(user);
  };

  const header = (
    <Fragment>
      <Button danger className="mr-3" loading={isDeletingUsers}>
        <GoTrashcan onClick={handleDeleteUser} />
      </Button>
      {deletingUsersError && <div>Error deleting user </div>}
      {user.name}
    </Fragment>
  );

  return (
    <ExpandablePanel header={header}>
      <AlbumsList user={user} />
    </ExpandablePanel>
  );
};

export default UsersListItem;
