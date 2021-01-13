export class EnvConfig {

    apiUrl = ''
    envName = ''

    constructor() {
        // Read environment variables from browser window
        const browserWindow = window || {};
        if (browserWindow.hasOwnProperty('__env')) {
            const envWindow = browserWindow['__env']
            // assign to props
            this.apiUrl = envWindow.apiUrl
            this.envName = envWindow.envName
        }
    }
} 