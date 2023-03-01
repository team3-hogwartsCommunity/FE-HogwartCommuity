import React from 'react'
import jwtDecode from 'jwt-decode'
import { useMutation,  useQueryClient } from 'react-query'
import { editBoard, token } from '../axios/api';
import styled from 'styled-components'

import useInput from '../hooks/useInput';
import { useParams } from 'react-router';


function EditPost() {

  const queryClient = useQueryClient();
  const params = useParams()
  console.log(params)
  // 토큰 복호화
  const decoded_token = jwtDecode(token)

  const [title, onChangeTitle, resetTitle] = useInput();
  const [contents, onChangeContents, resetContents] = useInput();

  const editMutation = useMutation(editBoard,{
    onSuccess: () =>{
      queryClient.invalidateQueries();
    }
  })

  console.log('Bearer '+token)
  const userDormitory = decoded_token.auth
  
  console.log(userDormitory)
  const EditBoard = (e) => {
    e.preventDefault();
    editMutation.mutate(
      {
        boardId: params.id, 
        changeBoard : {
          title,
          contents
        }
    
      })
  }
  return (
    <StBackGround>
      <StContainer>
        <StFormBox onSubmit={EditBoard}>
          <StTitleForm >
            <label>TITLE</label><br />
            <StTitleInput name="title" value={title} onChange={onChangeTitle}/>
          </StTitleForm>
          <StContentForm>
            <label>CONTENT</label><br />
            <StContentInput name="contents" value={contents} onChange={onChangeContents}/>
          </StContentForm>
          <StFormButton>수정 완료</StFormButton>
        </StFormBox>
      </StContainer>
    </StBackGround>
  )
}

const StBackGround = styled.div`
  height: 100vh;
  background-color: black;
`

const StContainer = styled.div`
  width: 1000px;
  height: 800px;
  border: 2px solid;
  box-shadow: 2px 3px 10px 5px white;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`

const StFormBox = styled.form`
  display: flex;
  flex-direction: column;
`
const StTitleForm = styled.div`
  width: 800px;
  height: 100px;
  margin-left: 20px;
  margin-top: 30px;
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: 500;
  font-family: 'lightFont';
  background-image: linear-gradient(to right top, #05d4e6, #c9d8f6);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`
const StTitleInput = styled.textarea`
  width: 800px;
  height: 30px;
  margin-top: 10px;
  font-size: 20px;
  resize: none;
`

const StContentForm = styled.div`
  /* width: 800px; */
  height: 500px;
  margin-left: 20px;
  font-size: 24px;
  font-weight: 500;
  font-family: 'lightFont';
  background-image: linear-gradient(to right top, #05d4e6, #c9d8f6);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`

const StContentInput = styled.textarea`
  width: 950px;
  height: 500px;
  margin-top: 10px;
  font-size: 24px;
  text-align: left;
  display: flex;
  vertical-align: top;
  resize: none;
`

const StFormButton = styled.button`
  width: 280px;
  height: 50px;
  display: flex;
  margin-top: 70px;
  margin-left: 700px;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  border: 1px solid;
  border-radius: 5px;
  box-shadow: 2px 1px 3px 3px #b07ffa;
  background-color: black;
  font-family: 'lightFont';
  color: white;
  cursor: pointer;
`


export default EditPost



