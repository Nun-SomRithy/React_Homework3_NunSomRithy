import "./styles.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Skeleton from "./component/Skeleton";
import 'bootstrap/dist/css/bootstrap.min.css';
import CardProduct from "./component/CardProduct";
export default function App() {
  const [userList, setUserList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const showUsers = () => {
    setTimeout(() => {
      axios
        .get(
          "https://api.escuelajs.co/api/v1/products"
        )
        .then((res) => {
          setUserList(res.data);
          setIsLoading(false);
        });
    }, []);
  };

  useEffect(() => {
    setIsLoading(true);
    showUsers();
  }, []);

  return (
    <div className="container">
      <div className="row">
        {isLoading ? <Skeleton /> : userList.map((user, index) => (
          <CardProduct index={index} description={user.description} title={user.title} img={user.images[0]} />
        ))}
      </div>
    </div>
  );

}