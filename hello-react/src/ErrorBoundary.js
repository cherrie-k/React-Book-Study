// 이 컴포넌트로 LifeCycleSample 컴포넌트의 parent에서 LifeCycleSample 컴포넌트를 감싸줌

import { Component } from 'react';

class ErrorBoundary extends Component {
  state = {
    error: false,
  };

  // 에러가 발생하면 이 메소드 호출. this.state.error 값을 true로 업데이트 해줌
  componentDidCatch(error, info) {
    this.setState({
      error: true,
    });
    console.log({ error, info });
  }

  render() {
    // this.state.error 값이 true라면 에러가 발생했음을 알려줌
    if (this.state.error) return <div>에러가 발생했습니다!</div>;
    return this.props.children;
  }
}

export default ErrorBoundary;
