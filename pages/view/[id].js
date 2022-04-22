import { useRouter } from 'next/router'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Item } from '../../src/component/Item';

const Post = () => {
  const router = useRouter()
  const { id } = router.query

  const [item, setItem] = useState({});

  const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const callApi = async () => {
    const res = await axios.get(API_URL);
    setItem(res.data);
  };

  useEffect(()=> {
    if(id && id >0){
      callApi();
    }
    
  }, [id]);

  return(
    <div>
      <Item item={item}/>
    </div>
  )
};

export default Post