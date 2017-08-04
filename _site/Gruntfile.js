module.exports = function (grunt)
{
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.initConfig({
        less: {
            blog: {
                options: {
                    compress: true,
                    sourceMap: true,
                    sourceMapUrl: 'styles/app.css.map'
                },
                files: {
                    'styles/app.css': 'styles/app.less'
                }
            }
        },
        watch: {
            styles: {
                files: [
                    'styles/**/*.less'
                ],
                tasks: ['less:blog']
            }
        }
    });
};
