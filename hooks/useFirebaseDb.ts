"use client";
import { useEffect, useState } from "react";
import { dbService } from "../src/firebase";
import {
  DocumentData,
  OrderByDirection,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";

export function useReadDb(
  colref: string,
  orderkey?: string,
  order?: OrderByDirection
) {
  const colName = colref;
  const orderKey = orderkey ? orderkey : "id";
  const orderWay = order ? order : "desc";
  const [data, setData] = useState<Array<DocumentData>>([]);

  async function getDb() {
    const citiesRef = collection(dbService, colName);
    const q = query(citiesRef, orderBy(orderKey, orderWay));
    const querySnapshot = await getDocs(q);
    const dataArr = await querySnapshot.docs.map((doc: DocumentData) => {
      const docData: DocumentData = doc.data();
      const id = doc.id;
      return { id, ...docData };
    });

    console.log({ dataArr });

    setData(dataArr);
  }

  useEffect(() => {
    getDb();
  }, [colref]);

  return data;
}

export async function updateAt(path: string, obj: Object) {
  try {
    const docRef = await addDoc(collection(dbService, path), obj);
    console.log({ docRef });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.log("????");
    console.error("Error adding document: ", e);
  }
}
