import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
    realm: "MYSERVICE",
    url: "http://localhost:30548/",
    clientId: "keycloak-test"
});

export default keycloak;