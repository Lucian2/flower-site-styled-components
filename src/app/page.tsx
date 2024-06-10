'use client';

import { AboutComponent } from './_components/about/AboutComponent';
import { AlbumComponent } from './_components/album/Album';
import { IntroComponent } from './_components/intro/IntroComponent';
import { WelcomeComponent } from './_components/welcome/WelcomeComponent';

export default function Home() {
  return (
    <main>
      <IntroComponent />
      <WelcomeComponent />
      <AboutComponent />
      <AlbumComponent />
    </main>
  );
}
