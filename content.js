/*
  MCGC STUDIO — EDIT THIS FILE
  --------------------------------
  This is the main place to customize your site.

  IMAGE TIP:
  1. Put your image inside the /images folder.
  2. Write its filename below, e.g.:
     image: "images/my-photo.jpg"

  You do NOT need to edit index.html for normal portfolio updates.
*/

const site = {
  title: "Margaux Christie — MCGC Studio",
  name: "Margaux Christie",
  heroKicker: "Margaux Christie — Visual Artist / Creative",
  heroIntro: "Visual artist and creative collaborator working across photography, publishing, archives, moving image, painting and mixed media. Based in Paris / working internationally.",
  booksIntro: "Selected publishing projects and collaborations developed within the worlds of photography, fashion and contemporary image-making.",
  clientsIntro: "A selection of artists, estates, galleries and creative organisations I have worked with across photography, digital, archives, websites and creative projects.",
  photoIntro: "An ongoing personal photography practice centred on analogue image-making, observation and the physical process of working with film.",
  mixedIntro: "A multidisciplinary practice moving between physical image-making and time-based work, with painting, video and music treated as connected forms of experimentation.",
  contactTitle: "Available for\ncreative work.",
  contactCopy: "For creative collaborations, portfolio mentoring, photography, publishing, archive and visual projects.",
  email: "hello@mcgcstudio.com",
  languages: "French / English · International"
};

const books = [
  {
    title: "Fashion Eye Ibiza — Lachlan Bailey",
    meta: "Louis Vuitton / Book project",
    image: "https://es.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-fashion-eye-ibiza---lachlan-bailey--R09968_PM2_Front%20view.jpg",
    link: "https://eu.louisvuitton.com/eng-e1/products/-u-nvprod7510014v/R09968",
    linkLabel: "View publication ↗",
    description: "Studio and publishing work for Lachlan Bailey, supporting the development and production of the book project for Louis Vuitton's Fashion Eye collection.",
    contribution: "Replace this sentence with the precise work you want to highlight."
  },
  {
    title: "Rendez-vous! — Sonia Sieff",
    meta: "Rizzoli / Book project",
    image: "https://static.fnac-static.com/multimedia/Images/FR/NR/58/73/00/16806744/1540-1/tsp20240119121048/Rendez-Vous.jpg",
    link: "https://www.fnac.pt/Sonia-sieff-rendez-vous-SIEFF-SONIA/a11745656",
    linkLabel: "View publication ↗",
    description: "Work developed alongside Sonia Sieff around the publication and wider creative project behind Rendez-vous!, her photographic exploration of the male nude.",
    contribution: "Replace this sentence with the precise work you want to highlight."
  }

  // Add more books by copying the block above and changing the details.
];

const clients = [
  { name: "The Residents of San Francisco", description: "Creative / Art-world collaboration", link: "" },
  { name: "Sonia Sieff", description: "Photography / Publishing / Studio", link: "" },
  { name: "Jeanloup Sieff", description: "Estate / Archive / Digital", link: "" },
  { name: "Matthieu Salvaing", description: "Website creation / Archive work", link: "https://matthieusalvaing.com/" },
  { name: "Lachlan Bailey", description: "Studio management / Publishing", link: "" },
  { name: "Galerie Allen", description: "Gallery / Contemporary art", link: "" },
  { name: "Temple Caché", description: "Creative / Moving image", link: "https://www.templecache.com/work/" }
];

const photo = [
  {
    title: "Personal photography",
    image: "",
    placeholder: "Add strongest analogue photograph",
    captionTitle: "Personal photography.",
    caption: "A slower, tactile practice built around shooting on film, developing an individual visual language and allowing chance, materiality and the limitations of analogue processes to shape the image."
  },
  { title: "Photograph 2", image: "", placeholder: "Add photograph" },
  { title: "Photograph 3", image: "", placeholder: "Add photograph" }
];

const mixedMedia = [
  { title: "Painting", image: "", placeholder: "Add painting", caption: "Painting / mixed media" },
  { title: "Video", image: "", placeholder: "Add video still", caption: "Video / moving image" },
  { title: "Music", image: "", placeholder: "Add music / visual work", caption: "Music / sound / visual work" }
];
