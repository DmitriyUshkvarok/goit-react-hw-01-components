import SocialProfile from '../components/SocialProfile/SocialProfile';
import Statistics from '../components/Statistics/Statistics';
import TransactionHistory from '../components/TransactionHistory/TransactionHistory';
import FriendList from './FriendList/FriendListUL/FriendList';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';
import user from '../data/user.json';

export default function App() {
  return (
    <div>
      <SocialProfile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <TransactionHistory transactions={transactions} />
      <FriendList friends={friends} />
    </div>
  );
}
