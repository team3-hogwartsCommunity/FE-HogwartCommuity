import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import jwtDecode from 'jwt-decode'
import { useEffect, useState } from 'react'

import { token } from '../axios/api'

const DormList = styled.div`
    display: flex;
    flex-direction: row;
`
const DormName = styled.button`
    width: 25%;
    height: 50px;
    text-align: center;
    justify-content: center;
    border: none;
    background-image: linear-gradient(to right top, ${({ color }) => color}, #f2f4f8);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    font-family: 'lightFont';
    cursor: pointer;
`



function Header() {

    const navigate = useNavigate();



    const [dormState, setDormState] = useState();

    const onSetDormStateHandler = (e) => {
        setDormState(e.target.innerText)
    }
    const decoded_token = jwtDecode(token)
    console.log("유저 기숙사 : ", decoded_token.auth)
    console.log("방문한 기숙사 : ", dormState)
    useEffect(() => {
        setDormState(decoded_token.auth)
    }, [])

    const onMakeBoardHandler = () => {
        if (decoded_token.auth !== dormState) {
            alert('글쓰기 권한이 없습니다.')
        } else {
            navigate('/create_post')
        }
        return (
            <>
                <HeaderBox>
                    <HeaderRow>
                        <TitleFont>
                            Hogwarts Board
                        </TitleFont>
                        <div>
                            <HeaderButton onClick={onMakeBoardHandler}>writing</HeaderButton>
                            <HeaderButton>Logout</HeaderButton>
                        </div>
                    </HeaderRow>
                    <DormList>
                        <DormName color='#8b0a0d' onClick={onSetDormStateHandler}>
                            <h2>Gryffindor</h2>
                        </DormName>
                        <DormName color='#043089' onClick={onSetDormStateHandler}>
                            <h2>Ravenclaw</h2>
                        </DormName>
                        <DormName color='#9cce05' onClick={onSetDormStateHandler}>
                            <h2>Huffflepuff</h2>
                        </DormName>
                        <DormName color='#045633' onClick={onSetDormStateHandler}>
                            <h2>Slytherin</h2>
                        </DormName>
                    </DormList>
                </HeaderBox>
            </>
        )

    }
    // console.log(dormState)



    // console.log(dormState)
    // return (
    //     <>
    //         <h1>Domitory Board</h1>
    //         <button onClick={onMakeBoardHandler}>글 작성하기</button>
    //         <DormList>
    //             <DormNameGrif>
    //                 <h2 onClick={onSetDormStateHandler}>Gryffindor</h2>
    //             </DormNameGrif>
    //             <DormNameLev>
    //                 <h2 onClick={onSetDormStateHandler}>Ravenclaw</h2>
    //             </DormNameLev>
    //             <DormNameHuf>
    //                 <h2 onClick={onSetDormStateHandler}>Hufflepuff</h2>
    //             </DormNameHuf>
    //             <DormNameSli>
    //                 <h2 onClick={onSetDormStateHandler}>Slytherin</h2>
    //             </DormNameSli>
    //         </DormList>
    //     </>
    // )

}

const HeaderBox = styled.div`
  background-color: black;
  font-size: 26px;
  font-family: 'harrypotterFont';
`

const HeaderRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
const TitleFont = styled.div`
  padding: 10px;
  font-size: 30px;
  margin-left: 10px;
  margin-top: 5px;
  /* background-image: linear-gradient(to right top, #9a60f2, white);
  background-clip: text;
  -webkit-background-clip: text; */
  color: white;
  font-family: 'harrypotterFont';
`
const HeaderButton = styled.button`
  width : 100px;
  height: 40px;
  font-size: 18px;
  color: black;
  border: none;
  border-radius: 5px;
  margin-right: 40px;
  background-color: white;
  text-align: center;
  box-shadow: inset 1px 2px 2px 1px #2e2d2e;
  font-family: 'lightFont';
`
export default Header