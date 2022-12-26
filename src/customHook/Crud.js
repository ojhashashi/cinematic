import { useEffect, useState } from "react";

import { api } from "../config/api";

export function useCrud(extrapath) {
    const [apivalue, setApi] = useState([]);

    const apiPath = `${api}${extrapath}`;
    console.log(apiPath);
    useEffect(() => {

        (async () => {
            try {
                const response = await fetch(apiPath);
                const ans_api_value = await response.json();
                setApi(ans_api_value);
            } catch (error) {
                console.log("error", error);
            }

        })();

    }, [apiPath]);

    return apivalue;
}

