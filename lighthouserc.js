module.exports = {
    ci: {
        collect: {
            startServerCommand: 'npm run start',
            numberOfRuns: 1,
            headful: false, //open chrome browser
            url: [
                "https://google.com"
            ],
            settings: {
                "preset": "desktop" //change this to mobile to another report
            },
            //chromePath: '/Applications/Google Chrome Canary.app/Contents/MacOS/Google Chrome Canary',
        },
        assert: {
            //preset: 'lighthouse:recommended', //score .6
            assertions: {
                "categories:performance": ["error", { minScore: .9 }],
                "categories:accessibility": ["error", { minScore: .9 }],
                "categories:best-practices": ["error", { minScore: .9 }],
                "categories:seo": ["error", { minScore: .9 }],
                "categories.pwa": "off",
            },
        },
        upload: {
            target: "temporary-public-storage",
        },
    },
};
