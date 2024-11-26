import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { useQuery } from "@tanstack/react-query";
import { UserType } from "../types/types";

/**
 *
 * @returns The portfolio user data. Can be used anywhere to provide the portfolio user data.
 */
const useFetchUser = () => {
  return useQuery<UserType[], Error>({
    queryKey: ["user"],
    queryFn: async () => {
      const querySnapshot = await getDocs(collection(db, "user"));
      console.log(querySnapshot);

      return querySnapshot.docs.map((doc) => doc.data() as UserType);
    },
    staleTime: 10000,
  });
};

export default useFetchUser;
