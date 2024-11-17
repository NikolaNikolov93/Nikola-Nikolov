import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebase/firebase";
import { CertificateType } from "../types/types";

export default function useFetchCertificates() {
  const [certificates, setCertificates] = useState<CertificateType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "courses"));
      const fetchedCertificates: CertificateType[] = querySnapshot.docs.map(
        (doc) => doc.data() as CertificateType
      );
      setCertificates(fetchedCertificates);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return certificates;
}
