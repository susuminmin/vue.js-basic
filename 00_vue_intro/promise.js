// 외부에 요청 보내서 결과 출력하는 코드 작성
//  1. 몇 초 뒤에 데이터가 응답되면
//  2. 데이터를 변수에 저장하여 출력!

function getData() {
  // const data = {'data': 'somedata'}
  let data = null 

  setTimeout(() => {
    console.log('요청을 보냈습니다.')
    data = { 'data': 'somedata' }
  }, 100);// 0.1 초 걸림

  return data // 가지고 오기만 하고 뭔가 실행은 못함 (idea: 함수를 넘겨주자! CallBack 함수 개념)
}

// data 갖고 오고 나서 해야할 일 ...
function printData() {
  let response1 = getData()
  console.log(response1)
}

// printData()

function getDataCallback(callback) {
// 2. callback 으로 함수가 넘어옴. 즉, callback = 저 익명함수
  setTimeout(() => {
    console.log('INFO: 요청을 보냈습니다.')
    const data = { 'data': 'somedata' }
    callback(data) // 3. 다 끝나고 저 함수 실행 
  }, 100);
}

getDataCallback()


// 1. 데이터를 꺼내온 뒤 / 작업할 함수 (여기서는 data를 받아서 console에 찍기) 
// 미리 넘겨줌 / 전달함 (나중에 도착하면 실행시켜라)
getDataCallback(function (data) {
  console.log(data)
})

// ##################################################################################
// Promise Object 사용 문법

// 1. 다짐을 반환(return) ==> Promise 를 반환 
function getDataPromise() { // === axios.get 역할
  return new Promise(resolve => {

    // 2. 어떤 다짐? ==> 데이터 요청한 뒤 어떻게 할 것이다! Promise 안쪽 함수에 표현
    setTimeout(() => {
      console.log('INFO: 요청을 보냈습니다. ')
      data = { 'data': 'somedata' }
      resolve(data) // 성공하면 resolve로 넘겨줄테야! / .then 으로 꺼낼 수 있는 객체 
    }, 100) // 반환부터 하고 시작! 

  })
}

// // axios.get과 동일! 
// getDataPromise()  // then 으로 꺼낼 수 있다. 
//   .then(response => { // 위에서 resolve 에 담겨 넘어온 애를 .then 으로 풀어서 받음
//     console.log(response)
//   })


getDataPromise()
  .then(data => {
    console.log(data)
    return getDataPromise()
  })
  .then(login => {
    if (login) {
      return getDataPromise()
    }
  })
  .then(userinfo => {
    console.log(userinfo)
  })



// axios 부분 로직을 고쳐보기 

async function printData() {
  const data = await getDataPromise()
  console.log(data)
}



// async (비동기 작업을 동기 로직으로 사용 선언)
// const handleData = async function() {
//   getDataPromise().then(response => {
//     console.log(response)
//     // 이후 작업 (*)
//     const response = getDataPromise()
//   })
// }

// // (*) 여기서 이후 작업 하고 싶다면? 
// const handleData = async function () {
//   const response = await getDataPromise()
//   console.log(response)
// }

// handleData()