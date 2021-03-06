import "./style.css";
const Card = ({ className = null,children, style, ...res }) => {
  const _class = className ? `Card ${className}` : `Card`;
  return (
    <div className={_class} style={style} {...res}>
      {children}
    </div>
  );
};

export default Card;
