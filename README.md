# React + Vite

React.js, Spring boot, Keycloak 연동 테스트 프로젝트
- React Version: 19.1.0

### Keycloak 로컬 실행
```
kubectl apply -f mysql-deployment.yaml
kubectl apply -f keycloak-deployment.yaml
# 아래 명령어 실행하여 포트 확인 후 localhost:[port] 로 접속
kubectl get svc keycloak
# Keycloak 콘솔에서 REALM, Client, User, redirect uri 등 설정하여 keycloak.js 파일에 값 셋팅
```
### Keycloak 관리자 콘솔 셋팅
1. REALM 생성
2. Client 생성
     - Valid Redirect URIs: http://localhost:5173/*
     - Web Origins: http://localhost:5173
3. User 생성 및 비밀번호 생성
### 로컬 환경 실행
```
npm run dev
```