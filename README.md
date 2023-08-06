# TerritoriesTree

## Potential Questions

### Why are the API routes prefixed with `/api`? (e.g `/api/account/login`)
I completely understand that the APIs should not have a `/api` prefx (e.g `/account/login`) as per the instructions. Unfortunately, due to NextJS's conventions, we are required to prefix our APIs with `/api` :(

### How do I get started?

- Clone this repo.
- Install [yarn](https://classic.yarnpkg.com/en/docs/install#debian-stable).
- Run `yarn install`.
- Include these environment variables:
```
BASE_URL=https://netzwelt-devtest.azurewebsites.net
JWT_SECRET={ INSERT SECRET HERE }
```
- Run `yarn dev`.
- Open `http://localhost:3000`.
- You're good to go :)
