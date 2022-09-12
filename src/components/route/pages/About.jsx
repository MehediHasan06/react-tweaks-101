import { useNavigate, useParams } from "react-router-dom";

export const About = () => {
  const navigate = useNavigate();
  let { profile } = useParams();

  return (
    <div>
      About {profile}
      <br/>
      <button onClick={() => navigate("/")}>Go back to home page</button>
    </div>
  )
}
