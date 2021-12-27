import SocProfRender from "./components/social-profile/SocialProfileRender";
import user from "./components/social-profile/user.json";
import StatisticRender from "./components/statistics/statisticRender";
import data from "./components/statistics/data.json";
export default function App() {
  return (
    <div>
      <SocProfRender
        userName={user.username}
        tag={user.tag}
        place={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <section className="statistics">
        <h2 className="title">Upload stats</h2>
        <ul className="stat-list">
          {data.map((dataItem) => (
            <StatisticRender
              titel={dataItem.label}
              stats={dataItem.percentage}
            />
          ))}
        </ul>
      </section>
    </div>
  );
}
