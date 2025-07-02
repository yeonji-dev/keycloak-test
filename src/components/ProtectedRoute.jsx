import { useKeycloak } from '@react-keycloak/web';

export default function ProtectedRoute({ children }) {
  const { keycloak } = useKeycloak();

  if (!keycloak.authenticated) {
    keycloak.login(); // 로그인 페이지로 리다이렉트
    return null; // 렌더링 중단
  }

  return children;
}