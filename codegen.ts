import { CodegenConfig } from '@graphql-codegen/cli';
import dotenv from 'dotenv';

dotenv.config();

const GRAPHQL_URI = process.env.VITE_GRAPHQL_URI || '';
const GITHUB_ACCESS_TOKEN = process.env.VITE_GITHUB_ACCESS_TOKEN || '';

const config: CodegenConfig = {
  schema: {
    [GRAPHQL_URI]: {
      headers: {
        'Authorization': `Bearer ${GITHUB_ACCESS_TOKEN}`,
        'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36'
      }
    }
  },
  documents: ['src/queries/**/*.ts'],
  generates: {
    './src/__generated__/': {
      preset: 'client',
      plugins: [],
      presetConfig: {
        gqlTagName: 'gql',
      }
    }
  },
  ignoreNoDocuments: true,
};

export default config;