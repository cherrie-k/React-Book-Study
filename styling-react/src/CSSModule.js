import styles from "./CSSModule.module.css";

/* 
   CSS Module이 적용된 스타일 파일 불러오면 전달받은 객체엔 
   CSS Module에서 사용한 클래스 이름과 해당 이름을 고유화한 값이 키-값 형태로 들어있음 

   하단 코드에서 console.log(styles)를 한다면 우리가 지정한 클래스 이름 앞뒤로 파일 이름과 해쉬값 붙어서
   { wrapper: "CSSModule_wrapper_15bdQ" } 라는 결과가 찍힘
   */

const CSSModule = () => {
  return (
    <div
      className={`${styles.wrapper} ${styles.inverted}`}
      /* 위 백틱(`) 안의 템플릿 리터럴 문법 사용하고 싶지 않다면
      className = {[styles.wrapper, styles.inverted].join(' ')} */
    >
      안녕하세요, 저는 <span className="something">CSS Module!</span>
    </div>
  );
};

export default CSSModule;
