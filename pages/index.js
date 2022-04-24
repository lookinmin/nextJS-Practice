import { Axios } from 'axios';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { ItemList } from '../src/component/ItemList';
import { Divider, Header, Loader } from 'semantic-ui-react';

export default function Home({list}) {

  return (
    <div>
      <Head>
        <title>HOME | lookinmin</title>
        <meta name='description' content='민수의 nextJS 실습'></meta>
      </Head>
        <>
          <Header as="h3" style={{paddingTop: 40}}>베스트 상품</Header>
            <Divider/>
            <ItemList list={list.slice(0, 9)}/>

            <Header as="h3" style={{paddingTop: 40}}>신상품</Header>
            <Divider/>
          <ItemList list={list.slice(9)}/>
        </> 
    </div>
  )
}

export async function getStaticProps(){
  const api = process.env.apiUrl;
  const res = await axios.get(api);
  const data = res.data;

  return{
    props:{
      list: data,
      name: process.env.name,
    },
  };
}


/*
메인 페이지는 item list를 받아서 렌더하므로
정적 생성이 알맞은 방법이나

각 아이템에 대한 페이지는
매번 렌더링이 다르기 때문에
SSR을 통해 렌더해야함
*/
