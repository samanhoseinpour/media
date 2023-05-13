import { GoTrashcan } from 'react-icons/go';
import Button from './Button';
import { deleteUser } from '../store';
import { useThunk } from '../hooks/use-thunk';

const UsersListItem = ({ user }) => {
  const [doDeleteUsers, isDeletingUsers, deletingUsersError] =
    useThunk(deleteUser);

  const handleDeleteUser = () => {
    doDeleteUsers(user);
  };

  return (
    <div className="mb-2 border rounded">
      <div className="flex p-2 justify-between items-center cursor-pointer">
        <div className="flex flex-row items-center justify-between">
          <Button className="mr-3" loading={isDeletingUsers}>
            <GoTrashcan onClick={handleDeleteUser} />
          </Button>
          {deletingUsersError && <div>Error deleting user </div>}
          {user.name}
        </div>
      </div>
    </div>
  );
};

export default UsersListItem;
