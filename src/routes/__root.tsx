import { HeadContent, Outlet, Scripts, createRootRoute } from '@tanstack/react-router'
import { useRef } from 'react'
import CurtainController from '../components/CurtainController'
import CurtainOverlay from '../components/CurtainOverlay'
import Cursor from '../components/Cursor'
import LocomotiveProvider from '../components/LocomotiveProvider'
import Nav from '../components/Nav'
import { CurtainContext } from '../hooks/CurtainContext'
import appCss from '../styles.css?url'

const THEME_SCRIPT = `(function(){try{
  var t=localStorage.getItem('theme')||'auto';
  var dark=window.matchMedia('(prefers-color-scheme: dark)').matches;
  var resolved=t==='auto'?(dark?'dark':'light'):t;
  var r=document.documentElement;
  r.classList.add(resolved);
  if(t!=='auto')r.setAttribute('data-theme',t);
}catch(e){}})();`

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:site_name', content: 'Franck Ehui' },
      { property: 'og:locale', content: 'fr_FR' },
      { property: 'twitter:card', content: 'summary_large_image' },
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,440;0,9..144,560;1,9..144,440;1,9..144,500&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&display=swap',
      },
    ],
  }),
  component: RootLayout,
})

function RootLayout() {
  const curtainRef = useRef<HTMLDivElement>(null)

  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
        <HeadContent />
      </head>
      <body>
        <Cursor />
        <CurtainOverlay ref={curtainRef} />
        <CurtainContext.Provider value={curtainRef}>
          <LocomotiveProvider>
            <CurtainController />
            <Nav curtainRef={curtainRef} />
            <div id="site-main" className="site-main">
              <Outlet />
            </div>
          </LocomotiveProvider>
        </CurtainContext.Provider>
        <Scripts />
      </body>
    </html>
  )
}
