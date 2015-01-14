System.config({
  "baseUrl": "dist",
  "paths": {
    "*": "*.js",
    "github:*": "jspm_packages/github/*.js",
    "npm:*": "jspm_packages/npm/*.js",
    "aurelia-skeleton-navigation/*": "lib/*.js"
  },
  "bundles": {
    "build": [
      "github:aurelia/metadata@0.2.4/system/origin",
      "github:aurelia/metadata@0.2.4/system/resource-type",
      "github:aurelia/metadata@0.2.4/system/annotations",
      "github:aurelia/loader@0.3.1/system/index",
      "github:aurelia/path@0.4.0/system/index",
      "github:aurelia/logging@0.2.1/system/index",
      "github:aurelia/dependency-injection@0.3.1/system/annotations",
      "github:aurelia/dependency-injection@0.3.1/system/util",
      "github:aurelia/templating@0.7.0/system/behavior-instance",
      "github:aurelia/task-queue@0.2.1/system/index",
      "github:aurelia/binding@0.2.1/system/path-observer",
      "github:aurelia/binding@0.2.1/system/composite-observer",
      "github:aurelia/binding@0.2.1/system/expressions/ast",
      "github:aurelia/binding@0.2.1/system/event-manager",
      "github:aurelia/binding@0.2.1/system/array-change-records",
      "github:aurelia/binding@0.2.1/system/dirty-checking",
      "github:aurelia/binding@0.2.1/system/property-observation",
      "github:aurelia/binding@0.2.1/system/value-converter",
      "github:aurelia/binding@0.2.1/system/binding-modes",
      "github:aurelia/binding@0.2.1/system/expressions/lexer",
      "github:aurelia/binding@0.2.1/system/binding-expression",
      "github:aurelia/binding@0.2.1/system/listener-expression",
      "github:aurelia/binding@0.2.1/system/name-expression",
      "github:aurelia/binding@0.2.1/system/call-expression",
      "github:aurelia/templating@0.7.0/system/children",
      "github:aurelia/templating@0.7.0/system/util",
      "github:aurelia/templating@0.7.0/system/content-selector",
      "github:aurelia/templating@0.7.0/system/resource-registry",
      "github:aurelia/templating@0.7.0/system/view",
      "github:aurelia/templating@0.7.0/system/view-slot",
      "github:aurelia/templating@0.7.0/system/binding-language",
      "github:aurelia/templating@0.7.0/system/view-strategy",
      "github:aurelia/templating@0.7.0/system/template-controller",
      "github:aurelia/templating@0.7.0/system/element-config",
      "github:aurelia/templating@0.7.0/system/composition-engine",
      "github:aurelia/framework@0.7.0/system/plugins",
      "github:aurelia/logging-console@0.2.1/system/index",
      "github:aurelia/metadata@0.2.4/system/index",
      "github:aurelia/loader@0.3.1",
      "github:aurelia/path@0.4.0",
      "github:aurelia/logging@0.2.1",
      "github:aurelia/dependency-injection@0.3.1/system/container",
      "github:aurelia/task-queue@0.2.1",
      "github:aurelia/binding@0.2.1/system/ast",
      "github:aurelia/binding@0.2.1/system/array-observation",
      "github:aurelia/binding@0.2.1/system/expressions/parser",
      "github:aurelia/templating@0.7.0/system/property",
      "github:aurelia/templating@0.7.0/system/view-factory",
      "github:aurelia/logging-console@0.2.1",
      "github:aurelia/metadata@0.2.4",
      "github:aurelia/dependency-injection@0.3.1/system/index",
      "github:aurelia/binding@0.2.1/system/observer-locator",
      "github:aurelia/templating@0.7.0/system/view-compiler",
      "github:aurelia/loader-systemjs@0.3.2/system/index",
      "github:aurelia/dependency-injection@0.3.1",
      "github:aurelia/binding@0.2.1/system/index",
      "github:aurelia/templating@0.7.0/system/view-engine",
      "github:aurelia/loader-systemjs@0.3.2",
      "github:aurelia/binding@0.2.1",
      "github:aurelia/templating@0.7.0/system/custom-element",
      "github:aurelia/templating@0.7.0/system/behaviors",
      "github:aurelia/templating@0.7.0/system/resource-coordinator",
      "github:aurelia/templating@0.7.0/system/attached-behavior",
      "github:aurelia/templating@0.7.0/system/index",
      "github:aurelia/templating@0.7.0",
      "github:aurelia/framework@0.7.0/system/aurelia",
      "github:aurelia/framework@0.7.0/system/index",
      "github:aurelia/framework@0.7.0",
      "github:aurelia/bootstrapper@0.8.0/system/index",
      "github:aurelia/bootstrapper@0.8.0",
      "github:aurelia/route-recognizer@0.2.1/system/dsl",
      "github:aurelia/router@0.4.2/system/navigation-plan",
      "github:aurelia/router@0.4.2/system/navigation-instruction",
      "github:aurelia/router@0.4.2/system/router-configuration",
      "github:aurelia/router@0.4.2/system/util",
      "github:aurelia/history@0.2.1/system/index",
      "github:aurelia/router@0.4.2/system/pipeline",
      "github:aurelia/router@0.4.2/system/model-binding",
      "github:aurelia/router@0.4.2/system/route-loading",
      "github:aurelia/router@0.4.2/system/navigation-commands",
      "github:aurelia/templating-router@0.8.0/system/router-view",
      "dist/child-router",
      "github:aurelia/http-client@0.4.1/system/headers",
      "github:aurelia/http-client@0.4.1/system/http-response-message",
      "github:aurelia/http-client@0.4.1/system/jsonp-request-message",
      "dist/welcome",
      "github:aurelia/route-recognizer@0.2.1/system/index",
      "github:aurelia/router@0.4.2/system/navigation-context",
      "github:aurelia/history@0.2.1",
      "github:aurelia/router@0.4.2/system/activation",
      "github:aurelia/http-client@0.4.1/system/http-request-message",
      "github:aurelia/route-recognizer@0.2.1",
      "github:aurelia/router@0.4.2/system/pipeline-provider",
      "github:aurelia/http-client@0.4.1/system/http-client",
      "github:aurelia/router@0.4.2/system/router",
      "github:aurelia/http-client@0.4.1/system/index",
      "github:aurelia/http-client@0.4.1",
      "dist/nav-bar",
      "dist/flickr",
      "github:aurelia/router@0.4.2/system/app-router",
      "github:aurelia/router@0.4.2/system/index",
      "github:aurelia/router@0.4.2",
      "github:aurelia/templating-router@0.8.0/system/route-loader",
      "github:aurelia/templating-router@0.8.0/system/index",
      "github:aurelia/templating-router@0.8.0",
      "dist/app",
      "dist/build-index"
    ]
  }
});

