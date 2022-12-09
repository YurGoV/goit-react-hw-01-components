import css from 'components/App.module.css';
import { Profile } from './Profile/Profile';
import user from 'data/user.json';
import uploadsData from 'data/data.json';
import { Statistics } from './Statistics/Statistics';

export const App = () => {
  return (
    <div className={css.container} >
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
    </div>
  );
};
