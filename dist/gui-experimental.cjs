"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("@opencode/plugin/gui"),i=`
:root {
  --container-session: 100% !important;
}

.md\\:max-w-session {
  max-width: 100% !important;
}

[data-timeline-row] {
  max-width: 100% !important;
}
`,n=e.Plugin.define({i18n:{en:{title:"Wide View"}},setup(t){t.add(e.Style,i)}});exports.default=n;
