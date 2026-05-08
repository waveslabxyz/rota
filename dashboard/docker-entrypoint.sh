#!/bin/sh
set -eu

RUNTIME_API_URL="${API_URL:-${NEXT_PUBLIC_API_URL:-http://localhost:8001}}"
export RUNTIME_API_URL

node - <<'NODE'
const fs = require("fs");

const config = {
  apiUrl: process.env.RUNTIME_API_URL || "http://localhost:8001",
};

fs.writeFileSync(
  "/app/public/runtime-config.js",
  `window.__ROTA_CONFIG__ = ${JSON.stringify(config)};\n`,
);
NODE

exec "$@"
