// firestore imports
import { collection, getDocs} from "firebase/firestore";
import { db } from "../services/firebase";
// react imports
import { createContext, ReactNode, useEffect, useState } from "react";

type Children = { children: ReactNode }

export const DatabaseContext = createContext({});


const DatabaseProvider = ({ children }: Children) => {
    const [jobData, setJobData] = useState<any>({})

    const fetchData = async () => {
        await getDocs(collection(db, "jobList"))
            .then((dataSnapshot) => {
                const newData = dataSnapshot.docs
                    .map((doc) => ({ ...doc.data(), id: doc.id }));
                setJobData(newData)
                console.log(jobData, newData)
            }) //TODO: Don't forget error handling
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <DatabaseContext.Provider
            value={(
                jobData
            )}
        >
            {children}
        </DatabaseContext.Provider>
    )
}

export default DatabaseProvider;
        
