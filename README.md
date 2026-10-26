# socle discovery demo

![socle discovery homepage](docs/discovery-desktop.png)

this is a small, standalone preview of socle discovery. it gives you a feel for how people can find places, save ideas for later, and explore spots that fit what they like.

you can try the homepage, browse sample places and collections, and use the search and mood filters. everything here runs on sample data in the page. it does not connect to a socle account or to anyone's real information.

[visit socle](https://socle.pages.dev/)

## a little about socle

socle connects the places people discover with the teams who make those experiences happen.

- **discovery** helps people find places, make lists, share recommendations, and build a picture of their taste over time.
- **business** gives hospitality teams ways to understand guest feedback, notice patterns, and recognize the people behind a good experience.
- **snap** is a physical touchpoint in development that can bring a guest from a place they visit into a digital feedback experience.

this repo only shows a preview of the discovery homepage. the other parts are not included here.

## why this is a demo

the full socle app lives in a private repo. it includes unfinished product work, account and business features, internal services, and integrations that should not be exposed in a small public preview. keeping this demo separate makes it easier to try and understand, while keeping the wider product and its development history private.

## run it on your computer

you'll need node.js 22 or newer. from this folder, run:

```sh
npm install
npm run dev
```

then open [http://127.0.0.1:3044](http://127.0.0.1:3044).

to make a production build locally:

```sh
npm run build
npm start
```

## what's in the demo

- a responsive discovery homepage
- sample place and collection shelves
- search and mood filters that work with the sample content
- keyboard search shortcut, local-time greeting, and reduced-motion support
- touch scrolling and previous/next controls for the shelves

## what's not in the demo

there's no sign-in, account, navigation menu, place detail page, database, api, location tracking, taste scoring, analytics, or business dashboard. the cards are previews, and the sample places and collections are included just to make the page useful to explore.

## photos and brand

photo sources are listed in `PHOTO-CREDITS.md` and in the page's photo credits dialog. the photos belong to their credited owners. this repo also does not grant permission to reuse socle's name, logo, or other brand assets.
