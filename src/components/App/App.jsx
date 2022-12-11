import { Profile } from '../Profile/Profile';
import user from 'data/user.json';
import uploadsData from 'data/data.json';
import { Statistics } from '../Statistics/Statistics';
import friends from 'data/friends.json';
import { FriendsList } from '../FriendsList/FriendsList';
import transactions from 'data/transactions.json';
import { TransactionHistory } from '../Transactions/TransactionHistory';
import {Container} from './App.styled';


export const App = () => {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />

      <Statistics title="Upload stats" stats={uploadsData}/>

      <FriendsList friends={friends} />

      <TransactionHistory transactions={transactions} />
    </Container>
  );
};
