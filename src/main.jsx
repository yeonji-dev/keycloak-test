import ReactDOM from "react-dom/client";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import { StrictMode } from "react";
import './App.css';
import { ReactKeycloakProvider } from "@react-keycloak/web";
import keycloak from "./keycloak.js";

// 생성된 경로 트리 가져오기
import { routeTree } from "./routeTree.gen";

// 새 라우터 인스턴스 만들기
const router = createRouter({ routeTree });

// 앱 렌더링
const rootElement = document.getElementById("root");
if (rootElement && !rootElement.innerHTML) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <ReactKeycloakProvider authClient={keycloak}>
            <StrictMode>
                <RouterProvider router={router} />
            </StrictMode>
        </ReactKeycloakProvider>
    );
}