# socle

socle is a project i'm building for people who enjoy finding places, and the businesses behind those places.

Socle discovery is where you can find cafés, restaurants, hotels and other hospitality spots, save them into lists, and share them with friends. the business side helps owners understand customer feedback and what people enjoy or want improved through a hardware system im developing called the Snap.

i wanted these things to connect. finding somewhere, going there, saving it and talking about it shouldn’t feel like completely separate experiences.

## PLEASE READ before testing!!

the full project is HEREEEEEEEEEEEEEE:

[**https://socle.pages.dev**](https://socle.pages.dev)

this repo ONLY contains a DEMO of the discovery homepage. running it locally opens that limited preview, so you won’t see the full account system, individual place pages, messaging or business dashboard here.

## so uhh.... what’s in the full version?

- discovery, saved places and custom lists
- social posts, messaging and sharing places with friends
- taste profiles that develop from your activity
- business tools for reviewing customer feedback

## what’s been difficult?

getting the phone experience right has taken a LOT of testing :'( navigation sometimes got stuck, buttons could respond slowly, and the old feature introductions kept interrupting people.

i replaced those separate introductions with one onboarding flow at the beginning. there are still things to improve, so specific feedback about where something breaks is useful.

## why isn’t everything public?

i’m keeping the full source private because it contains systems and implementation details i don’t want to release publicly. this repo lets people explore part of socle without publishing the entire platform.

try it out and tell me what feels confusing, what breaks, and what you’d actually use!!

## run the demo on your computer

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

## a look at the demo

![socle discovery homepage demo](docs/discovery-desktop.png)

the demo runs on sample data and doesn't connect to anyone's real account information. it includes place and collection shelves, search and mood filters, keyboard controls, touch scrolling, and reduced-motion support.

## photos and brand

photo sources are listed in `PHOTO-CREDITS.md` and in the page's photo credits dialog. the photos belong to their credited owners. this repo also does not grant permission to reuse socle's name, logo, or other brand assets.
