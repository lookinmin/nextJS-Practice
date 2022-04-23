import { Axios } from 'axios';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { ItemList } from '../src/component/ItemList';
import { Divider, Header, Loader } from 'semantic-ui-react';

export default function Home() {

  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const API_URL = "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";

  const callApi = async () => {
    const res = await axios.get(API_URL);
    console.log(res.data);
    setList(res.data);
    setIsLoading(false);
  };

  useEffect(()=> {
    callApi();
  }, []);

  return (
    <div>
      <Head>
        <title>HOME | lookinmin</title>
        <meta name='description' content='민수의 nextJS 실습'></meta>
      </Head>
      {isLoading && (
        <div style={{padding: "300px"}}>
          <Loader inline="centered" active>
            Loading
          </Loader>
        </div>
      )}

      {!isLoading && (
        <>
          <Header as="h3" style={{paddingTop: 40}}>베스트 상품</Header>
            <Divider/>
            <ItemList list={list.slice(0, 9)}/>

            <Header as="h3" style={{paddingTop: 40}}>신상품</Header>
            <Divider/>
          <ItemList list={list.slice(9)}/>
        </>
      )}
      
    </div>
  )
}


/*
메인 페이지는 item list를 받아서 렌더하므로
정적 생성이 알맞은 방법이나

각 아이템에 대한 페이지는
매번 렌더링이 다르기 때문에
SSR을 통해 렌더해야함
*/
