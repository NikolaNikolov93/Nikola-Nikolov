//Firebase imports
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase";

//React Query imports
import { useQuery } from "@tanstack/react-query";

//Types import
import { CertificateType } from "../types/types";

/**
 * Simulates server delay and error for testing
 */
// const delay = (ms: number) =>
//   new Promise((resolve) => setTimeout(resolve, ms)).then(() => {
//     throw new Error("An unexpected error occured!");
//   });

/**
 *
 * @returns The fetched certificates or Error using React Query
 */
const useFetchCertificates = () => {
  return useQuery<CertificateType[], Error>({
    queryKey: ["certificates"],
    queryFn: async () => {
      /**
       * Used to simulate the server delay.
       */
      // await delay(2000);
      const querySnapshot = await getDocs(collection(db, "courses"));
      return querySnapshot.docs.map((doc) => doc.data() as CertificateType);
    },
    //Caching --> The collection is cached for 10secs
    staleTime: 10000,
  });
};

export default useFetchCertificates;
