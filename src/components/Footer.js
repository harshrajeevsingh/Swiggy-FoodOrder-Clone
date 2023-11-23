import { useContext } from "react";
import UserContext from "../utils/userContext";

const Footer = () => {
  // const { user } = useContext(UserContext);
  return (
    <>
      <p className="footer">Footer</p>
      {/* <p>
        Developed by <strong>{user.name}</strong>
      </p> */}
    </>
  );
};

export default Footer;
