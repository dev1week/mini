import React from 'react';
import { useEffect, useState } from 'react';


import './scss/global.scss';
import classNames from 'classnames/bind'
import styles from './App.module.scss'

const cx = classNames.bind(styles)
function App() {
  const [wedding, setWedding] = useState(null); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(false); 

  useEffect(()=>{
    //비동기에서 데이터를 보장받을 수 있는 방법 
      //callback, promise, async-await
    fetch('http://localhost:8888/wedding22').then((response)=>{
      if(response.ok===false){
        throw new Error('청첩장 정보를 불러오지 못했습니다.')

        return response.json(); 
      }

      return response.json()
    }).then((data)=>{
      setWedding(data); 
      setLoading(false);
    })
    .catch((e)=>{
      console.log('에러가 발생하였습니다.', e);
      setError(true); 
    }).finally(()=>{
      setLoading(false)
    })
  }, [])


  if(loading){
    return <div>Loading</div>
  } 
  if(error){
    return <div>error</div>  
  }

  return (
    <div className={cx('container')}>
      {JSON.stringify(wedding)}
    </div>
  );
}

export default App;
