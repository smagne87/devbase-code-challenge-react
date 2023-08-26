import axios from "axios";
import { useMainLayout } from "../../layout/MainLayout";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

type GitUser = {
  avatar_url: string;
  name: string;
  location: string;
}

const User = () => {
  const { setBackEnabled, setBackUrl, reset } = useMainLayout();
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState<GitUser>();

  const loadUserData = async () => {
    const response = await axios.get(`https://api.github.com/users/${id}`);
    setUserData(response.data);
    setLoading(false);
  };

  useEffect(() => {
    if (id) {
      loadUserData();
    }
  }, [id]);

  useEffect(() => {
    setBackEnabled(true);
    setBackUrl("/");
    return () => {
      reset();
    };
  }, []);

  return (
    <div>
      {loading && <p>Loading</p>}
      {!loading && userData && (
        <div className="flex gap-2">
          <div>
            <img src={userData.avatar_url} className="rounded-full w-14" />
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-semibold">{userData.name}</h2>
            <p className="font-normal text-gray-400 text-sm">{userData.location}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default User;
