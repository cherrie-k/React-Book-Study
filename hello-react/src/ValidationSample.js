import { Component } from 'react';
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
  };

  render() {
    return (
      <div>
        <input
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
