const Message = ({ message, avatar  }) => {
  return (
    <div className="messageWrapper">
      <div className={`content  `}>
        <div className="avatar-message">
          <img src={avatar} alt="" className="m-avatar" />
        </div>
        <div className="message">{message}</div>
      </div>
    </div>
  );
};

export default Message;
