Package.describe({
  name: 'dburles:spacebars-tohtml',
  summary: "Easily compile spacebars templates to html",
  version: "1.2.0",
  git: "https://github.com/dburles/meteor-spacebars-tohtml.git"
});

Package.onUse(function (api) {
  api.versionsFrom(['1.12.2']);
  api.use(['ecmascript', 'spacebars', 'spacebars-compiler', 'templating', 'blaze']);
  api.addFiles('spacebars-tohtml.js');
});
