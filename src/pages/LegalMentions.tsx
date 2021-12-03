import React from 'react';
import '../App.css';
import LegalMentions_About from '../components/LegalMentions/legalMentions-about';
import HUD from './HUD';



function LegalMentions() {
  return (
   <body>
     <div className="App">
       <HUD />
       <LegalMentions_About />
     </div>

   </body>
    

  );
}

export default LegalMentions;
