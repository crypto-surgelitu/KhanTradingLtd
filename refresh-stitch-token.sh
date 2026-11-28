#!/bin/bash
set -e
TOKEN=$(gcloud auth application-default print-access-token)
[ -n "$TOKEN" ] || { echo "ERROR: empty token"; exit 1; }
STITCH_TOKEN="$TOKEN" node -e '
const fs=require("fs");
const cfg=JSON.parse(fs.readFileSync("opencode.json","utf8"));
let hits=0;
(function walk(o){if(!o||typeof o!=="object")return;for(const k in o){if(k==="Authorization"&&typeof o[k]==="string"){o[k]="Bearer "+process.env.STITCH_TOKEN;hits++;}else walk(o[k]);}})(cfg);
if(hits===0){console.error("ERROR: no Authorization header");process.exit(1);}
fs.writeFileSync("opencode.json",JSON.stringify(cfg,null,2));
console.log("Refreshed "+hits+" header(s): "+process.env.STITCH_TOKEN.slice(0,8)+"...");
'
echo "Done. Run: oc-fe"
