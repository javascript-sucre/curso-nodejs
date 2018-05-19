var gulp = require('gulp');

gulp.task('mi-task', () => {
    console.log('place code here')
});

gulp.task('default', ["mi-task"], () => {
    // place code for your default task here
    console.log('task default')
});