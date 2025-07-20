import Image from 'next/image';
import styles from './page.module.css';

export default function LoginPage() {
  return (
    // 메인 컨테이너: 전체 페이지를 중앙에 배치하고 최대 너비를 설정합니다.
    <div className={styles.container}>
      {/* 로고 섹션 */}
      <div className={styles.logoSection}>
        <img src="/images/carematching.png" alt="logo" className={styles.logo} />
      </div>

      {/* 로그인 폼 섹션 */}
      <div className={styles.loginForm}>
        {/* 이메일 입력 그룹 */}
        <div className={styles.inputGroup}>
          <label htmlFor="email" className={styles.label}>이메일</label>
          <input
            type="email"
            id="email"
            className={styles.inputField}
          />
        </div>

        {/* 비밀번호 입력 그룹 */}
        <div className={styles.inputGroup}>
          <label htmlFor="password" className={styles.label}>비밀번호</label>
          <input
            type="password"
            id="password"
            className={styles.inputField}
          />
          <p className={styles.passwordHint}>영문+숫자, 8자리 이상</p>
        </div>

        {/* 로그인 버튼 */}
        <button className={styles.loginButton}>로그인</button>

        {/* 하단 링크 섹션 (회원가입, 이메일 찾기, 비밀번호 찾기) */}
        <div className={styles.bottomLinks}>
          <a href="/signup" className={styles.link}>회원가입</a>
          <span className={styles.linkSeparator}>|</span>
          <a href="#" className={styles.link}>이메일 찾기</a>
          <span className={styles.linkSeparator}>|</span>
          <a href="#" className={styles.link}>비밀번호 찾기</a>
        </div>
      </div>

      {/* SNS 간편 로그인 섹션 */}
      <div className={styles.snsLoginSection}>
        <p className={styles.snsLoginText}>SNS 간편 로그인하기</p>
        <div className={styles.snsButtons}>
          {/* 카카오톡 로그인 버튼 */}
          <button className={styles.snsButton}>
            <img src="/images/kakao.png" alt="카카오톡 로그인" className={styles.snsIcon} />
          </button>
          {/* Google 로그인 버튼 */}
          <button className={styles.snsButton}>
            <img src="/images/google.png" alt="Google 로그인" className={styles.snsIcon} />
          </button>
          {/* 네이버 로그인 버튼 */}
          <button className={styles.snsButton}>
            <img src="/images/naver.png" alt="네이버 로그인" className={styles.snsIcon} />
          </button>
          {/* Apple 로그인 버튼 */}
          <button className={styles.snsButton}>
            <img src="/images/apple.png" alt="Apple 로그인" className={styles.snsIcon} />
          </button>
        </div>
      </div>
    </div>
  );
}
