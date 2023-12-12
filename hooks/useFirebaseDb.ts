"use client";
import { useEffect, useState } from "react";
import { dbService } from "../src/firebase";
import {
  DocumentData,
  OrderByDirection,
  getDocs,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";

export function useReadDb(
  colref: string,
  orderkey?: string,
  order?: OrderByDirection
) {
  const colName = colref;
  const orderKey = orderkey ? orderkey : "id";
  const orderWay = order ? order : "asc";
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

    setData(dataArr);
  }

  useEffect(() => {
    getDb();
  }, [colref]);

  return data;
}

export async function readDoc(colref: string, key: string, value: string) {
  const colName = colref;

  const citiesRef = collection(dbService, colName);
  const q = query(citiesRef, where(key, "==", value));

  const querySnapshot = await getDocs(q);

  const dataArr = await querySnapshot.docs.map((doc: DocumentData) => {
    const docData: DocumentData = doc.data();
    const id = doc.id;
    return { id, ...docData };
  });

  return dataArr;
}

export async function updateAt(path: string, obj: Object) {
  try {
    const docRef = await addDoc(collection(dbService, path), obj);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
