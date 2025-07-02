import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
    realm: "myservice",
    url: "http://keycloak.local/",
    clientId: "keycloak_test"
});

export default keycloak;