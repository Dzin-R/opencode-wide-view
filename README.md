# opencode-wide-view

Плагин для **OpenCode Desktop**, который убирает пустые поля слева и справа от колонки сообщений. Текст занимает всю ширину окна.

Плагин можно выключить в любой момент через **Settings → Extensions → Plugins → wide-view**.

## Установка

### Самый простой способ

Скажи ассистенту OpenCode:

```text
Подключи плагин https://github.com/Dzin-R/opencode-wide-view
```

Ассистент должен выполнить:

```powershell
opencode plugin add github:Dzin-R/opencode-wide-view#main
opencode service restart
```

### Вручную через CLI

```powershell
opencode plugin add github:Dzin-R/opencode-wide-view#main
```

### Вручную через конфиг

Добавь в глобальный `opencode.jsonc`:

```jsonc
{
  "plugins": ["github:Dzin-R/opencode-wide-view#main"]
}
```

После установки перезапусти сервис или нажми `/reload` в OpenCode.

## Важно

- Если у тебя уже лежит локальная папка плагина `~/.opencode/plugins/wide-view`, удали её перед установкой из GitHub — иначе будет `Duplicate plugin ID`.
- Плагин работает только в Desktop GUI. TUI не затрагивается.
- Требуется OpenCode Desktop `2.4.1` или совместимая версия. GUI API экспериментальный.
- Репозиторий публичный, Git-креды не нужны.

## Что делает плагин

Внедряет CSS через `ctx.add(Style, css)`:

```css
:root {
  --container-session: 100% !important;
}

.md\:max-w-session {
  max-width: 100% !important;
}

[data-timeline-row] {
  max-width: 100% !important;
}
```

## Сборка из исходников

```powershell
npm install
npm run build
```

Готовый файл: `dist/gui-experimental.cjs`. Именно он нужен во время установки — OpenCode не запускает сборку сам.
