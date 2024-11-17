import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebase/firebase";
import { CertificateType } from "../types/types";

export default function useFetchCertificateById(id: string) {
  const [certificate, setCertificate] = useState<CertificateType>();
  const q = query(collection(db, "courses"), where("id", "==", id));

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(q);
      const fetchedCertificate: CertificateType[] = querySnapshot.docs.map(
        (doc) => doc.data() as CertificateType
      );
      setCertificate(fetchedCertificate[0]);
    };
    fetchData();
  }, []);

  return certificate;
}
