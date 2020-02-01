const CRAWL_ARG = process.env.CRAWL;

console.log('CRAWL_ARG', CRAWL_ARG);

module.exports = function() {
    return {
        visitor: {
            Program(path) {
                if(CRAWL_ARG == 'true') {
                    console.log('crawling');
                    path.scope.crawl();
                }
            },
        },
    };
};
