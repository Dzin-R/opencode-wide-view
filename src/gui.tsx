import { Plugin, Style } from "@opencode/plugin/gui"

const css = `
:root {
  --container-session: 100% !important;
}

.md\\:max-w-session {
  max-width: 100% !important;
}

[data-timeline-row] {
  max-width: 100% !important;
}
`

export default Plugin.define({
  i18n: {
    en: {
      title: "Wide View",
    },
  },
  setup(ctx) {
    ctx.add(Style, css)
  },
})
