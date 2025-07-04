import { Link } from "react-router-dom";


export default function NotFound() {
  return (
    <div style={{ textAlign: "center", paddding: "50px" }}>
      <h1>404 - Not Found Page.</h1>
      <Link to ="/">Go Back to Home</Link>
    </div>
  );
}
