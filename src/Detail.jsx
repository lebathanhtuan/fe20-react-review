import { useParams } from "react-router-dom";
import logo from "./logo.svg";

function Detail() {
  const params = useParams();
  console.log("🚀 ~ file: Detail.jsx ~ line 6 ~ Detail ~ params", params);

  return <div>Detail</div>;
}

export default Detail;
