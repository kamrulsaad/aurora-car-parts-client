import { useQuery } from "react-query"
import axiosPrivate from "../API/axiosPrivate"

const useUsers = (email) => {
    
    const {data: userData, isLoading, refetch } = useQuery(['user', email], () => axiosPrivate.get(`http://localhost:5000/user?email=${email}`))

    return [userData, isLoading, refetch]

}

export default useUsers