import axios from "axios";
import { async } from "q";

export const token = localStorage.getItem('Access_Token')

export const instance = axios.create({
  baseURL: 'http://52.79.148.222:8080',
  // headers: { Authorization : token },
  withCredentials: true
})

instance.interceptors.request.use(
  function(config) {
    const token = localStorage.getItem('Access_Token');
    config.headers.Authorization = `Bearer ${token}`;
    return config
  }
)
instance.interceptors.response.use(
  function (response) {
    // console.log(response)
    const token = response.headers.authorization
    if (token) {
      const _token = token.split(' ')
      console.log(_token[1])
      localStorage.setItem('Access_Token', _token[1])
      console.log(localStorage.getItem('Access_Token'))
    }
    return response;
  }
)

// 회원가입 api
export async function SignUpData(userInfo) {
  const { data } = await instance.post('api/user/signup', userInfo)
  console.log(data)
  return data
}


// 로그인 api
export async function LoginData(userInfo) {
  const data = await instance.post('/api/user/login', userInfo)
  const apiToken = data.headers.get('authorization')
  console.log('data', apiToken)
  return data
}

// 특정 기숙사 전체 게시글 가져오기
export const getGryffindorBoard = async (id) => {
    console.log('받아오는 id :' , id)
    const response = await instance.get(`/api/boards?dormitory=Gryffindor&page=${id}&size=8`)
    return response
}
export const getRavenclawBoard = async (id) => {
  const response = await instance.get(`/api/boards?dormitory=Ravenclaw&page=${id}&size=8`)
  return response
}
export const getHufflepuffBoard = async (id) => {
  const response = await instance.get(`/api/boards?dormitory=Hufflepuff&page=${id}&size=8`)
  return response
}
export const getSlytherinBoard = async (id) => {
  const response = await instance.get(`/api/boards?dormitory=Slytherin&page=${id}&size=8`)
  return response
}


// cors에러? 백엔드에서 허용이 안되잇다?


export const addBoard = async (newBoard) => {
  await instance.post(`/api/board`, newBoard)
}

export const deleteBoard = async (boardId) => {
  await instance.delete(`/api/board/${boardId}`)
}

export const editBoard = async ({boardId, changeBoard}) => {
  console.log(boardId, changeBoard)
  await instance.put(`api/board/${boardId}`,{
    title: changeBoard.title,
    contents: changeBoard.contents
  })
}
// 트러블슈팅 
// 특정 id값 유동적으로 받아오는 방법 -> 해결
// 새로고침 해야 이전 페이지 데이터가 정상적으로 불러와지는 문제 -> 해결

export const getSingleBoard = async (paramId) => {
    const response = await instance.get(`/api/board?id=${paramId}`)
    return response
}



export const addComment = async (newComment) => {
    await instance.post(`${process.env.REACT_APP_SERVER_URL}/api/board/${newComment.id}/comment`, {contents:newComment.comment})
}

export const deleteComment = async ({boardId, commentId}) => {
    await instance.delete(`${process.env.REACT_APP_SERVER_URL}/api/board/${boardId}/comment/${commentId}`)
}

export const editComment = async ({boardId,commentId,changeComment}) => {
  await instance.put(`api/board/${boardId}/comment/${commentId}`,{
    contents:changeComment
  })
}