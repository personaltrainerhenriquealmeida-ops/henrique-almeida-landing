#!/usr/bin/env node
// Troca o código de autorização do Instagram (Business Login) por um token
// long-lived (60 dias) e grava em .env.local. Nada sensível é impresso.
//
// Uso: node scripts/instagram-token.mjs
// Pede, com digitação oculta: a chave secreta do app do Instagram e o código.

import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { createInterface } from "node:readline";

const CLIENT_ID = process.env.IG_APP_ID ?? "1941016390187674";
const REDIRECT_URI = process.env.IG_REDIRECT_URI ?? "https://localhost/";
const ENV_FILE = ".env.local";

function askHidden(question) {
  return new Promise((resolve) => {
    const rl = createInterface({ input: process.stdin, output: process.stdout, terminal: true });
    rl._writeToOutput = (text) => {
      // Mostra só a pergunta; esconde o que é digitado.
      if (text.startsWith(question)) process.stdout.write(question);
    };
    rl.question(question, (answer) => {
      rl.close();
      process.stdout.write("\n");
      resolve(answer.trim());
    });
  });
}

async function postJson(url, body) {
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(body),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(`${res.status}: ${data.error_message ?? data.error?.message ?? "erro desconhecido"}`);
  return data;
}

async function getJson(url) {
  const res = await fetch(url);
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(`${res.status}: ${data.error?.message ?? "erro desconhecido"}`);
  return data;
}

function saveToken(token) {
  let content = existsSync(ENV_FILE)
    ? readFileSync(ENV_FILE, "utf8")
    : existsSync(".env.example")
      ? readFileSync(".env.example", "utf8")
      : "";
  const line = `INSTAGRAM_ACCESS_TOKEN=${token}`;
  content = /^INSTAGRAM_ACCESS_TOKEN=.*$/m.test(content)
    ? content.replace(/^INSTAGRAM_ACCESS_TOKEN=.*$/m, line)
    : `${content.replace(/\n*$/, "\n")}${line}\n`;
  writeFileSync(ENV_FILE, content, { mode: 0o600 });
}

const secret = await askHidden("Chave secreta do app do Instagram: ");
// O código vem no endereço final (https://localhost/?code=...). Aceita o
// endereço inteiro ou só o código, e remove o sufixo "#_" que a Meta adiciona.
const rawCode = await askHidden("Código (ou o endereço inteiro): ");
const code = (rawCode.match(/[?&]code=([^&#]+)/)?.[1] ?? rawCode).replace(/#_$/, "");

if (!secret || !code) {
  console.error("Chave secreta e código são obrigatórios.");
  process.exit(1);
}

try {
  const short = await postJson("https://api.instagram.com/oauth/access_token", {
    client_id: CLIENT_ID,
    client_secret: secret,
    grant_type: "authorization_code",
    redirect_uri: REDIRECT_URI,
    code,
  });

  const long = await getJson(
    "https://graph.instagram.com/access_token?" +
      new URLSearchParams({
        grant_type: "ig_exchange_token",
        client_secret: secret,
        access_token: short.access_token,
      }),
  );

  const me = await getJson(
    "https://graph.instagram.com/me?" +
      new URLSearchParams({ fields: "username", access_token: long.access_token }),
  );

  saveToken(long.access_token);
  const days = Math.round(long.expires_in / 86400);
  console.log(`Token salvo em ${ENV_FILE} para @${me.username} (vale ~${days} dias).`);
} catch (error) {
  console.error(`Falhou: ${error.message}`);
  process.exit(1);
}
