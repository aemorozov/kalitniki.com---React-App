/* eslint-disable @typescript-eslint/no-var-requires */
const withLinaria = require('next-linaria');

// module.exports = withLinaria({});

module.exports = {
    compiler: {
        // Enables the styled-components SWC transform
        styledComponents: true
    }
}
