import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";
import {
  EB_Garamond,
  JetBrains_Mono,
  Playfair_Display,
} from "next/font/google";

const bodyFont = EB_Garamond({
  subsets: ["latin"],
});

const headingFont = Playfair_Display({
  subsets: ["latin"],
});

const monoFont = JetBrains_Mono({
  subsets: ["latin"],
});

const customConfig = defineConfig({
  theme: {
    tokens: {
      fonts: {
        body: { value: bodyFont.style.fontFamily },
        heading: { value: headingFont.style.fontFamily },
        mono: { value: monoFont.style.fontFamily },
      },
    },
  },
});

export const system = createSystem(defaultConfig, customConfig);
