module.exports = function() {
    return {
        visitor: {
            Program(path) {
                path.scope.crawl();
            },
        },
    };
};
