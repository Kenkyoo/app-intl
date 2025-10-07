# App Intl

Aplicación Next.js con soporte multilenguaje usando **next-intl** y sincronización de traducciones con **Crowdin**.

https://app-intl.netlify.app/es

## 🚀 Características

- Next.js 15 con App Router
- Soporte para múltiples idiomas
- Integración con **next-intl**
- Archivos JSON para mensajes por idioma
- Traducciones gestionadas en **Crowdin**
- TailwindCSS para el estilo

## 📦 Instalación

```bash
npm install
```

## 🧩 Scripts

```bash
npm run dev      # Inicia el servidor en modo desarrollo
npm run build    # Genera la build de producción
npm start        # Inicia la app compilada
npm run lint     # Linter
```

## 🌍 Estructura de idiomas

```
/messages
  ├─ en.json
  ├─ es.json
  ├─ fr-FR.json
  ├─ it-IT.json
  ├─ de-DE.json
  ├─ nl-NL.json
  └─ pt-PT.json
```

## 🔗 Integración con Crowdin

1. Conecta tu proyecto de GitHub con Crowdin.
2. Sube tus archivos fuente (`en.json`).
3. Traduce los textos en la interfaz de Crowdin.
4. Descarga las traducciones y colócalas en `/messages`.
5. Asegúrate de que los nombres coincidan con el código de idioma usado en tu app.

## 💡 Ejemplo de uso de `next-intl`

```tsx
import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations("IndexPage");
  return <h1>{t("title")}</h1>;
}
```

## 📚 Requisitos

- Node.js >= 18
- Next.js 15+
- Cuenta en [Crowdin](https://crowdin.com)

## 🧠 Autor

Proyecto creado por **Franco** como ejemplo de internacionalización con Next.js y Crowdin.
