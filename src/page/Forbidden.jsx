import { useNavigate } from "react-router-dom";

const Forbidden = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="forbidden-page">
        <div
          className="forbidden-msg"
          onClick={() => {
            navigate("/");
          }}
        >접근금지페이지
        </div>
      </div>
    </>
  );
};

export default Forbidden;
