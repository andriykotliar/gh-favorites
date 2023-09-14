# GitHub Favorites

## Installation

Clone the repository

```bash
# Over SSH
git clone git@github.com:andriykotliar/gh-favorites.git

# Over HTTPS
git clone https://github.com/andriykotliar/gh-favorites.git

```

Install dependencies:

```bash
cd gh-favorites
npm install
```

Create **.env** file and put there two variables:

1. **VITE_GRAPHQL_URI** - full path to the GitHub GraphQL endpoint: https://api.github.com/graphql
2. **VITE_GITHUB_ACCESS_TOKEN** - your personal GitHub access token. See details: https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens 

Run the project

```bash
npm start
```