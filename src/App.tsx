import React from 'react';
import { useEffect, useState } from 'react';


import './scss/global.scss';
import classNames from 'classnames/bind'
import styles from './App.module.scss'

const cx = classNames.bind(styles)
function App() {
  const [wedding, setWedding] = useState(null); 
  const [loading, setLoading] = useState(true); 

  useEffect(()=>{
    //비동기에서 데이터를 보장받을 수 있는 방법 
      //callback, promise, async-await
    fetch('http://localhost:8888/wedding').then((response)=>{
      return response.json()
    }).then((data)=>{
      setWedding(data); 
      setLoading(false);
    })
  }, [])


  if(loading){
    return <div>Loading</div>
  }

  return (
    <div className={cx('container')}>
      {JSON.stringify(wedding)}
    </div>
  );
}

export default App;
