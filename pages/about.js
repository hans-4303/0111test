import React, { useState } from "react";
import Link from "next/Link";
import style from '../styles/About.module.css'

const About = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <div className={style.main}>
      <h2>about페이지입니다</h2>
      <p>
        아래 input에 값을 넣으면 값이 바뀝니다: <span>{inputValue}</span>
      </p>
      <div>
        <input type='text' onChange={(event) => {setInputValue(event.target.value)}} placeholder='값을 작성합니다'></input>
      </div>
      <Link href='/'>Main 페이지로 이동</Link>
    </div>
  );
};

export default About;
