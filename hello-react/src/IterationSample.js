const IterationSample = () => {
  const names = ['딸기', '체리', '바나나', '사과'];
  // 문자열로 구성된 배열을 선언하고, 그 배열 값을 사용해서 <li>…</li> JSX 코드로 된 배열을 새로 생성한 후 nameList에 담아서 출력
  const nameList = names.map((name, index) => (
    <li
      key={
        index
      } /* key 값으로 map 함수에 전달되는 콜백 함수의 인수인 index 값 사용. 고유한 값이 없을 때만 index 값을 key로 사용할 것! 왜냐면 일케 하면 배열이 변경될 때 효율적으로 리렌더링 못함*/
    >
      {name}
    </li>
  ));
  // 참고로 map 함수에서 JSX를 작성할 이렇게 DOM 요소를 작성해도 되고 컴포넌트를 사용해도 됨.
  return <ul>{nameList}</ul>;
};

export default IterationSample;
