
import React, { useState } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { SignUpData } from "../axios/api";

function Join() {

  // 회원가입 완료 후 시험으로 보내줄 네비함수 선언
  const navigate = useNavigate();
  // 회원가입 요청과정의 상태 관리
  const [isLoading, serIsLoading] = useState(false)

  const initialState = {
    userId: '',
    password: '',
    passwordCheck: ''
  };
  console.log(initialState)

  const [user, setUser] = useState(initialState);

  const onChangeHandler = (e) => {
    const { name, value } = e.target
    setUser({
      ...user,
      [name] : value
    })

    console.log('name', name, 'value', value)
  };

  const { mutate } = useMutation(SignUpData, {
    onSuccess: () => {
      alert('회원가입 성공!')
    },
    onError : () => {
      alert('회원가입 실패!')
      console.log(mutate)
    }
  })

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    alert(`id: ${user.userId}, password : ${user.password}`)


    if ( !(user.userId === "" && user.password === "")) {
      mutate({username : user.userId, password : user.password, dormitory : 'Gryffindor'})
      console.log(user)
    } else {
      alert('빈칸없이 채워주세요!')
    }
  }

  return (
    <div>
      <JoinContainer>
        <JoinFont>Get ready for Freshmen Oriebtation!!</JoinFont>
        <JoinFormBox onSubmit={onSubmitHandler}>
          <JoinLineCenter>
            <JoinLabel>ID</JoinLabel>
            <JoinInput 
              name='userId'
              type='text'
              value={user.userId}
              placeholder='아이디'
              onChange={onChangeHandler}/>
          </JoinLineCenter>
          <JoinLineCenter>
            <JoinLabel>PASSWORD</JoinLabel>
            <JoinInput
              name='password'
              type='password'
              value={user.password}
              placeholder='비밀번호'
              onChange={onChangeHandler}/>
          </JoinLineCenter>
          <JoinLineCenter>
            <JoinLabel>CHECK PW</JoinLabel>
            <JoinInput
              name='passwordCheck'
              type='password'
              value={user.passwordCheck}
              placeholder='비밀번호 확인'
              onChange={onChangeHandler}/>
          </JoinLineCenter>
          <JoinButton>입학 완료</JoinButton>å
        </JoinFormBox>
      </JoinContainer>
    </div>
  );
}

const JoinFont = styled.div`
  color: white;
  font-size: 80px;
  margin-bottom: 80px;
  background-image: linear-gradient(to right top, #b07ffa, #f2f4f8);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  font-family: 'harrypotterFont'
`;
const JoinContainer = styled.div`
  height: 100vh;
  display: flex;
  background-color: black;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;


const JoinFormBox = styled.form`
  width: 700px;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
// const JoinBoxInline = styled.div`
//   padding: 0;
//   text-align: end;
// `
const JoinLabel = styled.label`
  color: white;
  width: 180px;
  height: 30px;
  display: inline;
  text-align: end;
  font-size: 28px;
  margin-right: 20px;
  float: left;
  font-family: 'lightFont'
`;

const JoinLineCenter = styled.div`
  margin: 0 auto;
`;

const JoinInput = styled.input`
  width: 300px;
  height: 30px;
  box-shadow: inset 5px 5px 10px #545054;
  align-items: center;
  border-radius: 8px;
`;
const JoinButton = styled.button`
  width: 200px;
  height: 60px;
  margin: 0 auto;
  margin-top: 20px;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  background-color: #9a60f2;
  box-shadow: inset 5px 5px 10px #4d1956;
  font-family: 'lightFont';
  font-size: 20px;
`;

export default Join;
