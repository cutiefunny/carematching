'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';

// Firebase imports (moved to hook, but GoogleAuthProvider and signInWithPopup are still needed here)
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// Custom hook import
import { useFirebaseAuth } from '../hooks/useFirebaseAuth'; // 경로 확인

export default function LoginPage() {
  // Firebase configuration from environment variables.
  // NEXT_PUBLIC_ 접두사를 사용하여 클라이언트 사이드에서 접근 가능하게 합니다.
  const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
  };

  // useFirebaseAuth 훅 사용
  const { user, authReady, auth } = useFirebaseAuth(firebaseConfig);

  const [showModal, setShowModal] = useState(false); // 모달 표시 여부
  const [modalMessage, setModalMessage] = useState(''); // 모달 메시지

  // Function to handle Google login.
  const handleGoogleLogin = async () => {
    // Ensure Firebase Auth is ready before attempting login.
    if (!authReady || !auth) {
      setModalMessage("Firebase 인증 시스템이 아직 준비되지 않았습니다. 잠시 후 다시 시도해주세요.");
      setShowModal(true);
      return;
    }

    const provider = new GoogleAuthProvider(); // Create a new Google Auth provider instance.

    try {
      // Open Google sign-in popup.
      const result = await signInWithPopup(auth, provider); // auth 인스턴스 사용
      const loggedInUser = result.user; // Get the signed-in user information.
      console.log("Google login successful:", loggedInUser);

      window.location.href = '/home';

      // You can add navigation or further UI updates here after successful login.
    } catch (error) {
      // Handle various error cases during Google login.
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData?.email; // Email of the user's account.
      const credential = GoogleAuthProvider.credentialFromError(error); // AuthCredential type.

      console.error("Google login failed:", errorCode, errorMessage, email, credential);

      let displayMessage = "로그인에 실패했습니다. 다시 시도해주세요.";
      if (errorCode === 'auth/popup-closed-by-user') {
        displayMessage = "로그인 팝업이 닫혔습니다.";
      } else if (errorCode === 'auth/cancelled-popup-request') {
        displayMessage = "이미 진행 중인 로그인 요청이 있습니다.";
      } else if (errorMessage) {
        displayMessage = `로그인 실패: ${errorMessage}`;
      }

      // Display error message using custom modal.
      setModalMessage(displayMessage);
      setShowModal(true);
    }
  };

  return (
    // Main container: centers the entire page and sets max width.
    <div className={styles.container}>
      {/* Logo Section */}
      <div className={styles.logoSection}>
        <img src="/images/carematching.png" alt="케어매칭 로고" className={styles.logo} />
      </div>

      {/* Login Form Section */}
      <div className={styles.loginForm}>
        {/* Email Input Group */}
        <div className={styles.inputGroup}>
          <label htmlFor="email" className={styles.label}>이메일</label>
          <input
            type="email"
            id="email"
            className={styles.inputField}
            placeholder="이메일 주소를 입력해주세요"
          />
        </div>

        {/* Password Input Group */}
        <div className={styles.inputGroup}>
          <label htmlFor="password" className={styles.label}>비밀번호</label>
          <input
            type="password"
            id="password"
            className={styles.inputField}
            placeholder="비밀번호를 입력해주세요"
          />
          <p className={styles.passwordHint}>영문+숫자, 8자리 이상</p>
        </div>

        {/* Login Button */}
        <button className={styles.loginButton}>로그인</button>

        {/* Bottom Links Section (Sign Up, Find Email, Find Password) */}
        <div className={styles.bottomLinks}>
          <Link href="/signup" className={styles.link}>회원가입</Link>
          <span className={styles.linkSeparator}>|</span>
          <a href="#" className={styles.link}>이메일 찾기</a>
          <span className={styles.linkSeparator}>|</span>
          <a href="#" className={styles.link}>비밀번호 찾기</a>
        </div>
      </div>

      {/* SNS Login Section */}
      <div className={styles.snsLoginSection}>
        <p className={styles.snsLoginText}>SNS 간편 로그인하기</p>
        <div className={styles.snsButtons}>
          <button className={styles.snsButton}>
            <img src="/images/kakao.png" alt="kakao" className={styles.snsLogo} />
          </button>
          {/* Google Login Button - onClick handler added here */}
          <button className={styles.snsButton} onClick={handleGoogleLogin}>
            <img src="/images/google.png" alt="Google 로그인" className={styles.snsLogo} />
          </button>
          {/* Naver Login Button */}
          <button className={styles.snsButton}>
            <img src="/images/naver.png" alt="Naver 로그인" className={styles.snsLogo} />
          </button>
          {/* Apple Login Button */}
          <button className={styles.snsButton}>
            <img src="/images/apple.png" alt="Apple 로그인" className={styles.snsLogo} />
          </button>
        </div>
      </div>

      {/* Custom Modal for messages */}
      {showModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <p className={styles.modalMessage}>{modalMessage}</p>
            <button className={styles.modalButton} onClick={() => setShowModal(false)}>확인</button>
          </div>
        </div>
      )}
    </div>
  );
}
