import { Component } from 'react';

class ScrollBox extends Component {
  // 컴포넌트에 scrollToBottom 메소드 생성
  scrollToBottom = () => {
    const { scrollHeight, clientHeight } = this.box;
    // 비구조화 할당 문법 사용. const scrollHeight = this.box.scrollHeight;와 동일한 의미.
    this.box.scrollTop = scrollHeight - clientHeight;
  };
  // 이제 이 컴포넌트의 부모 컴포넌트(App.js)에서 ScrollBox에 ref를 달고 버튼 만들어서 누르면 됨.

  // 그냥 내가 연습삼아 추가한 메소드^^
  scrollToTop = () => {
    this.box.scrollTop = 0;
  };

  render() {
    const style = {
      border: '1px solid black',
      height: '300px',
      width: '300px',
      overflow: 'auto',
      position: 'relative',
    };

    const innerStyle = {
      width: '100%',
      height: '650px',
      background: 'linear-gradient(pink, black)',
    };

    return (
      <div
        style={style}
        ref={(ref) => {
          this.box = ref;
        }}
      >
        <div style={innerStyle} />
      </div>
    );
  }
}

export default ScrollBox;
