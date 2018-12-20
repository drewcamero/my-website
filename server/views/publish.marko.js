// Compiled using marko@4.14.7 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/camero-janandrew-node$1.0.0/server/views/publish.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html lang><head><meta charset=\"UTF-8\"><title>Let's Go!</title><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, shrink-to-fit=no\"><link rel=\"stylesheet\" type=\"text/css\" href=\"/index.css\"></head><body>");

  component_globals_tag({}, out);

  out.w("<header><h1>Let's Go!</h1><p>Have a trip around the world with us.</p></header><main><div class=\"topnav\"><a href=\"/\" style=\"float: left\">Home</a></div><h2 style=\" color: rgb(54, 63, 105); text-align:center; margin-top:50px\">Add a Place</h2><form class=\"form\" action=\"/publish\" method=\"POST\" style=\"text-align:center\"><div class=\"form-group\"><input class=\"form-control publish-textfield\" input=\"text\" name=\"name\" placeholder=\"Landmark\" required></div><div class=\"form-group\"><input class=\"form-control publish-textfield\" input=\"text\" name=\"country\" placeholder=\"Country\" required></div><div class=\"form-group\"><textarea class=\"publish-textarea\" name=\"description\" placeholder=\"Overview\" required></textarea></div><input class=\"form-control publish-textfield\" input=\"text\" name=\"pic_a\" placeholder=\"Enter the directory of your Landmark's photo.\" required><br><div class=\"form-group\"><button class=\"btn btn-primary publish-button\" type=\"submit\">Submit</button></div></form><div class=\"before-footer\"><div class=\"content-footer\"><span style=\"font-weight:bold\">More About the </span><span style=\"font-weight:bold; font-style:italic\">Let's Go: </span><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint quia cumque porro fuga fugiat saepe consequuntur utr sit amet, consectetur adipisicing elit. Sint quia cumque porro fuga fugiat saepe consequuntur ut deserunt earum tempora alias quod similique commodi, incidunt tenetur nihil iste. Laboriosam, eos?</span></div></div></main><footer><p>&copy; All rights reserved. Camero | 2018</p></footer>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "32");

  out.w("</body><div class=\"card-again\"><div class=\"card-image\"></div><div class=\"card-body\"></div><div class=\"card-footer\"></div></div></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/camero-janandrew-node$1.0.0/server/views/publish.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
