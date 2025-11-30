import { createOpenAPI } from 'fumadocs-openapi/server';

export const openapi = createOpenAPI({
  // OpenAPI schema 远程 URL
  input: [
    'https://raw.githubusercontent.com/QuantumNous/new-api/refs/heads/main/docs/openapi/api.json',
    'https://raw.githubusercontent.com/QuantumNous/new-api/refs/heads/main/docs/openapi/relay.json',
  ],
});
