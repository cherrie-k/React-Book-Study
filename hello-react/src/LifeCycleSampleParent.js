import { Component } from 'react';
import LifeCycleSample from './LifeCycleSample';
import ErrorBoundary from './ErrorBoundary';

// 랜덤 색상 생성
function getRandomColor() {
  // 000000부터 ffffff 값을 반환
  return (
    '#' +
    Math.floor(
      Math.random() * 16777215 /*16777215를 hex로 표현하면 ffffff*/
    ).toString(16)
  );
}

class LifeCycleSampleParent extends Component {
  state = {
    color: '#000000',
  };

  handleClick = () => {
    // 랜덤 색상 버튼 누를때마다 호출되어 랜덤색상이벤트 설정.
    // 불러온 LifeCycleSample 컴포넌트에 color 값을 props로 설정함.
    this.setState({
      color: getRandomColor(),
    });
  };

  render() {
    return (
      <div>
        <div>
          위아래 버튼을 번갈아 누르면서 어떤 라이프사이클 메소드들을 실행하는지
          체크해보자! (React.strictMode) 잠시 해제
        </div>
        <div>마지막 수가 4일 때 업데이트 취소하는지도 확인해보자!</div>
        <button onClick={this.handleClick}> 랜덤 색상 </button>
        <ErrorBoundary>
          <LifeCycleSample color={this.state.color} />
        </ErrorBoundary>
      </div>
    );
  }
}

export default LifeCycleSampleParent;
