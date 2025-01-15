import { db } from "./Firebase";
import {
  addDoc,
  collection,
  DocumentData,
  limit,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";

const leaderboardCollection = collection(db, "leaderboard");

export const addScore = async (name: any, score: any) => {
  await addDoc(leaderboardCollection, { name, score, timestamp: new Date() });
};
export interface LeaderboardEntry {
  name: string;
  score: number;
}
export const subscribeToLeaderboard = (
  callback: (arg0: LeaderboardEntry[]) => void,
) => {
  const q = query(leaderboardCollection, orderBy("score", "desc"), limit(10));
  return onSnapshot(q, (snapshot) => {
    const leaderboard = snapshot.docs.map((doc) => doc.data());
    callback(leaderboard as LeaderboardEntry[]);
  });
};
