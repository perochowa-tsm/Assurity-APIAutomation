const { DEFAULT_THEME } = require('@cucumber/pretty-formatter')

module.exports = {
    default: {
        require: ["features/", "steps/"],
        format: ["@cucumber/pretty-formatter"],
        formatOptions: {
            ...DEFAULT_THEME,
            enableColors: false,
            'step text': 'magenta'
        },
        publishQuiet: true
    }
};