System.config({
  "map": {
    "aurelia-bootstrapper": "github:aurelia/bootstrapper@0.8.0",
    "aurelia-framework": "github:aurelia/framework@0.7.0",
    "aurelia-http-client": "github:aurelia/http-client@0.4.1",
    "aurelia-router": "github:aurelia/templating-router@0.8.0",
    "bootstrap": "github:twbs/bootstrap@3.3.1",
    "font-awesome": "npm:font-awesome@4.2.0",
    "github:aurelia/binding@0.2.1": {
      "aurelia-metadata": "github:aurelia/metadata@0.2.4",
      "aurelia-task-queue": "github:aurelia/task-queue@0.2.1"
    },
    "github:aurelia/bootstrapper@0.8.0": {
      "aurelia-event-aggregator": "github:aurelia/event-aggregator@0.2.1",
      "aurelia-framework": "github:aurelia/framework@0.7.0",
      "aurelia-history": "github:aurelia/history@0.2.1",
      "aurelia-history-browser": "github:aurelia/history-browser@0.2.1",
      "aurelia-loader-systemjs": "github:aurelia/loader-systemjs@0.3.2",
      "aurelia-logging-console": "github:aurelia/logging-console@0.2.1",
      "aurelia-router": "github:aurelia/router@0.4.2",
      "aurelia-templating": "github:aurelia/templating@0.7.0",
      "aurelia-templating-binding": "github:aurelia/templating-binding@0.7.0",
      "aurelia-templating-resources": "github:aurelia/templating-resources@0.7.0",
      "aurelia-templating-router": "github:aurelia/templating-router@0.8.0"
    },
    "github:aurelia/dependency-injection@0.3.1": {
      "aurelia-metadata": "github:aurelia/metadata@0.2.4",
      "core-js": "npm:core-js@0.4.4"
    },
    "github:aurelia/framework@0.7.0": {
      "aurelia-binding": "github:aurelia/binding@0.2.1",
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.3.1",
      "aurelia-loader": "github:aurelia/loader@0.3.1",
      "aurelia-logging": "github:aurelia/logging@0.2.1",
      "aurelia-metadata": "github:aurelia/metadata@0.2.4",
      "aurelia-task-queue": "github:aurelia/task-queue@0.2.1",
      "aurelia-templating": "github:aurelia/templating@0.7.0"
    },
    "github:aurelia/history-browser@0.2.1": {
      "aurelia-history": "github:aurelia/history@0.2.1",
      "core-js": "npm:core-js@0.4.4"
    },
    "github:aurelia/http-client@0.4.1": {
      "aurelia-path": "github:aurelia/path@0.4.0",
      "core-js": "npm:core-js@0.4.4"
    },
    "github:aurelia/loader-systemjs@0.3.2": {
      "aurelia-loader": "github:aurelia/loader@0.3.1",
      "aurelia-metadata": "github:aurelia/metadata@0.2.4",
      "aurelia-path": "github:aurelia/path@0.4.0"
    },
    "github:aurelia/loader@0.3.1": {
      "aurelia-html-template-element": "github:aurelia/html-template-element@0.1.2",
      "core-js": "npm:core-js@0.4.4",
      "webcomponentsjs": "github:webcomponents/webcomponentsjs@0.5.2"
    },
    "github:aurelia/router@0.4.2": {
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.3.1",
      "aurelia-history": "github:aurelia/history@0.2.1",
      "aurelia-path": "github:aurelia/path@0.4.0",
      "aurelia-route-recognizer": "github:aurelia/route-recognizer@0.2.1",
      "core-js": "npm:core-js@0.4.4"
    },
    "github:aurelia/templating-binding@0.7.0": {
      "aurelia-binding": "github:aurelia/binding@0.2.1",
      "aurelia-templating": "github:aurelia/templating@0.7.0"
    },
    "github:aurelia/templating-resources@0.7.0": {
      "aurelia-binding": "github:aurelia/binding@0.2.1",
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.3.1",
      "aurelia-templating": "github:aurelia/templating@0.7.0",
      "core-js": "npm:core-js@0.4.4"
    },
    "github:aurelia/templating-router@0.8.0": {
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.3.1",
      "aurelia-metadata": "github:aurelia/metadata@0.2.4",
      "aurelia-path": "github:aurelia/path@0.4.0",
      "aurelia-router": "github:aurelia/router@0.4.2",
      "aurelia-templating": "github:aurelia/templating@0.7.0"
    },
    "github:aurelia/templating@0.7.0": {
      "aurelia-binding": "github:aurelia/binding@0.2.1",
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.3.1",
      "aurelia-html-template-element": "github:aurelia/html-template-element@0.1.2",
      "aurelia-loader": "github:aurelia/loader@0.3.1",
      "aurelia-logging": "github:aurelia/logging@0.2.1",
      "aurelia-metadata": "github:aurelia/metadata@0.2.4",
      "aurelia-path": "github:aurelia/path@0.4.0",
      "aurelia-task-queue": "github:aurelia/task-queue@0.2.1",
      "core-js": "npm:core-js@0.4.4"
    },
    "github:jspm/nodelibs-process@0.1.0": {
      "process": "npm:process@0.10.0"
    },
    "github:jspm/nodelibs@0.0.8": {
      "Base64": "npm:Base64@0.2.1",
      "base64-js": "npm:base64-js@0.0.8",
      "ieee754": "npm:ieee754@1.1.4",
      "inherits": "npm:inherits@2.0.1",
      "json": "github:systemjs/plugin-json@0.1.0"
    },
    "github:twbs/bootstrap@3.3.1": {
      "css": "github:systemjs/plugin-css@0.1.0",
      "jquery": "github:components/jquery@2.1.3"
    }
  }
});

