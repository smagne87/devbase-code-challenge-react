import { useNavigate } from "react-router-dom";

const GIT_USERS = ["GrahamCampbell", "fabpot", "weierophinney", "rkh", "josh"];

const Home = () => {
  const history = useNavigate();
  return (
    <div>
      <h1 className="text-2xl font-bold">Top 5 GitHub Users</h1>
      <p>Tap the username to see more information</p>
      <div className="flex flex-wrap gap-2">
        {GIT_USERS.map((gu) => (
          <button
            className="bg-blue-700 hover:bg-blue-400 px-3 py-2 text-white rounded"
            onClick={() => {
              history(`/user/${gu}`);
            }}
            key={gu}
          >
            {gu}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Home;
