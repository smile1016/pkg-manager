module.exports = {
    allowBranch: ['master', 'v0.*', 'zxl/fix-bumpfile'],
    releaseBranchFormat: '1-zxl/release-v{{version}}',
    bumpFiles: [
        'package.json',
        {
            filename: './VERSION.txt',
            type: 'plain-text'
        },
        {
            filename: './src/version.json',
            type: 'json'
        },
        {
            filename: './src/version.ts',
            type: 'code'
        }
    ],
    skip: {
        // branch: true
    },
    commitAll: true,
    hooks: {
        prepublish: 'yarn run build',
        postpublish: 'npm run pub-only',
        postbump: 'git add .'
    }
};
