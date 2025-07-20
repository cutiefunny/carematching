import Link from 'next/link';
import styles from './page.module.css'; // CSS Modules import

export default function SignupTypeSelectionPage() {
  return (
    <div className={styles.container}>
      {/* 뒤로가기 버튼 섹션 */}
      <div className={styles.header}>
        <Link href="/" className={styles.backButton}>
          {/* SVG 아이콘으로 뒤로가기 화살표 구현 */}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 18L9 12L15 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>

      {/* 페이지 제목 */}
      <h1 className={styles.title}>회원 유형 선택</h1>

      {/* 유형 선택 카드 컨테이너 */}
      <div className={styles.cardContainer}>
        {/* 보호자 회원가입 카드 */}
        <div className={styles.card}>
          <img src="/images/signup1.png" alt="보호자 아이콘" className={styles.cardIcon} />
          <h2 className={styles.cardTitle}>보호자 회원가입</h2>
          <p className={styles.cardDescription}>가족을 위한 요양보호사를 찾고 있습니다.</p>
        </div>

        {/* 간병인 회원가입 카드 */}
        <div className={styles.card}>
          <img src="/images/signup2.png" alt="간병인 아이콘" className={styles.cardIcon} />
          <h2 className={styles.cardTitle}>간병인 회원가입</h2>
          <p className={styles.cardDescription}>요양보호사로 활동하고자 합니다.</p>
        </div>
      </div>
    </div>
  );
}
