import { useNavigate } from "react-router-dom";

export const Menu = () => {
  const navigate = useNavigate();
  return (
    <div>
      Menu
      <button onClick={() => navigate("/")}>Go back to home page</button>
    </div>
  )
}
