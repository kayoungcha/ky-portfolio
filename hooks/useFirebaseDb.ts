"use client";
import { useEffect, useState } from "react";
import { dbService } from "../src/firebase";
import {
  DocumentData,
  OrderByDirection,
  doc,
  getDocs,
  orderBy,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";

//컬렉션 가져오기
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

      const docId = doc.id;
      return { docId, ...docData };
    });

    setData(dataArr);
  }

  useEffect(() => {
    getDb();
  }, [colref]);

  return data;
}

//컬렉션안 특정 도큐먼트만 가져오기
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

//데이터 업데이트 특정 도큐먼트만 업데이트시 path === 'collection명/docId'
export async function updateAt(path: string, obj: Object) {
  const segments = path.split("/").filter((v) => v);

  try {
    if (segments.length % 2) {
      const docRef = await addDoc(collection(dbService, path), obj);
    } else {
      const docRef = await setDoc(doc(dbService, path), obj, { merge: true });
    }
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
