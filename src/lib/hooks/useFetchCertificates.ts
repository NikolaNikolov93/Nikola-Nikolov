import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { CertificateType } from "../types/types";
import { useQuery } from "@tanstack/react-query";

const useFetchCertificates = () => {
  return useQuery<CertificateType[], Error>({
    queryKey: ["certificates"],
    queryFn: async () => {
      const querySnapshot = await getDocs(collection(db, "courses"));
      return querySnapshot.docs.map((doc) => doc.data() as CertificateType);
    },
    staleTime: 10000,
  });
};

export default useFetchCertificates;
