import { useRouter } from 'next/router'
import axios, { Axios } from 'axios';
import { useEffect, useState } from 'react';
import { Item } from '../../src/component/Item';
import { Loader } from 'semantic-ui-react';
import Head from 'next/dist/shared/lib/head';

const Post = ({item, name}) => {

  return(
    <>
      {item && (
        <>
          <Head>
            <title>{item.name}</title>
            <meta name='description' content={item.description}></meta>
          </Head>
          {name} 환경입니다.
          <Item item={item}/>
        </>
      )}          
    </>
  )
};

export default Post

//static 생성으로 각 id에 해당하는 제품 보여주기
//html을 미리 생성 후 렌더 -> 그만큼 빠르나 path를 지정해줘야되는 부분에서 불편

export async function getStaticPaths(){
  return{
    paths: [
      {params: {id: '740'}},      //id를 미리 받아 정적으로 생성
      {params: {id: '730'}},
      {params: {id: '729'}},
    ],
    fallback: true                //fallback 이 true면 id가 정해지지 않은 item들은 동적생성
  };
}

//getServerSideProps는 brower 환경이 아님, 즉 프론트엔드에서 처리되는 부분이 아니라
//Node JS에서 처리되는 부분, 해당 코드는 백엔드처럼 돌아감
export async function getStaticProps(context) {
  const id = context.params.id;
  const API = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const res = await axios.get(API);
  const data = res.data;

  return{
    props: {
      item: data,
      name : process.env.name,
    },
  };
}


/*
Next JS에서는 모든 페이지 사전 렌더링
더 좋은 퍼포먼스
검색엔진최적화 : SEO

1. 정적 생성
2. SSR

[정적생성]
- 프로젝트가 빌드하는 시점에 html파일 생성
- 모든 request에 재사용
- 퍼포먼스 이유로, 정적생성 권고
- 정적 생성된 페이지들은 CDN에 캐싱
- getStaticProps, getStaticPaths

[SSR]
- 항상 최신상태 유지
- getServerSideProps 

마케팅 페이지, 블로그문서, 제품 리스트 등에 Next JS 사용하기를 권고
*/