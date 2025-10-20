import React from 'react'

export default function Hello({color,name='이름없음',isSpecial}) {
  return (
    <div style={{color}}>
        {isSpecial ? <b>*</b> : null}
        안녕하세요 {name}
        </div>
    //중괄호 두개 React JSx의 문법
    //첫번째 중괄호는 자바스크립트 표현식
    //자바스크립트 객체 리터럴
    //비구조화 할당은 좀더 간결하게 작성가능
  );
}

