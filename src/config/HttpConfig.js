const development = "http://blockchain.dgyesbreghs.be:5000";
const staging = "https://icapps-nodejs-pdfwizz-staging.herokuapp.com/api";
const production = "https://icapps-nodejs-pdfwizz-staging.herokuapp.com/api";

const getBackendPath = () => {
    switch (process.env.NODE_ENV) {
        case "dev":
        case "development":
            return development;
        case "stag":
        case "staging":
            return staging;
        case "prod":
        case "production":
            return production;
        default:
            return development;
    }
};

export const cFetch = (path, options) => {
    if (!options) options = {};
    options.headers = {
        "Content-Type": 'application/json'
    };
    return fetch(getBackendPath() + path, options);
};

export const backendPath = getBackendPath();