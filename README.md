# React + TypeScript + Vite + shadcn/ui

This is a template for a new Vite project with React, TypeScript, and shadcn/ui.

## Adding components

To add components to your app, run the following command:

```bash
npx shadcn@latest add button
```

This will place the ui components in the `src/components` directory.

## Using components

To use the components in your app, import them as follows:

```tsx
import { Button } from "@/components/ui/button"
```

## Deployment

This project is configured to deploy automatically to GitHub Pages whenever changes are pushed to the `master` branch.

The GitHub Actions workflow installs dependencies with pnpm, builds the Vite application, and publishes the generated `dist` directory.

### Enable GitHub Pages

In the repository settings, open **Pages** and select **GitHub Actions** as the build and deployment source. The deployment workflow will then publish the site at:

https://viora-studio.github.io/template-preview/

You can also start a deployment manually from the **Actions** tab by running **Deploy to GitHub Pages**.
