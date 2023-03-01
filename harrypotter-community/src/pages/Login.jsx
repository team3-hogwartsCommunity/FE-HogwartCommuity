
import React, { useState } from 'react'
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router'
import styled from 'styled-components'
import { LoginData } from '../axios/api';

function Login() {

  const navigate = useNavigate();

  const initialState = {
    username : '',
    password : ''
  }

  const [login, setLogin] = useState(initialState);

  const onChangeHandler = (e) => {
    const { name, value } = e.target

    setLogin({
      ...login,
      [name] : value
    })
  }

  const { mutate } = useMutation(LoginData, {
    onSuccess : () => {
      alert('로그인 성공!')
      
      navigate('board')
      
    },
    onError : () => {
      alert('로그인 실패!')
    }
  })

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    
    if (!(login.username === '' && login.password === '')) {
      alert(`id: ${login.username}, password : ${login.password}`)

      // 회원가입 api에 request값 넣어주기
      mutate(login) 
  }

  }
  return (
    <div>
      <StContainer>
        <HeaddFontStyle>welcome to Hogwarts!</HeaddFontStyle>
        <StLoignBox onSubmit={onSubmitHandler}>
          <div>
            <StLoginSpan>ID</StLoginSpan>
            <StLoginInput
              name='username'
              type='text'
              placeholder='아이디'
              onChange={onChangeHandler}/>
            <StLoginSpan>PASSWORD</StLoginSpan>
            <StLoginInput
              name='password'
              type='password'
              placeholder='비밀번호'
              onChange={onChangeHandler}/>
          </div>
          <StLoginButton>로그인</StLoginButton>
        </StLoignBox>
        <StForJoinBox>
          <StForJoinInner>
            <SubFontStyle>아직 회원이 아니신가요?</SubFontStyle>
            <StForJoinButton onClick={() => {
              navigate('/join')
            }}>신입생 등록</StForJoinButton>
          </StForJoinInner>
        </StForJoinBox>
      </StContainer>

    </div>
  )
}

const HeaddFontStyle = styled.div`
  color: white;
  font-size: 80px;
  margin-bottom: 100px;
  background-image: linear-gradient(to right top, #b07ffa, #f2f4f8);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  font-family: 'harrypotterFont';
`

const SubFontStyle = styled.div`
  color: white;
  font-size: 24px;
  font-family: 'lightFont';
`
const StContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: black;
`
const StLoignBox = styled.form`
  color: white;
  width: auto;
  height: auto;
  display: flex;
  font-family: 'lightFont';
  flex-direction: row;
`
const StLoginSpan = styled.div`
  font-size: 26px;
  font-weight: 500;
`
const StLoginInput = styled.input`
  color: black;
  width: 300px;
  height: 30px;
  border: none;
  border-radius: 10px;
  font-family: Arial, Helvetica, sans-serif;
  box-shadow: inset 5px 5px 10px #545054;
`

const StLoginButton = styled.button`
  width: 100px;
  height: 120px;
  border: none;
  border-radius: 8px;
  margin-top: 30px;
  margin-left: 30px;
  padding: 10px;
  font-size: 16px;
  color: white;
  background-color: #9a60f2;
  box-shadow: inset 5px 5px 10px #2e2d2e;
  font-family: 'lightFont';
  font-size: 20px;
  cursor: pointer;
`

const StForJoinBox = styled.div`
  margin-top: 100px;
`
const StForJoinInner = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`

const StForJoinButton = styled.button`
  width: 120px;
  height: 35px;
  font-weight: 500;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  box-shadow: inset 5px 2px 10px #acacb2;
  font-family: 'lightFont';
  cursor: pointer;
`


export default Login