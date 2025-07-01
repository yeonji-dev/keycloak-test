import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
    realm: "YEONJI",
    url: "http://localhost:8888/",
    clientId: "testuser01"
});

export default keycloak;