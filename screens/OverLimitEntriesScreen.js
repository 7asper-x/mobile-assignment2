import React, { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../services/Firebase";
import EntriesList from "../components/EntriesList";
import Screen from "./Screen";

function OverLimitEntriesScreen({ navigation }) {
    const [entries, setEntries] = useState([]);

    useEffect(() => {
        // Fetch entries from Firebase
        const unsubscribe = onSnapshot(collection(db, "calories"), (snapshot) => {
            if (!snapshot.empty) {
                let newEntries = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                })).filter((entry) => !entry.isReviewed);
                setEntries(newEntries);
            }
        });
        return () => unsubscribe();
    }, []);

    return (
        <Screen>
            <EntriesList entries={entries} navigation={navigation} />
        </Screen>
    );
}

export default OverLimitEntriesScreen;
