const User = ({ avatar, name, LMassage }) => {
  return (
    <div className="chat-user">
      <img src={avatar} alt="" className="avatar-chat" />
      <div className="user-info">
        <h3 className="user-name">{name}</h3>
        <span className="last-m">{LMassage}</span>
      </div>
    </div>
  );
};

export default User;
