import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { CertificateType } from "../types/types";
import { useQuery } from "@tanstack/react-query";

/**
 * Simulates server delay and error for testing
 */
// const delay = (ms: number) =>
//   new Promise((resolve) => setTimeout(resolve, ms)).then(() => {
//     throw new Error("An unexpected error occured!");
//   });

const useFetchCertificateById = (id: string) => {
  const q = query(collection(db, "courses"), where("id", "==", id));

  return useQuery<CertificateType, Error>({
    queryKey: ["certificate", id],
    queryFn: async () => {
      // await delay(2000); --> used to simulate the server delay
      const querySnapshot = await getDocs(q);

      return querySnapshot.docs[0].data() as CertificateType;
    },
    staleTime: 10000,
  });
};

export default useFetchCertificateById;
