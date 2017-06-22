interface AuthConfig {
    clientID: string;
    domain: string;
    callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
    clientID: 'e8zntnPXjX8CFNjkrGE0vRqTZm5cdGR5',
    domain: 'pinnackl.eu.auth0.com',
    callbackURL: 'http://localhost:4200/callback'
};