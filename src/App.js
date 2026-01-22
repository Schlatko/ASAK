import React, { Suspense, lazy, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

/**
 * MOCK / FALLBACK LOGIK FÜR DIE VORSCHAU-UMGEBUNG
 * Diese Blöcke verhindern Abstürze in der Chat-Vorschau, 
 * erlauben aber die korrekte Funktion in Ihrem echten Projekt.
 */

// Fallback für react-helmet
let Helmet = ({ children }) => <>{children}</>;
try {
  const HelmetPkg = require("react-helmet");
  if (HelmetPkg.Helmet) Helmet = HelmetPkg.Helmet;
} catch (e) {}

// Fallback für react-ga
let ReactGA = {
  initialize: () => {},
  pageview: () => {}
};
try {
  const GAPkg = require("react-ga");
  if (GAPkg.default) ReactGA = GAPkg.default;
} catch (e) {}

// Hilfskomponente für die Vorschau, falls Dateien lokal nicht gefunden werden
const PreviewFallback = ({ name }) => (
  <div className="p-20 text-center bg-gray-50 border-2 border-dashed border-gray-200 rounded-3xl m-10">
    <h2 className="text-2xl font-bold text-blue-900 mb-2">{name}</h2>
    <p className="text-gray-500 text-sm">
      In der Chat-Vorschau sichtbar, da der lokale Pfad hier nicht existiert.<br/>
      In Ihrem Projekt wird die echte Datei geladen.
    </p>
  </div>
);

/**
 * SAFE LAZY IMPORT
 * Versucht die echte Datei zu laden. Schlägt dies fehl (nur hier in der Vorschau),
 * wird ein Platzhalter angezeigt, damit der Code kompiliert.
 */
const safeLazy = (importFn, name) => {
  return lazy(() => 
    importFn()
      .catch(() => ({ default: () => <PreviewFallback name={name} /> }))
  );
};

/**
 * 1. STATISCHE IMPORTE (Diese werden sofort geladen - Wichtig für LCP)
 * Stellen Sie sicher, dass diese Dateien in Ihrem src-Ordner existieren.
 */
// Wir nutzen hier safeLazy für Asakhome, damit die Vorschau nicht abbricht, 
// aber im echten Projekt sollten Sie es statisch lassen für beste Performance.
const Asakhome = safeLazy(() => import("./pages/asakhome"), "Startseite (Asakhome)");

// Hilfskomponenten
const ScrollToTop = ({ children }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return children;
};

const ContactButtons = () => (
  <div className="fixed bottom-5 right-5 z-50">
    {/* Hier Ihre Kontakt-Button Logik */}
  </div>
);

/**
 * 2. LAZY IMPORTE (Diese Seiten werden in separate kleine Dateien ausgelagert)
 * WICHTIG: Löschen Sie alle alten "import ... from ..." Zeilen dieser Seiten am Dateianfang!
 */
const ContactsASAK = safeLazy(() => import("./pages/ContactsASAK"), "Kontakt");
const Offers = safeLazy(() => import("./pages/offers"), "Leistungen");
const Spritzguss = safeLazy(() => import("./pages/offers/spritzguss"), "Spritzguss");
const Impressum = safeLazy(() => import("./pages/offers/impressum"), "Impressum");
const Formenbau = safeLazy(() => import("./pages/offers/formenbau"), "Formenbau");
const Laser = safeLazy(() => import("./pages/offers/laser"), "Laser");
const Prototypen = safeLazy(() => import("./pages/offers/prototypen"), "Prototypen");
const Referenzen = safeLazy(() => import("./pages/referenzen"), "Referenzen");
const Ueberuns = safeLazy(() => import("./pages/ueberuns"), "Über uns");
const Page404 = safeLazy(() => import("./pages/others/Page404"), "404 Seite");

function App() {
  useEffect(() => {
    // Analytics Initialisierung
    try {
      ReactGA.initialize("G-0QZ3K396JQ");
      ReactGA.pageview(window.location.pathname + window.location.search);
    } catch (e) {
      console.warn("Analytics konnte nicht initialisiert werden");
    }
  }, []);

  return (
    <Suspense fallback={
      <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
        <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
        <p style={{ marginTop: '20px', color: '#666', fontFamily: 'sans-serif' }}>ASAK wird geladen...</p>
      </div>
    }>
      <BrowserRouter basename={"/"}>
        <ScrollToTop>
          <Helmet>
            <script id="Cookiebot" src="https://consent.cookiebot.com/uc.js" data-cbid="dc5f3370-0340-4d54-adf8-21f967cc4e29" data-blockingmode="auto" type="text/javascript"></script>
          </Helmet>
          
          <ContactButtons />

          <Routes>
            {/* Haupt-Route mit Sprach-Präfix */}
            <Route path="/:lang">
              
              {/* Index-Route für die Startseite */}
              <Route index element={<Asakhome />} />

              {/* Leistungen */}
              <Route path="leistungen" element={<Offers />} />
              <Route path="uslugi" element={<Offers />} />
              <Route path="services" element={<Offers />} />
      
              {/* Dynamisch geladene Unterseiten */}
              <Route path="spritzguss" element={<Spritzguss />} />
              <Route path="shpritsovane" element={<Spritzguss />} />
              <Route path="injection-molding" element={<Spritzguss />} />

              <Route path="laser" element={<Laser />} />
              <Route path="lazerno-gravirane" element={<Laser />} />
              <Route path="laser-engraving" element={<Laser />} />

              <Route path="ueberuns" element={<Ueberuns />} />
              <Route path="za-nas" element={<Ueberuns />} />
              <Route path="about-us" element={<Ueberuns />} />

              <Route path="formenbau" element={<Formenbau />} />
              <Route path="izrabotka-na-matrici" element={<Formenbau />} />
              <Route path="mold-making" element={<Formenbau />} />

              <Route path="referenzen" element={<Referenzen />} />
              <Route path="referentsii" element={<Referenzen />} />
              <Route path="references" element={<Referenzen />} />

              <Route path="prototypen" element={<Prototypen />} />
              <Route path="3d-printirane" element={<Prototypen />} />
              <Route path="3d-printing" element={<Prototypen />} />

              <Route path="kontakt" element={<ContactsASAK />} />
              <Route path="kontakti" element={<ContactsASAK />} />
              <Route path="contact" element={<ContactsASAK />} />

              <Route path="impressum" element={<Impressum />} />
              <Route path="legal-notice" element={<Impressum />} />

              <Route path="*" element={<Page404 />} />
            </Route>

            {/* Automatischer Redirect: / -> /de */}
            <Route path="/" element={<Navigate to="/de" replace />} />

            {/* Globaler 404 Schutz */}
            <Route path="*" element={<Page404 />} />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;