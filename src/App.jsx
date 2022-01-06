import Profile from "./components/social-profile/Profile";
import user from "./components/social-profile/user.json";
import Statistic from "./components/statistics/Statistics";
import data from "./components/statistics/data.json";
import FriendsList from "./components/friend-list/FriendsList";
import friends from "./components/friend-list/friends.json";
import TransactionHistory from './components/transaction-history/TransactionHistory';
import transactions from './components/transaction-history/transactions.json';
import { GlobalStyles } from "./GlobalStyle";
import { Global } from "@emotion/react";

export default function App() {
  return (
      <div>
      <Global styles={GlobalStyles} />
      <Profile
        userName={user.username}
        tag={user.tag}
        place={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistic data = {data} />
         
      <FriendsList friends={friends}  />
      <TransactionHistory transactions={transactions}/>
                
    </div>
  );
}
