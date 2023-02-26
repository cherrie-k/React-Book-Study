import PropTypes from 'prop-types';

// 화살표 함수 문법 () => {}
// 함수를 파라미터로 전달할 때 유용.
// 일반 함수는 자신이 종속된 객체를 this로 가리키지만, 화살표함수는 자신이 종속된 인스턴스를 가리킴.
// 값을 연산하여 바로 반환해야 할 때 사용하면 가독성 up.
// 따로 {}를 열어주지 않으면 연산한 값을 그대로 반환한다는 의미
const MyComponent = ({ name, favoriteNumber, children }) => {
  // 12line에 설명돼있는 비구조화 할당 문법은 위처럼 함수 파라미터 객체에도 사용 가능
  return (
    <div>
      {/*비구조화 할당 문법. 내부 값 배로 추출 가능. 이거 덕분에 props값 조회 할 때마다 props.name, props.children처럼 props 키워드 앞에 붙여줄 필요가 없어짐. aka 구조 분해 문법.*/}
      안녕하세요, 제 이름은 {name} 입니다 ! <br />
      children 값은 {children}
      {/* 부모 컴포넌트의 return() 안에 <MyComponent>안뇽</MyComponent> 이런 식으로 담겨있고, 
          저 '안녕'을 MyComponent 내부에서 보여주려면, props.children 사용*/}
      입니다.
      <br />
      제가 좋아하는 숫자는 {favoriteNumber} 입니다.
    </div>
  );
};

// props: 컴포넌트 속성을 설정 할 때 사용하는 요소. 해당 컴포넌트를 불러와 사용하는 부모 컴포넌트에서 설정 가능.
// prop 값은 컴포넌트 함수의 파라미터로 받아 와서 사용 가능. {} 기호로 감싸서 렌더링.
// 이 MyComponent를 App에서 불러온다면 App 컴포넌트에서 MyComponent의 props 값을 지정하는겨

MyComponent.defaultProps = {
  // props의 기본 값을 설정. 부모 컴포넌트에서 name값을 따로 지정하지 않았을 때 보여주는 기본 값 설정.
  name: '기본 이름',
};

MyComponent.propTypes = {
  // propTypes를 통해 컴포넌트의 필수 props를 지정하거나 props의 타입 지정 가능.
  name: PropTypes.string, // name값은 무조건 string 형태로 전달 !!
  favoriteNumber: PropTypes.number.isRequired, // favoriteNumber값은 무조건 지정해야됨
};
// 더 많은 PropTypes 종류는 여기서=> https://ko.reactjs.org/docs/typechecking-with-proptypes.html
//  ㄴ array, bool, func, number, string, arrayOf, object, symbol, node, instanceOf, oneOf, oneOfType, objectOf, shape, any 등 아주 다양..

export default MyComponent;
