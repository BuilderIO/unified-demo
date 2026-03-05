# Ecommerce

Welcome to our ecommerce project! This README provides all the necessary information to get started, including links to our Jira board and Figma designs, as well as instructions for running the project locally.

## Links

- **Jira Board**: Pick up tickets to build from our [Jira Board](https://builder-io.atlassian.net/jira/core/projects/CE/board).
- **Figma Designs**: View our designs on [Figma](https://www.figma.com/design/uLnxlr3A1qA7g5PHVGoETT/Logan's-Playground?node-id=1-9&t=KQZ9egfmxQ5dU1Cv-0).

## Getting Started

1. **Clone and enter the repo** (if you haven’t already):
   ```bash
   git clone https://github.com/BuilderIO/unified-demo
   cd unified-demo/ecommerce
   ```

2. **Use Node 22** — e.g. with nvm: `nvm install` then `nvm use`.

3. **Set your API key** — add `NEXT_PUBLIC_BUILDER_API_KEY` to `.env` (see `.env.example` for format).

4. **Install and run**:
   ```bash
   npm install && npm run dev
   ```
   If that fails, try `npm ci` (clean install from lockfile), then `npm run dev`.
   Or use `yarn`, `pnpm`, or `bun` with their equivalent install and dev commands.

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Testing the build

To verify the project builds successfully, run `npm run build && npm run start`.


