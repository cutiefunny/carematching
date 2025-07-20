'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';

export default function HomePage() {
  // 샘플 게시글 데이터 (실제 앱에서는 API 호출 등으로 가져옵니다)
  const posts = [
    {
      id: 1,
      category: '커뮤니티',
      title: '요양보호앱 글 제목 샘플.....',
      content: '최근 소식글 샘플입니다. 이 글은 알림 상세 샘플 내용입니다.',
      author: '홍길동',
      time: '1시간전',
      views: 10,
      comments: 10,
      thumbnail: '/images/sample1.jpg', // 썸네일 이미지 경로
    },
    {
      id: 2,
      category: '커뮤니티',
      title: '요양보호앱 글 제목 샘플.....',
      content: '최근 소식글 샘플입니다. 이 글은 알림 상세 샘플 내용입니다.',
      author: '홍길길',
      time: '2시간전',
      views: 15,
      comments: 5,
      thumbnail: '/images/sample2.jpg', // 썸네일 이미지 경로
    },
    {
      id: 3,
      category: '커뮤니티',
      title: '요양보호앱 글 제목 샘플.....',
      content: '최근 소식글 샘플입니다. 이 글은 알림 상세 샘플 내용입니다.',
      author: '김철수',
      time: '3시간전',
      views: 20,
      comments: 12,
      thumbnail: '/images/sample3.jpg', // 썸네일 이미지 경로
    },
  ];

  return (
    <div className={styles.container}>
      {/* Header Section */}
      <header className={styles.header}>
        {/* Logo */}
        <div className={styles.logo}>
          <img src="/images/carematching_logo.png" alt="케어매칭 로고" className={styles.logoImage} />
        </div>
        {/* Notification Icon */}
        <button className={styles.notificationButton}>
          <img src="/images/notifications.png" alt="알림 아이콘" className={styles.notificationIcon} />
        </button>
      </header>

      {/* Main Menu Cards Section */}
      <section className={styles.menuCards}>
        <div className={styles.card}>
          <img src="/images/group_search.png" alt="group_search" className={styles.cardIcon} />
          <span className={styles.cardText}>요양보호사<br />조회</span>
        </div>
        <div className={styles.card}>
          <img src="/images/campaign.png" alt="campaign" className={styles.cardIcon} />
          <span className={styles.cardText}>공지</span>
        </div>
        <div className={styles.card}>
          <img src="/images/mark_chat_unread.png" alt="community" className={styles.cardIcon} />
          <span className={styles.cardText}>커뮤니티</span>
        </div>
      </section>

      {/* Real-time Registration Section */}
      <section className={styles.realtimeSection}>
        <h2 className={styles.sectionTitle}>실시간 등록</h2>
        {posts.map((post) => (
          <div key={post.id} className={styles.postItem}>
            <div className={styles.postContent}>
              <span className={styles.postCategory}>[{post.category}]</span>
              <span className={styles.postTitle}>{post.title}</span>
              <p className={styles.postDescription}>{post.content}</p>
              <div className={styles.postMeta}>
                <span>{post.author}</span>
                <span className={styles.metaDivider}>|</span>
                <span>{post.time}</span>
                <span className={styles.metaDivider}>|</span>
                <span>👀 {post.views}</span>
                <span className={styles.metaDivider}>|</span>
                <span>💬 {post.comments}</span>
              </div>
            </div>
            <div className={styles.postThumbnail}>
              {/* Thumbnail Placeholder */}
              <Image
                src={post.thumbnail}
                alt="게시글 썸네일"
                width={80}
                height={80}
                className={styles.thumbnailImage}
              />
            </div>
          </div>
        ))}
      </section>

      {/* Bottom Navigation Bar */}
      <nav className={styles.bottomNav}>
        <Link href="#" className={styles.navItem}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            stroke="none"
            className={styles.navIcon}
          >
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path>
          </svg>
          <span className={styles.navText}>홈</span>
        </Link>
        <Link href="#" className={styles.navItem}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={styles.navIcon}
          >
            <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
            <polyline points="13 2 13 9 20 9"></polyline>
          </svg>
          <span className={styles.navText}>간병일지</span>
        </Link>
        <Link href="#" className={styles.navItem}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={styles.navIcon}
          >
            <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="8.5" cy="7" r="4"></circle>
            <line x1="18" y1="8" x2="23" y2="13"></line>
            <line x1="23" y1="8" x2="18" y2="13"></line>
          </svg>
          <span className={styles.navText}>매칭내역</span>
        </Link>
        <Link href="#" className={styles.navItem}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={styles.navIcon}
          >
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
          <span className={styles.navText}>내 정보</span>
        </Link>
      </nav>
    </div>
  );
}
