# Socle Discovery — homepage demo

A standalone preview of the Socle Discovery homepage, using the existing Socle colors, typography, place cards and horizontal shelves.

This repository contains **only the homepage demo**. It is not the full Socle application or its source repository.

![Socle Discovery homepage demo](docs/discovery-desktop.png)

## Run locally

Install Node.js 22 or newer, then:

```sh
npm install
npm run dev
```

Open **http://127.0.0.1:3044**.

For a production build:

```sh
npm run build
npm start
```

## What works

- Responsive Discovery homepage in Socle's current visual style.
- Place and collection shelves, with touch scrolling and previous/next controls.
- Search and mood filters that narrow the sample places within this page.
- Local-time greeting, keyboard search shortcut, photo credits, and reduced-motion support.

## Scope

There is no navigation bar, account system, login, place detail page, collection detail page, API, database, AI service, Taste scoring, analytics collection, location tracking, or connection to production user data. Cards are visual previews. The places and collections are a small public editorial snapshot; filtering is ordinary local text and tag matching.

No credentials or environment variables are required. This is a separate demonstration of the homepage, not a representation that the complete Socle product has been published. Any program submission should describe this repository's actual scope and the work represented here.

## Photography and branding

Photography is credited in `PHOTO-CREDITS.md` and the page's Photo credits dialog. Images belong to their respective credited owners. This demo does not grant rights to third-party photography or Socle branding. No additional reuse license is granted by this repository.

## Development

This demo was extracted and adapted from the current Socle homepage with AI assistance. The new repository starts with that extraction; its commit history does not represent the complete development history of the private Socle application.
