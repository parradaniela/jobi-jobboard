// firestore imports
import { collection, getDocs} from "firebase/firestore";
import { db } from "../services/firebase";
// react imports
import { createContext, useEffect, useState } from "react";
// types
import { ContextChildren, DatabaseContextInterface, JobData } from "../types/databaseTypes";
import { initDatabaseContextState, initJobDataState } from "./initialStates";

export const DatabaseContext = createContext<DatabaseContextInterface>(initDatabaseContextState);

const DatabaseProvider = ({ children }: ContextChildren) => {
    const [jobData, setJobData] = useState<JobData[]>(initJobDataState)

    const fetchData = async () => {
        await getDocs(collection(db, "jobList"))
            .then((dataSnapshot) => {
                const newData = dataSnapshot.docs
                    .map((doc) => (
                        { ...doc.data()}
                    )
                    ) as JobData[];
                    console.log(newData)
                setJobData(newData)
            }) //TODO: Don't forget error handling
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <DatabaseContext.Provider
            value={{jobData}}
        >
            {children}
        </DatabaseContext.Provider>
    )
}

export default DatabaseProvider;
        
