#!/usr/bin/env bash
# PostToolUse (Edit|Write): auto-format on every edit so changes exit in a known
# state instead of relying on a manual `npm run format` pass.
set -euo pipefail

input="$(cat)"
file_path="$(printf '%s' "$input" | python3.12 -c "import sys,json; print(json.load(sys.stdin).get('tool_input',{}).get('file_path',''))")"

[[ -f "$file_path" ]] || exit 0

case "$file_path" in
  *.ts|*.tsx|*.js|*.jsx|*.json|*.css|*.md) ;;
  *) exit 0 ;;
esac

output="$(npx prettier --write "$file_path" 2>&1)" || {
  echo "[post-edit-format] prettier --write failed on $file_path:" >&2
  echo "$output" >&2
}

exit 0
