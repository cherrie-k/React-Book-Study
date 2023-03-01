// 각 라이프사이클 메소드를 실행할 때마다 콘솔 디버거에 기록하고, 부모 컴포넌트에서 props로 색상을 받아 버튼을 누르면 state.number 값을 1씩 더하는 컴포넌트

import { Component } from 'react';

class LifeCycleSample extends Component {
  state = {
    number: 0,
    color: null,
  };

  myRef = null; // ref를 설정할 부분

  constructor(props) {
    super(props);
    console.log('constructor');
  }

  // 부모에게서 받은 color 값을 state에 동기화
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('getDerivedStateFromProps');
    if (nextProps.color !== prevState.color) {
      // 조건에 따라 특정 값 state에 동기화
      return { color: nextProps.color };
    }
    return null; // state 변경 할 필요 없다면 null 반환
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(
      'shouldComponentUpdate',
      'nextProps: ',
      nextProps,
      'nextState: ',
      nextState
    );
    // 숫자의 마지막 자리가 4(예: 4, 24 등)면 리렌더링하지 않음
    return nextState.number % 10 !== 4;
  }

  componentWillUnmount() {
    console.timeLog('componentWillUnmount');
  }

  handleClick = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };

  // DOM에 변화가 일어나기 직전의 색상 속성을 snapshot 값으로 반환 -> componentDidUpdate에서 조회 가능
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshoBeforeUpdate');
    if (prevProps.color !== this.props.color) {
      return this.myRef.style.color;
    }
    return null;
  }

  // getSnapshotBeforeUpdate에서 반환한 snapshot을 사용
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(
      'componentDidUpdate',
      'prevProps: ',
      prevProps,
      'prevState: ',
      prevState
    );
    if (snapshot) {
      console.log('업데이트되기 직전 색상: ', snapshot);
    }
  }

  render() {
    console.log('render');

    const stylee = {
      // parent에서 랜덤으로 생성한 색을 color에 적용시켜줌
      color: this.props.color,
    };

    return (
      <div>
        <h1 style={stylee} ref={(ref) => (this.myRef = ref)}>
          {this.state.number}
        </h1>
        {/*parent에서 랜덤으로 생성한 색을 text로 띄워줌*/}
        <p>color: {this.state.color}</p>
        <button onClick={this.handleClick}>더하기</button>
      </div>
    );
  }
}

export default LifeCycleSample;
