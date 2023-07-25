import {
  collection,
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "./Firebase";

export async function deleteFromDB(docID) {
  try {
    await deleteDoc(doc(db, "calories", docID));
  } catch (err) {
    console.log("delete doc ", err);
  }
}

export async function writeToDB(calories) {
  try {
    await addDoc(collection(db, "calories"), calories);
  } catch (err) {
    console.log("write to DB ", err);
  }
}

export async function updateToDB(docID) {
  try {
    await updateDoc(doc(db, "calories", docID), {
      isReviewed: true,
    });
  } catch (err) {
    console.log("update to DB ", err);
  }
}
