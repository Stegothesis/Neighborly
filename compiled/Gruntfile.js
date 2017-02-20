'use strict';

module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concurrent: {
      target: {
        tasks: ['nodemon', 'watch'],
        options: {
          logConcurrentOutput: true
        }
      }
    },
    watch: {
      browserify: {
        files: ['src/**/*.jsx'],
        tasks: ['browserify']
      }
    },
    browserify: {
      dist: {
        options: {
          transform: [['babelify', {
            presets: ['es2015', 'react']
          }]],
          watch: true,
          browserifyOptions: {
            debug: true,
            insertGlobals: true
          }
        },
        src: ['src/**/*.jsx'],
        dest: 'public/bundle.js'
      }
    },
    nodemon: {
      dev: {
        script: 'server/server.js',
        options: {
          ignore: ['node_modules/**'],
          callback: function callback(nodemon) {
            nodemon.on('log', function (event) {
              console.log(event.colour);
            });
            nodemon.on('config:update', function () {
              setTimeout(function () {
                require('open')('http://localhost:8080');
              }, 1000);
            });
          }
        }
      }
    },
    shell: {
      prodServer: {
        command: 'git push heroku master',
        options: {
          stdout: true,
          stderr: true,
          failOnError: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-shell');

  grunt.registerTask('default', ['build', 'concurrent:target']);
  grunt.registerTask('build', ['browserify']);
  grunt.registerTask('production', ['shell']);
};

// Run 'grunt' to compile with browserify and test locally.

// Using 'grunt production' will push to deployment as long as
// you have a remote to Heroku set up. Test using 'git remote -v'
// in the root of your repo.
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL0dydW50ZmlsZS5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiZ3J1bnQiLCJpbml0Q29uZmlnIiwicGtnIiwiZmlsZSIsInJlYWRKU09OIiwiY29uY3VycmVudCIsInRhcmdldCIsInRhc2tzIiwib3B0aW9ucyIsImxvZ0NvbmN1cnJlbnRPdXRwdXQiLCJ3YXRjaCIsImJyb3dzZXJpZnkiLCJmaWxlcyIsImRpc3QiLCJ0cmFuc2Zvcm0iLCJwcmVzZXRzIiwiYnJvd3NlcmlmeU9wdGlvbnMiLCJkZWJ1ZyIsImluc2VydEdsb2JhbHMiLCJzcmMiLCJkZXN0Iiwibm9kZW1vbiIsImRldiIsInNjcmlwdCIsImlnbm9yZSIsImNhbGxiYWNrIiwib24iLCJldmVudCIsImNvbnNvbGUiLCJsb2ciLCJjb2xvdXIiLCJzZXRUaW1lb3V0IiwicmVxdWlyZSIsInNoZWxsIiwicHJvZFNlcnZlciIsImNvbW1hbmQiLCJzdGRvdXQiLCJzdGRlcnIiLCJmYWlsT25FcnJvciIsImxvYWROcG1UYXNrcyIsInJlZ2lzdGVyVGFzayJdLCJtYXBwaW5ncyI6Ijs7QUFBQUEsT0FBT0MsT0FBUCxHQUFpQixVQUFTQyxLQUFULEVBQWdCO0FBQy9CQSxRQUFNQyxVQUFOLENBQWlCO0FBQ2ZDLFNBQUtGLE1BQU1HLElBQU4sQ0FBV0MsUUFBWCxDQUFvQixjQUFwQixDQURVO0FBRWZDLGdCQUFZO0FBQ1ZDLGNBQVE7QUFDTkMsZUFBTyxDQUFDLFNBQUQsRUFBWSxPQUFaLENBREQ7QUFFTkMsaUJBQVM7QUFDTEMsK0JBQXFCO0FBRGhCO0FBRkg7QUFERSxLQUZHO0FBVWZDLFdBQU87QUFDTEMsa0JBQVk7QUFDVkMsZUFBTyxDQUFDLGNBQUQsQ0FERztBQUVWTCxlQUFPLENBQUMsWUFBRDtBQUZHO0FBRFAsS0FWUTtBQWdCZkksZ0JBQVk7QUFDVkUsWUFBTTtBQUNKTCxpQkFBUztBQUNQTSxxQkFBVyxDQUNULENBQUMsVUFBRCxFQUFhO0FBQ1hDLHFCQUFTLENBQUMsUUFBRCxFQUFXLE9BQVg7QUFERSxXQUFiLENBRFMsQ0FESjtBQU1QTCxpQkFBTyxJQU5BO0FBT1BNLDZCQUFtQjtBQUNqQkMsbUJBQU8sSUFEVTtBQUVqQkMsMkJBQWU7QUFGRTtBQVBaLFNBREw7QUFhSkMsYUFBSyxDQUFDLGNBQUQsQ0FiRDtBQWNKQyxjQUFNO0FBZEY7QUFESSxLQWhCRztBQWtDZkMsYUFBUztBQUNQQyxXQUFLO0FBQ0hDLGdCQUFRLGtCQURMO0FBRUhmLGlCQUFTO0FBQ1BnQixrQkFBUSxDQUFDLGlCQUFELENBREQ7QUFFUEMsb0JBQVUsa0JBQVVKLE9BQVYsRUFBbUI7QUFDM0JBLG9CQUFRSyxFQUFSLENBQVcsS0FBWCxFQUFrQixVQUFVQyxLQUFWLEVBQWlCO0FBQ2pDQyxzQkFBUUMsR0FBUixDQUFZRixNQUFNRyxNQUFsQjtBQUNELGFBRkQ7QUFHQVQsb0JBQVFLLEVBQVIsQ0FBVyxlQUFYLEVBQTRCLFlBQVk7QUFDeENLLHlCQUFXLFlBQVc7QUFDcEJDLHdCQUFRLE1BQVIsRUFBZ0IsdUJBQWhCO0FBQ0QsZUFGRCxFQUVHLElBRkg7QUFHQyxhQUpEO0FBS0Q7QUFYTTtBQUZOO0FBREUsS0FsQ007QUFvRGZDLFdBQU87QUFDTEMsa0JBQVk7QUFDVkMsaUJBQVMsd0JBREM7QUFFVjNCLGlCQUFTO0FBQ1A0QixrQkFBUSxJQUREO0FBRVBDLGtCQUFRLElBRkQ7QUFHUEMsdUJBQWE7QUFITjtBQUZDO0FBRFA7QUFwRFEsR0FBakI7O0FBZ0VBdEMsUUFBTXVDLFlBQU4sQ0FBbUIscUJBQW5CO0FBQ0F2QyxRQUFNdUMsWUFBTixDQUFtQixrQkFBbkI7QUFDQXZDLFFBQU11QyxZQUFOLENBQW1CLGVBQW5CO0FBQ0F2QyxRQUFNdUMsWUFBTixDQUFtQixrQkFBbkI7QUFDQXZDLFFBQU11QyxZQUFOLENBQW1CLGFBQW5COztBQUVBdkMsUUFBTXdDLFlBQU4sQ0FBbUIsU0FBbkIsRUFBOEIsQ0FBQyxPQUFELEVBQVUsbUJBQVYsQ0FBOUI7QUFDQXhDLFFBQU13QyxZQUFOLENBQW1CLE9BQW5CLEVBQTRCLENBQUMsWUFBRCxDQUE1QjtBQUNBeEMsUUFBTXdDLFlBQU4sQ0FBbUIsWUFBbkIsRUFBaUMsQ0FBQyxPQUFELENBQWpDO0FBQ0QsQ0ExRUQ7O0FBNEVBOztBQUVBO0FBQ0E7QUFDQSIsImZpbGUiOiJHcnVudGZpbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGdydW50KSB7XG4gIGdydW50LmluaXRDb25maWcoe1xuICAgIHBrZzogZ3J1bnQuZmlsZS5yZWFkSlNPTigncGFja2FnZS5qc29uJyksXG4gICAgY29uY3VycmVudDoge1xuICAgICAgdGFyZ2V0OiB7XG4gICAgICAgIHRhc2tzOiBbJ25vZGVtb24nLCAnd2F0Y2gnXSxcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgbG9nQ29uY3VycmVudE91dHB1dDogdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICB3YXRjaDoge1xuICAgICAgYnJvd3NlcmlmeToge1xuICAgICAgICBmaWxlczogWydzcmMvKiovKi5qc3gnXSxcbiAgICAgICAgdGFza3M6IFsnYnJvd3NlcmlmeSddXG4gICAgICB9XG4gICAgfSxcbiAgICBicm93c2VyaWZ5OiB7XG4gICAgICBkaXN0OiB7XG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICB0cmFuc2Zvcm06IFtcbiAgICAgICAgICAgIFsnYmFiZWxpZnknLCB7XG4gICAgICAgICAgICAgIHByZXNldHM6IFsnZXMyMDE1JywgJ3JlYWN0J11cbiAgICAgICAgICAgIH1dXG4gICAgICAgICAgXSxcbiAgICAgICAgICB3YXRjaDogdHJ1ZSxcbiAgICAgICAgICBicm93c2VyaWZ5T3B0aW9uczoge1xuICAgICAgICAgICAgZGVidWc6IHRydWUsXG4gICAgICAgICAgICBpbnNlcnRHbG9iYWxzOiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBzcmM6IFsnc3JjLyoqLyouanN4J10sXG4gICAgICAgIGRlc3Q6ICdwdWJsaWMvYnVuZGxlLmpzJ1xuICAgICAgfVxuICAgIH0sXG4gICAgbm9kZW1vbjoge1xuICAgICAgZGV2OiB7XG4gICAgICAgIHNjcmlwdDogJ3NlcnZlci9zZXJ2ZXIuanMnLFxuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgaWdub3JlOiBbJ25vZGVfbW9kdWxlcy8qKiddLFxuICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAobm9kZW1vbikge1xuICAgICAgICAgICAgbm9kZW1vbi5vbignbG9nJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGV2ZW50LmNvbG91cik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIG5vZGVtb24ub24oJ2NvbmZpZzp1cGRhdGUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICByZXF1aXJlKCdvcGVuJykoJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MCcpO1xuICAgICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIHNoZWxsOiB7XG4gICAgICBwcm9kU2VydmVyOiB7XG4gICAgICAgIGNvbW1hbmQ6ICdnaXQgcHVzaCBoZXJva3UgbWFzdGVyJyxcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgIHN0ZG91dDogdHJ1ZSxcbiAgICAgICAgICBzdGRlcnI6IHRydWUsXG4gICAgICAgICAgZmFpbE9uRXJyb3I6IHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgZ3J1bnQubG9hZE5wbVRhc2tzKCdncnVudC1jb250cmliLXdhdGNoJyk7XG4gIGdydW50LmxvYWROcG1UYXNrcygnZ3J1bnQtYnJvd3NlcmlmeScpO1xuICBncnVudC5sb2FkTnBtVGFza3MoJ2dydW50LW5vZGVtb24nKTtcbiAgZ3J1bnQubG9hZE5wbVRhc2tzKCdncnVudC1jb25jdXJyZW50Jyk7XG4gIGdydW50LmxvYWROcG1UYXNrcygnZ3J1bnQtc2hlbGwnKTtcblxuICBncnVudC5yZWdpc3RlclRhc2soJ2RlZmF1bHQnLCBbJ2J1aWxkJywgJ2NvbmN1cnJlbnQ6dGFyZ2V0J10pO1xuICBncnVudC5yZWdpc3RlclRhc2soJ2J1aWxkJywgWydicm93c2VyaWZ5J10pO1xuICBncnVudC5yZWdpc3RlclRhc2soJ3Byb2R1Y3Rpb24nLCBbJ3NoZWxsJ10pO1xufVxuXG4vLyBSdW4gJ2dydW50JyB0byBjb21waWxlIHdpdGggYnJvd3NlcmlmeSBhbmQgdGVzdCBsb2NhbGx5LlxuXG4vLyBVc2luZyAnZ3J1bnQgcHJvZHVjdGlvbicgd2lsbCBwdXNoIHRvIGRlcGxveW1lbnQgYXMgbG9uZyBhc1xuLy8geW91IGhhdmUgYSByZW1vdGUgdG8gSGVyb2t1IHNldCB1cC4gVGVzdCB1c2luZyAnZ2l0IHJlbW90ZSAtdidcbi8vIGluIHRoZSByb290IG9mIHlvdXIgcmVwby4iXX0=