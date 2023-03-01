import React from 'react'
import Header from './Header'
import styled from 'styled-components'

function Card() {
  return (
    <Bg>
      <Header />
      <Wrap>
        <CardContainer border='#e96363'>
          <Font size='20px'>제목</Font><hr />
          <Font>내용</Font>
        </CardContainer>
        <CardContainer border='#e96363'>
          <Font size='20px'>제목</Font><hr />
          <Font>내용</Font>
        </CardContainer>
        <CardContainer border='#e96363'>
          <Font size='20px'>제목</Font><hr />
          <Font>내용</Font>
        </CardContainer>
        <CardContainer border='#e96363'>
          <Font size='20px'>제목</Font><hr />
          <Font>내용</Font>
        </CardContainer>
        <CardContainer border='#e96363'>
          <Font size='20px'>제목</Font><hr />
          <Font>내용</Font>
        </CardContainer>
        <CardContainer border='#e96363'>
          <Font size='20px'>제목</Font><hr />
          <Font>내용</Font>
        </CardContainer>
        <CardContainer border='#e96363'>
          <Font size='20px'>제목</Font><hr />
          <Font>내용</Font>
        </CardContainer>
        <CardContainer border='#e96363'>
          <Font size='20px'>제목</Font><hr />
          <Font>내용</Font>
        </CardContainer>
      </Wrap>
    </Bg>
  )
}
const Bg = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: black;
`
const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 30px 100px;
  gap: 50px;
`
const CardContainer = styled.div`
  width: 300px;
  height: 250px;
  border-radius: 8px;
  border: 1px solid ${({ border }) => border};
  box-shadow: 2px 1px 5px 2px ${({ border }) => border};;
  padding: 20px;
`

const Font = styled.div`
  color: white;
  font-size: ${({ size }) => size};
  font-family: 'lightFont';
`

export default Card