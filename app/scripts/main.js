/*global projects, $*/


window.projects = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  init: function () {
    'use strict';
    console.log('Hello from Backbone!');
  }
};

$(document).ready(function () {
  'use strict';
  projects.init();
});
