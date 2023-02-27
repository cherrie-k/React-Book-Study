import { React, Component } from 'react';
import './ValidationSample.css';

class ValidationSample extends Component {
  state = {
    password: '',
    clicked: false,
    validated: false,
  };

  handleChange = (e) => {
    this.setState({
      password: e.target.value,
      // state의 password 값 업데이트
    });
  };

  handleButtonClick = () => {
    this.setState({
      clicked: true,
      // 0000일 때 background-color이 연초록색으로 바뀜
      validated: this.state.password === '0000',
    });
    // onClick 이벤트 발생시 input에 포커스 주도록함
    // 이제 this.input이 컴포넌트 내부의 input 요소를 가리키고 있어서 일반 DOM 다루듯이 코드 작성 가능
    this.input.focus();
  };

  render() {
    return (
      <div>
        <input
          // 콜백 함수를 이용해서 ref 달음
          ref={(ref) => (this.input = ref)}
          type="password"
          value={this.state.password}
          // onChange 이벤트 발생시 handleChange 호출해서 state의 password 값 업데이트.
          onChange={this.handleChange}
          className={
            // className 값은 버튼 누르기 전에는 비어있는 문자열 전달하고, 누른 후에는 검증 결과에 따라 값 설정. -> 버튼 색 바뀜
            this.state.clicked
              ? this.state.validated
                ? 'success'
                : 'failure'
              : ''
          }
        />
        <button
          // onClick 이벤트 발생시 handleButtonClick 호출해서 clicked 값 참으로 설정하고, validated 값을 검증 결과로 설정.
          onClick={this.handleButtonClick}
        >
          검증하기
        </button>
      </div>
    );
  }
}

export default ValidationSample;

/* createRef 사용 예시
class RefSample extends Component {
  // 컴포넌트 내부에서 멤버 변수로 React.createRef()를 담아줘야 함
  // 그리고 해당 멤버 변수를 ref를 달고자하는 요소에 ref props로 넣어주면 ref 설정 완료 !
  input = React.createRef();

  handleFocus = () => {
    // 설정한 뒤 나중에 ref 설정해준 DOM에 접근하려면 this.input.current를 조회
    // 뒷부분에 .current를 넣어주는게 콜백 함수를 사용할 때와의 차이점
    this.input.current.focus();
  };

  render() {
    return (
      <div>
        <input ref = {(ref) => {this.input=ref}} />   // 1. 콜백 함수를 통한 ref 설정
        <input ref={this.input} />                    // 2. createRef를 통한 ref 설정
      </div>
    );
  }
}

export default RefSample;
*/
