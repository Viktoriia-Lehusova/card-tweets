import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import { fetchUsers } from '../../fetch/fetch';
import {
  StyledItem,
  StyledList,
  StyledImg,
  Logo,
  Icon,
  Line,
  Ellipse,
  Text,
  Button,
} from './UserList.styled';

export const UserList = ({ users, updateUserFollowers }) => {
  const [allUsers, setAllUsers] = useState([]);
  const [follow, setFollow] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await fetchUsers();
      setAllUsers(data);
    })();
  }, []);

  useEffect(() => {
    const storedFollow = localStorage.getItem('follow');
    if (storedFollow) {
      setFollow(JSON.parse(storedFollow));
    } else {
      const newState = new Array(allUsers.length).fill(false);
      setFollow(newState);
    }
  }, [allUsers.length]);

  const handleChangeFollowers = (id, followers, isFollowing, i) => {
    const updateFollower = follow.map((el, idx) => {
      if (idx === i) {
        return !el;
      }
      return el;
    });
    setFollow(updateFollower);
    localStorage.setItem('follow', JSON.stringify(updateFollower));
    updateUserFollowers(id, followers, isFollowing);
  };

  return (
    <StyledList>
      {users.map(({ id, user, tweets, followers, avatar }, idx) => (
        <StyledItem key={nanoid()}>
          <Logo src={require('../../images/Logo.png')} alt="logo" />
          <Icon src={require('../../images/Icon.png')} alt="picture" />
          <Line></Line>
          <Ellipse></Ellipse>
          <StyledImg src={avatar} alt={user} />
          <Text>{tweets} tweets</Text>
          <Text>
            {(followers + 1).toLocaleString('en-US')}
            <span> followers</span>
          </Text>
          <Button
            type="button"
            onClick={() =>
              handleChangeFollowers(id, followers, follow[idx], idx)
            }
            followed={follow[idx]}
          >
            {follow[idx] ? 'Following' : 'Follow'}
          </Button>
        </StyledItem>
      ))}
    </StyledList>
  );
};

export default UserList;
