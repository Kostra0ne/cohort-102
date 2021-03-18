import React from 'react';
import '../styles/Greetings.css';

// This could come from a configuration file, that's why I didn't put it inside
// the component.

const langs = {
  de: 'Guten tag mein freund',
  en: 'Hello',
  fr: 'Bonjour',
  es: 'Ola',
};

function Greetings({ lang, children }) {
  return (
    <div className="Greetings">
      {langs[lang]} {children}
    </div>
  );

  // switch (lang) {
  //   case 'de':
  //     return <div className="Greetings">Hallo {children}</div>;
  //   case 'fr':
  //     return <div className="Greetings">Bonjour {children}</div>;
  //   case 'es':
  //     return <div className="Greetings">Ola {children}</div>;
  //   case 'en':
  //     return <div className="Greetings">Hello {children}</div>;
  // }

  // if (lang === 'de') {
  //   return <div className="Greetings">Hallo {children}</div>;
  // } else if (lang === 'fr') {
  //   return <div className="Greetings">Bonjour {children}</div>;
  // } else if (lang === 'en') {
  //   return <div className="Greetings">Hello {children}</div>;
  // } else if (lang === 'es') {
  //   return <div className="Greetings">Hello {children}</div>;
  // }
}

export default Greetings;
