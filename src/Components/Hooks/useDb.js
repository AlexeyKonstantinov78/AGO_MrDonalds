import { useEffect, useState } from 'react';

export const useDb = (dataBase) => {
    const [db, setdb] = useState(null);

    useEffect(() => {
        const dbRef = dataBase.ref('sool');
        dbRef.on('value', snapshot => {
            setdb(snapshot.val());
        });

    }, [dataBase]);
    return db;
}