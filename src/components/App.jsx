import UserList from './UserList/UserList';
import { fetchUsers, fetchUserId } from '../fetch/fetch';
import { useEffect, useState } from 'react';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Box, Container } from './App.styled';

export const App = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [perPage] = useState(3);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setLoading(true);
    const userCard = async () => {
      try {
        const { data } = await fetchUsers();
        const total = data.length;
        const lastUsersIndex = page * perPage;
        const firstUsersIndex = lastUsersIndex - perPage;

        const currentUsers = data.slice(firstUsersIndex, lastUsersIndex);

        setUsers(prevUsers => [...prevUsers, ...currentUsers]);
        setIsVisible(page < Math.ceil(total / perPage));
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    userCard();
  }, [page, perPage]);

  const loadMore = () => {
    setPage(() => page + 1);
  };

  const updateUserFollowers = async (id, followers, isFollowing) => {
    let body;
    !isFollowing
      ? (body = { followers: followers + 1 })
      : (body = { followers: followers - 1 });

    try {
      await fetchUserId({ id, body });
    } catch (error) {
      setError(error.message);
    }

    const updateFollowers = users.map(user => {
      return user.id === id ? { ...user, ...body } : user;
    });
    setUsers(updateFollowers);
  };

  return (
    <Box>
      {users.length > 0 && (
        <UserList users={users} updateUserFollowers={updateUserFollowers} />
      )}
      {loading && <Container> {Loader()} </Container>}
      {isVisible && (
        <Container>
          <Button loadMore={loadMore} />
        </Container>
      )}
      {error && <h2>Something went wrong. Try again.</h2>}
    </Box>
  );
};

export default App;
