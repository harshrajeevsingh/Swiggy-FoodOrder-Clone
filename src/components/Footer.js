import { useContext } from "react";
import UserContext from "../utils/userContext";

const Footer = () => {
  // const { user } = useContext(UserContext);
  return (
    <>
      <p className="footer">Made with ❤️ in React</p>
      {/* <p>
        Developed by <strong>{user.name}</strong>
      </p> */}
    </>
  );
};

export default Footer;
