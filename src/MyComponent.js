import PropTypes from 'prop-types';

const MyComponent = ({ name, favoriteNumber, children }) => {
  return (
    <div>
      안녕하세요, 제 이름은 {name} 입니다 ! <br />
      children 값은 {children}
      입니다.
      <br />
      제가 좋아하는 숫자는 {favoriteNumber} 입니다.
    </div>
  );
};

MyComponent.defaultProps = {
  name: '기본 이름',
};

MyComponent.propTypes = {
  name: PropTypes.string, // name값은 무조건 string 형태로 전달 !!
  favoriteNumber: PropTypes.number.isRequired, // favoriteNumber값은 무조건 지정해야됨
};

export default MyComponent;
