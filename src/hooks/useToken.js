import { useEffect, useState } from "react"

const useToken = user => {
    const [token, setToken] = useState('')

    useEffect(() => {

        const email = user?.user?.email
        const name = user?.user?.displayName
        const currentUser = { email, name}

        if (email) {
            fetch(`http://localhost:5000/user/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': "application/json",
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    const token = data.token
                    setToken(token)
                    localStorage.setItem("accessToken", token)
                })
        }
    }, [user])

    return [token]
}

export default useToken