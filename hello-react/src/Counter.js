import { Component } from 'react';

// 클래스형 컴포넌트 단축키: rcc + 엔터, 함수형은 rsc + 엔터 (by Reactjs Code Snippet)
class Counter extends Component {
  // 클래스형 컴포넌트 -> state 기능 및 라이프 사이클 기능 사용 가능. 임의 메서드 정의 가능. render 함수와 그 안에서 JSX 반환 필수\
  //   함수 컴포넌트는 원래 state와 라이프사이클 API 사용 불가했으나, 리액트 v16.8에서 Hooks 도입 후 해결.
  //   함수 컴포넌트는 선언이 편리하고, 메모리 자원을 절약 할 수 있고, 배포시 결과물 파일 크기 절약 가능.
  //   결론은 새 컴포넌트 만들 때 함수형 컴포넌트 + Hooks 쓰기
  state = {
    number: 0,
    fixedNumber: 7,
  };
  render() {
    const { number, fixedNumber } = this.state; // state을 조회할 때는 this.state으로 조회
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값: {fixedNumber}</h2>
        <button //onClick을 통해 버튼이 클릭되었을 때 호출할 함수 지정
          onClick={() => {
            this.setState(
              {
                number: number + 1,
              },
              () => {
                console.log('방금 setState가 호출되었슴다.');
                console.log(this.state);
              }
            );
          }}
        >
          Click To +1
        </button>
      </div>
    );
  }
}

export default Counter;
