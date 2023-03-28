const TitleBox = ({ text }) => {
  return (
    <div className="title-box">
      <div className="title-box__circle-blue"></div>
      <h4 className="title-box__text">{text}</h4>
      <div className="title-box__circle-yellow"></div>
    </div>
  );
};

export default TitleBox;
