import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Harsh Singh",
    email: "harsh@gmail.com",
  },
});

export default UserContext;
