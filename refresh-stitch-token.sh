#!/bin/bash
echo "Fetching fresh Stitch OAuth token..."
TOKEN=$(gcloud auth application-default print-access-token)

if [ -z "$TOKEN" ]; then
  echo "ERROR: Failed to get token. Run 'gcloud auth application-default login' first."
  exit 1
fi

# Update opencode.json with the new token
node -e "
const fs = require('fs');
const config = JSON.parse(fs.readFileSync('opencode.json', 'utf8'));
config.mcp.servers.stitch.headers['X-Goog-Api-Key'] = '$TOKEN';
fs.writeFileSync('opencode.json', JSON.stringify(config, null, 2));
console.log('Token updated in opencode.json');
"

echo "Done. You can now run 'oc-fe'."