import { dbService } from "@/firebase";
import {
  DocumentData,
  OrderByDirection,
  collection,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";

export async function getDb(
  colref: string,
  orderkey?: string,
  order?: OrderByDirection
) {
  const colName = colref;
  const orderKey = orderkey ? orderkey : "id";
  const orderWay = order ? order : "desc";

  const citiesRef = collection(dbService, colName);
  const q = query(citiesRef, orderBy(orderKey, orderWay));
  const querySnapshot = await getDocs(q);
  const dataArr = await querySnapshot.docs.map((doc: DocumentData) => {
    const docData: DocumentData = doc.data();
    const id = doc.id;
    return { id, ...docData };
  });

  return dataArr;
}
