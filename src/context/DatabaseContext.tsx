
// react imports
import { createContext, useEffect, useState } from "react";
// types
import { ContextChildren, DatabaseContextInterface, JobData } from "../types/dataTypes";
import { initDatabaseContextState, initJobDataState } from "./initialStates";
import { fetchFirebaseCollection } from "../helpers/functions";

export const DatabaseContext = createContext<DatabaseContextInterface>(initDatabaseContextState);

const DatabaseProvider = ({ children }: ContextChildren) => {
    const [jobData, setJobData] = useState<JobData[]>(initJobDataState)


    useEffect(() => {
        fetchFirebaseCollection("jobList", setJobData)
    }, [])

    return (
        <DatabaseContext.Provider
            value={{ jobData }}
        >
            {children}
        </DatabaseContext.Provider>
    )
}

export default DatabaseProvider;

