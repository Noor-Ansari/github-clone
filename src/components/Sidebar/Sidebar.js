import "./Sidebar.css";
import GroupOutlinedIcon from "@material-ui/icons/GroupOutlined";
import GradeOutlinedIcon from "@material-ui/icons/GradeOutlined";

function Sidebar({userInfo}) {
  console.log(userInfo);
  return (
    <div className="container">
      <img
        className="profile__pic"
        src={userInfo.avatar_url}
        alt={userInfo.login}
      />
      <h1>{userInfo.name}</h1>
      <h3>{userInfo.login}</h3>
      <p className="bio">{userInfo.bio}</p>
      <button>Edit profile</button>
      <div className="additional__information">
        <GroupOutlinedIcon />
        <p>
          {userInfo.followers} followers {userInfo.following} following
        </p>
        <GradeOutlinedIcon />
        <p>{userInfo.public_gists}</p>
      </div>
    </div>
  );
}

export default Sidebar;
