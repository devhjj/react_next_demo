import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Button, Input, message } from 'antd'
import axios from 'axios'
import { SetStateAction, useState } from 'react'


export default function Home() {
  
const [id, setId] = useState('');
const [password, setPassword] = useState('');

const onChangeId = (e : React.ChangeEvent<HTMLInputElement>) => {
  console.log(e.target.value);
  setId(e.target.value);
};

const onChangePassword = (e : React.ChangeEvent<HTMLInputElement>) => {
  console.log(e.target.value);
  setPassword(e.target.value);
};


const onTest = () => {
  //axios.defaults.baseURL = `${process.env.NEXT_PUBLIC_API_URL}/api`;
  axios.defaults.baseURL = 'http://localhost:8080';
  axios
    .get(`/auth/get`)
    .then((response) => {
      if (response.data === 'INSIDE API') {
        throw new Error('요청URL이 잘못됐거나 권한이 없음.');
      }
      console.log(response);
      //setToday(response.data);
    })
    .catch((e) => {
      console.log(e);
      console.log(e.response.data);
      message.error(e.response.data.message);
    });
};

const register = () => {
  axios.defaults.baseURL = 'http://localhost:8080';
  axios.defaults.withCredentials = true; // withCredentials 전역 설정
  console.log({id},{password})
  axios.post('/auth/register', {
    /*
    id: {id},
    password: {password}
    */
   id: "test",
   password: "test"
  },{ withCredentials: true })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
};
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.center}>
          <Button onClick={onTest}>getTest</Button>
          <hr />
          <Input
            value={id}
            type="text"
            onChange={onChangeId}
            placeholder="id"
          />
          <hr />
          <Input
            value={password}
            type="text"
            onChange={onChangePassword}
            placeholder="password"
          />
          <Button onClick={register}>회원가입</Button>
        </div>

      </main>
    </>
  )
}
