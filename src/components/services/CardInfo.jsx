function CardInfo({ image, title, info, btnText, link }) {
  return (
    <div className="item service-item">
      <div className="icon">
        <i>{image}</i>
      </div>
      <h5 className="service-title">{title}</h5>
      <p>{info}</p>
      <a href={link} className="main-button">
        {btnText}
      </a>
    </div>
  );
}

export default CardInfo;
