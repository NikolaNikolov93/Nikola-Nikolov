import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebase/firebase";

type UserType = {
  age: number;
  birthDate?: Date;
  birthYear: string;
  city: string;
  country: string;
  firstName: string;
  lastName: string;
  secondName: string;
};

export default function useFetchUser() {
  const [user, setUser] = useState<UserType | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "user"));
      querySnapshot.forEach((doc) => {
        setUser(doc.data() as UserType);
      });
    };
    fetchData();
  }, []);

  return user;
}
