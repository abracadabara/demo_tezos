// TODO 8 - Fetch storage of the Lottery by completing fetchStorage
import axios from "axios";

export const fetchStorage = async () => {
  const res = await axios.get(
    "https://api.jakartanet.tzkt.io/v1/contracts/KT1KXd9697MdB8X73bAu3XsPVC393dHjuVnC/storage"
  );
  return res.data;
};
