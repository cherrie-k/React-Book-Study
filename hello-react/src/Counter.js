import { Component } from 'react';

// 클래스형 컴포넌트 단축키: rcc + 엔터, 함수형은 rsc + 엔터 (by Reactjs Code Snippet)
class Counter extends Component {
  // 클래스형 컴포넌트 -> state 기능 및 라이프 사이클 기능 사용 가능. 임의 메서드 정의 가능. render 함수와 그 안에서 JSX 반환 필수\
  //   함수 컴포넌트는 원래 state와 라이프사이클 API 사용 불가했으나, 리액트 v16.8에서 Hooks 도입 후 해결.
  //   함수 컴포넌트는 선언이 편리하고, 메모리 자원을 절약 할 수 있고, 배포시 결과물 파일 크기 절약 가능.
  //   결론은 새 컴포넌트 만들 때 함수형 컴포넌트 + Hooks 쓰기

  // state은 컴포넌트 내부에서 바뀔 수 있는 값을 의미. 클래스형 컴포넌트가 지니고 있는 state와 함수 컴포넌트에서 useState을 통해 사용하는 state가 있음.
  // 참고로 props는 컴포넌트가 사용되는 과정에서 부모 컴포넌트가 설정하는 값이고, 컴포넌트 자신은 해당 props를 read-only로만 사용 가능.
  // 컴포넌트의 state은 객체 형식이어야 함.
  state = {
    // constructor 메소드와 그 안의 super(props) 사용 없이도 state 초깃값 설정 가능.
    number: 0,
    // state의 초깃값 설정
    fixedNumber: 7,
    // state 객체 안에는 여러 값이 있을 수 있음.
  };

  render() {
    const { number, fixedNumber } = this.state; // state을 조회할 때는 this.state으로 조회. render 함수에서 현재 state 조회.
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값: {fixedNumber}</h2>
        <button //onClick을 통해 버튼이 클릭되었을 때 호출할 함수 지정
          // button 안에 onClick을 props로 넣어준거. 이벤트 설정.
          //   이벤트로 설정할 함수는 화살표 함수 문법으로 넣어줘야 함.
          onClick={() => {
            // this.setState을 사용하여 state에 새로운 값 대입. state 값을 바꿀 수 있게 해줌
            this.setState(
              {
                number: number + 1,
                // this.setState 함수에 state 객체 안의 number와 fixedNum중 num만 넣어줬기 때문에 걔만 바뀜.
                // fixedNumber: fixedNumber - 1, 만약 이렇다면 버튼 누를 때마다 fixedNum은 줄어들겠지?
              },

              // setState를 사용해서 값을 업뎃 하고 난 후 특정 작업을 하고 싶을 때
              //  setState의 두 번째 파라미터로 callback 함수를 등록해서 작업을 처리함.
              () => {
                console.log('방금 setState가 호출되었슴다.');
                console.log(this.state);
              }
            );

            /*
            this.setState((prevState) => {
              return {
                number: prevState.number + 1,
              };
            });
            */
          }}
        >
          Click To +1
        </button>
      </div>
    );
  }
}

export default Counter;
