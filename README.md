# Socle — Discovery Homepage Demo

**Discover places that feel like you. Understand the experiences that bring people back.**

Socle is a hospitality platform connecting the people who explore places with the teams who make those experiences possible. It brings discovery, personal taste, guest feedback, employee recognition, and business intelligence into one connected product.

For someone looking for their next coffee spot, dinner, or weekend plan, Socle helps turn a collection of places into something personal. For a hospitality business, it helps connect individual guest experiences to the questions behind them: what people enjoyed, what needs attention, which team members made a difference, and what to do next.

**This public repository contains a standalone demo of the Discovery homepage only. The full Socle application is developed in a separate private repository.** The product description below provides context for Socle as a whole; it does not describe features included in this demo.

![Socle Discovery homepage demo](docs/discovery-desktop.png)

## What Socle does

### Discovery: finding somewhere that feels like you

Socle Discovery is the guest-facing side of the platform. It brings together places, curated collections, personal lists, social sharing, and Taste: a developing picture of someone's preferences based on their interactions with places and experiences.

The aim is to help people explore with context. A good recommendation might be about the atmosphere, the occasion, the neighborhood, or the kind of day someone wants to have. Socle gives those details a place alongside the venue itself, so discovering somewhere, keeping it for later, sharing it, and returning to it can feel connected.

### Business: understanding the experience behind the numbers

Socle Business gives hospitality teams a workspace for guest feedback, operational insights, and employee recognition. It helps a business look beyond an overall rating to examine recurring themes, changes over time, and the people or parts of the experience guests mention.

Ask Socle adds a conversational AI workspace to that information. Businesses can ask questions about their reviews and analytics, investigate connections, compare possible explanations, and develop recommendations with the available evidence. The goal is an assistant that can help a team form a useful judgment and decide what to investigate or improve.

### Snap: connecting a physical experience to Socle

Socle Snap is the physical product being developed alongside the platform. Its QR-based touchpoint gives guests a way to enter a digital feedback experience from the place they are visiting, helping connect a real-world interaction with the information a business can learn from.

Together, these parts support a simple cycle: discover a place, have an experience, share useful feedback, and help the next experience become better.

Socle is under active development and early access. Availability varies across the broader product; this repository provides only the homepage preview described below.

[Visit the main Socle website](https://socle.pages.dev/)

## Why the full product is private

Socle is being developed as a commercial product. We are sharing this focused demo so people can explore its visual direction and inspect a working piece of the interface, while keeping the full product's implementation in its private repository.

The main reasons are:

- **Protecting original product work.** The full application includes proprietary Taste and recommendation logic, AI workflows, analytics, and the systems connecting Socle's guest and business experiences. Publishing this homepage does not disclose those implementations or grant access to the complete product.
- **Keeping internal operations outside the public demo.** The full platform includes business administration, authenticated services, and production integrations that are outside this demonstration's scope. This demo runs independently, without access to live accounts, business workspaces, customer records, or production credentials.
- **Controlling releases of work still in development.** The broader platform and its hardware integrations continue to evolve. A separate demo lets us share a clear, reproducible preview without distributing unfinished internal modules or implying that the entire platform is ready for others to deploy.

The private repository contains the broader application and its development history. This public repository contains the code needed to run this specific demo. Its README, screenshot, and feature list describe that limited scope.

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

## What this demo includes

- Responsive Discovery homepage in Socle's current visual style.
- Place and collection shelves, with touch scrolling and previous/next controls.
- Search and mood filters that narrow the sample places within this page.
- Local-time greeting, keyboard search shortcut, photo credits, and reduced-motion support.

## What this demo leaves out

There is no navigation bar, account system, login, place detail page, collection detail page, API, database, AI service, Taste scoring, analytics collection, location tracking, or connection to production user data. Cards are visual previews. The places and collections are a small public editorial snapshot; filtering is ordinary local text and tag matching.

No credentials or environment variables are required. This is a separate demonstration of the homepage, not a publication of the complete Socle product. Any program submission should describe this repository's actual scope and the work represented here.

## Photography and branding

Photography is credited in `PHOTO-CREDITS.md` and the page's Photo credits dialog. Images belong to their respective credited owners. This demo does not grant rights to third-party photography or Socle branding. No additional reuse license is granted by this repository.

## Development

This demo was extracted and adapted from the current Socle homepage with AI assistance. The new repository starts with that extraction; its commit history does not represent the complete development history of the private Socle application.
