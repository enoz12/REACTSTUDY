import  React ,{ useState } from 'react';
import logo from './logo.svg';
import './App.css';

/*eslint-disable*/


function App() {
    //ES6 destructuring 문법
    //state 데이터   state 변경함수
    let [글제목,글제목변경] = useState(['남자 코트 추천','강남 우동 맛집','파이썬 독학']);
    let [따봉 , 따봉변경] =  useState(0);
    let [modal,modalFlag] = useState(false);
    let [누른제목, 누른제목변경] =  useState(0);
    let [입력값, 입력값변경] =  useState("");



    function addCount(){
        따봉변경(따봉+1);
    }

    function modifyListTitle(){
        let newArray = [...글제목];
        newArray[0]='여자 코트 추천';
        글제목변경(newArray);
    }

    function modalDesable(data){


        modal==true
            ?modalFlag(false)
            :modalFlag(true);
        누른제목변경(data.idx);

    }

    function addList(){
        let copyArray = [...글제목];
        copyArray.unshift(입력값);
        글제목변경(copyArray);
    }

  return (
    <div className="App">
        <div className="black-nav">
            <div>개발 blog</div>
        </div>
        <button onClick={modifyListTitle}>버튼</button>
        {
            글제목.map(function(title,idx){
                return (
                  <div className='list' id ={idx}>
                        <h3 onClick={()=>{modalDesable({idx})}}>
                            {title}
                            <span  className="best-btn" onClick={ addCount}>👍</span> {따봉}
                        </h3>
                        <p>2월 17일 발행</p>
                        <hr/>
                    </div>
                )

            })
        }

        <div className='publish'>
            <input onChange={(e)=>{입력값변경(e.target.value)}}/>
            <button onClick={addList}>저장</button>
        </div>

        {
           modal === true
           ? <Modal 글제목={글제목} 누른제목={누른제목}></Modal>
           : null
        }
    </div>
  );
}

function Modal(props){
    return (
            <div className="modal">
                <h2>제목 {props.글제목[props.누른제목]}</h2>
                <p>날짜</p>
                <p>상세</p>
            </div>
    );
}
export default App;
