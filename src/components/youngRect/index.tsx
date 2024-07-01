type Props = {
  pic: string;
  name: string;
  small: string;
};
export const YoungRect = ({ pic, name, small }: Props) => {
  return (
    <div className="card" style={{ width: "100%" }}>
      <img src={pic} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title fw-bold">{name}</h5>
        <p className="card-text">{small}</p>
      </div>
    </div>
  );
};
