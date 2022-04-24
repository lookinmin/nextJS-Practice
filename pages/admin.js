import axios from "axios"
import { useEffect, useState } from "react"
import { useRouter } from "next/dist/client/router"
import { Button } from "semantic-ui-react";

export default function Admin() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(false);

  const checkLogin = () => {
    axios.get('/api/isLogin')
    .then(res => {
      if(res.status === 200 && res.data.name){ //로그인
        setIsLogin(true);
      } else{ //로그인X
        router.push("/login");
      }
    })
  }
  useEffect(()=> {
    checkLogin();
  }, [])

  const logout = () => {
    axios.get('/api/logout')
    .then(res => {
      if(res.status === 200){
        router.push("/");
      }
    })
  }
  return(
    <>
      ADMIN
      {isLogin && <Button onClick={logout}>Logout</Button>}
    </>
  )
}