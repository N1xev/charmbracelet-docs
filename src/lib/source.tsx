import { docs } from "@/.source";
import { loader } from "fumadocs-core/source";
import { icons } from 'lucide-react';
import { createElement } from 'react';
import Image from "next/image";


// See https://fumadocs.vercel.app/docs/headless/source-api for more info
export const source = loader({
    baseUrl: "/docs",
    source: docs.toFumadocsSource(),
    icon(icon) {
    if (!icon) {
      
      return;
    }
    if (icon === 'BubbleTea') {
      return <Image src="/bubbletea.png" alt="Bubble Tea" width={20} height={20} />;
    }
    if (icon === 'Bubbles') {
      return <Image src="/bubbles.png" alt="Bubble Tea" width={20} height={20} />;
    }
    if (icon === 'LipGloss') {
      return <Image src="/lipgloss.png" alt="Bubble Tea" width={20} height={20} />;
    }
    if (icon === 'Crush') {
      return <Image src="/crush.png" alt="Bubble Tea" width={20} height={20} />;
    }
    if (icon in icons) {
      return createElement(icons[icon as keyof typeof icons]);
    }

    if (icon in icons) return createElement(icons[icon as keyof typeof icons]);
  },
});
