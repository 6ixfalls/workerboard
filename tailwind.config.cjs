module.exports = {
    content: [
        './index.html',
        './src/**/*.{vue,js,ts}',
        'node_modules/preline/dist/*.js'
    ],
    plugins: [
        require('preline/plugin'),
        require('@tailwindcss/forms'),
    ],
}