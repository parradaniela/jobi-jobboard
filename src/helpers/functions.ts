// firestore imports
import { collection, getDocs } from "firebase/firestore";
import { db } from "../services/firebase";
//react imports
import { Dispatch } from "react";

//TODO: Explore ways to use generic types rather than any type
export const fetchFirebaseCollection = async (collectionName: string, setterFunc: Dispatch<React.SetStateAction<any>>) => {
    try {
        await getDocs(collection(db, collectionName))
            .then((dataSnapshot) => {
                const newData = dataSnapshot.docs
                    .map((doc) => (
                        { ...doc.data(), id: doc.id }
                    )
                );
                setterFunc(newData)
            })
    }
    catch (error) {
        //TODO: Don't forget better error handling
        console.log(error)
    }
}