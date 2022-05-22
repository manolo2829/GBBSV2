import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";
import Axios from 'axios'
import {useEffect, useState} from 'react'

const URI = 'http://localhost:8000/users/'

const Emails = () => {

    const cookies = new Cookies();
    const navigate = useNavigate()

    const [user, setUser] = useState(false);

    const isAuthenticated = async() =>{
        try {
            const cookie = cookies.get('jwt')
        
            if(cookie){
                const res = await Axios.get(URI+cookie)
                console.log(res.data)
                if(res.data){
                    setUser(res.data)
                }else{
                    navigate('/')
                }
            }else{
                navigate('/')
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        isAuthenticated()
    }, [])

    return (  
        <h1 className="p-5">Emails</h1>
    );
}
 
export default Emails;