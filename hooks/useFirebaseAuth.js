import { useState, useEffect } from 'react';
import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  signInWithCustomToken,
  signInAnonymously
} from "firebase/auth";

/**
 * Firebase 인증 상태를 관리하는 커스텀 React Hook.
 * 앱 초기화 시 Firebase를 설정하고, 사용자 인증 상태 변화를 구독합니다.
 *
 * @param {object} firebaseConfig - Firebase 프로젝트 설정 객체.
 * @returns {{user: object|null, authReady: boolean, auth: object|null}}
 * - user: 현재 로그인된 사용자 객체 (로그아웃 상태면 null).
 * - authReady: Firebase 인증 시스템이 준비되었는지 여부 (boolean).
 * - auth: Firebase Auth 인스턴스.
 */
export const useFirebaseAuth = (firebaseConfig) => {
  const [user, setUser] = useState(null);
  const [authReady, setAuthReady] = useState(false);
  const [authInstance, setAuthInstance] = useState(null); // Firebase Auth 인스턴스 저장

  useEffect(() => {
    // Firebase 앱 초기화
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    setAuthInstance(auth); // Auth 인스턴스 상태에 저장

    // Canvas 환경을 위한 초기 인증 처리
    const setupAuth = async () => {
      try {
        if (typeof window !== 'undefined' && typeof window.__initial_auth_token !== 'undefined') {
          await signInWithCustomToken(auth, window.__initial_auth_token);
          console.log("Signed in with custom token via useFirebaseAuth.");
        } else {
          await signInAnonymously(auth);
          console.log("Signed in anonymously via useFirebaseAuth.");
        }
      } catch (error) {
        console.error("Initial authentication failed in useFirebaseAuth:", error);
      } finally {
        setAuthReady(true); // 인증 시스템 준비 완료
      }
    };

    setupAuth();

    // 인증 상태 변화 리스너 설정
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("Auth state changed in useFirebaseAuth:", currentUser ? currentUser.email : "No user");
    });

    // 컴포넌트 언마운트 시 리스너 해제
    return () => unsubscribe();
  }, [firebaseConfig]); // firebaseConfig가 변경될 때만 다시 실행

  return { user, authReady, auth: authInstance };
};
