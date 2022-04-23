import { Menu } from 'semantic-ui-react'
import { useRouter } from 'next/dist/client/router';

export const Gnb = () => {
  const router = useRouter();
  let activeItem;
  if(router.pathname === "/"){
    activeItem = 'home';
  }
  else if (router.pathname === "/about"){
    activeItem = 'about';
  }


  const goLink = (e, data) => {
    if(data.name === 'home'){
      router.push("/");
    }else if(data.name === 'about'){
      router.push("/about");
    }
  }

  // router.push가 아닌 location.href 혹은 <a>태그를 사용해도 무방하나
  // <a> 와 location.href는 페이지를 새로고침하며
  // router.push 와 <Link>는 페이지를 새로고침하지 않는 Single Page Application의 장점을 활용 할 수 있다.

  return (
    <Menu inverted>
      <Menu.Item
        name='home'
        active={activeItem === 'home'}
        onClick={goLink}
      />
      <Menu.Item
        name='about'
        active={activeItem === 'about'}
        onClick={goLink}
      />
    </Menu>
  )
}
