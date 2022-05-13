import {useEffect, useRef, useState} from "react";
import axios from "axios";

export const useFetchQuestionnaireData = url => {

    const isCurrent = useRef(true);
    const [fetchedData, setFetchedData] = useState({data: {}, isLoading: true, error: null});

    useEffect(() => {
        return () => {
            isCurrent.current = false;
        }
    }, [])

    useEffect(() => {
        setFetchedData(prevData => ({data: prevData.data, isLoading: true, error: null}));
        axios.get(url)
            .then(resp => resp.data)
            .then(data => {
                if (isCurrent)
                    setFetchedData({data, isLoading: false, error: null})
            })
            .catch(error => {
                if (isCurrent)
                    setFetchedData({data: '', isLoading: false, error})
            })
    }, [url, setFetchedData])

    return fetchedData;
}