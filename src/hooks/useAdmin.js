import { useQuery } from "react-query"
import axiosPrivate from "../API/axiosPrivate"

const useAdmin = email => {
    const {data: admin, isLoading} = useQuery(['admin', email], () => axiosPrivate.get(`http://localhost:5000/admin/${email}`))

    return [admin, isLoading]
}

export default useAdmin