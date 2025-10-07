import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "es", "fr", "de", "it", "nl", "pt"],
  defaultLocale: "en",
  pathnames: {
    "/": "/",
    "/pathnames": {
      de: "/pfadnamen",
      fr: "/chemins",
      it: "/percorsi",
      es: "/rutas",
      nl: "/padnamen",
      pt: "/caminhos",
    },
  },
});
