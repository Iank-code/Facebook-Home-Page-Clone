import "./Topbar.css";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
function Topbar() {
  return (
    <div className="topbarContainer">
      {/* Left TopBar */}
      <div className="topbarLeft">
        <span className="logo">MotionSocial</span>
      </div>

      {/* Center TopBar */}
      <div className="topbarCenter">
        <div className="searchbar">
          <SearchIcon className="search" />
          <input
            placeholder="Search for friends, posts or videos"
            className="searchInput"
          />
        </div>

        {/* Right TopBar */}
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>

        <div className="topbarIcons">
          <div className="topbarIconItem">
            <PersonIcon />
            <span className="topbarIconBadge">1</span>
          </div>

          <div className="topbarIconItem">
            <ChatIcon />
            <span className="topbarIconBadge">2</span>
          </div>

          <div className="topbarIconItem">
            <NotificationsActiveIcon />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>

        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Y4W0p2sjv51tINa74k7dvc5QnDsO3qJwAQ&usqp=CAU"
          alt="Profile Image"
          className="topbarImg"
        />
      </div>
    </div>
  );
}

export default Topbar;
