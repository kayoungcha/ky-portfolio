"use client";
import { useEffect, useState } from "react";
import { dbService } from "../src/firebase";
import {
  DocumentData,
  OrderByDirection,
  QueryCompositeFilterConstraint,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";
// import firebase from "firebase/compat/app";

export async function useReadDb(
  colref: string,
  orderkey?: string,
  order?: OrderByDirection
) {
  const colName = colref;
  const orderKey = orderkey ? orderkey : "id";
  const orderWay = order ? order : "desc";
  const [data, setData] = useState<DocumentData>([]);

  useEffect(() => {
    const data = async function getDb() {
      const citiesRef = collection(dbService, colName);
      const q = query(citiesRef, orderBy(orderKey, orderWay));

      const querySnapshot = await getDocs(q);

      console.log({ querySnapshot });

      const dataArr = querySnapshot.docs.map((data: DocumentData) => {
        console.log({ data });

        const docData: DocumentData = data.payload.doc.data();
        const id = data.payload.doc.id;
        return { id, ...data };
      });

      setData(dataArr);
    };
  }, []);

  return data;
}

export async function useUpdateAt() {
  console.log({ dbService });

  try {
    const docRef = await addDoc(collection(dbService, "users"), {
      first: "Ada",
      last: "Lovelace",
      born: 1815,
    });
    console.log({ docRef });

    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.log("????");

    console.error("Error adding document: ", e);
  }
}
