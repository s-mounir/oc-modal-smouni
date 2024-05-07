## Installation

`npm install oc-modal-smouni`

## Utilisation

```
import { useState } from 'react'
import Modal from 'oc-modal-smouni'

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="App">
        <button onClick={() => setIsOpen(true)}>Open Modal</button>
        <Modal
            isOpen={isOpen} 
            onClose={() => setIsOpen(false)}
            title=''
            modalButtonText='Close'
            modalButtonClose={() => setIsOpen(false)}
            modalBackgroundColor='white'
            modalTextColor='#5a6f07'
            modalBorderRadius='16'
            modalBorderStyle='solid'
            modalBorderWidth='2'
            modalBorderColor='#5a6f07'
            modalButtonBackgroundColor='#e7ebdc'
            modalButtonTextColor='#5a6f07'
            modalButtonRadius='5'
            modalButtonBorderStyle='solid'
            modalButtonBorderWidth='2'
            modalButtonBorderColor='#5a6f07'
            >
            <p>Employee Created!</p>
        </Modal>
    </div>
  );
}

export default App;
```

## Props

Le composant `Modal` accepte les props suivantes :

- `isOpen` (booléen) : Détermine si la fenêtre modale doit être affichée ou non.
- `onClose` (fonction) : Fonction à exécuter lorsque l'utilisateur ferme la fenêtre modale à l'aide de la croix.
- `title` (string) : Titre à afficher dans la fenêtre modale.
- `modalButtonText` (string) : Le texte à afficher dans le bouton de fermeture de la modale.
- `modalButtonClose` (fonction) : Fonction à exécuter lorsque l'utilisateur clique sur le bouton.
- `modalBackgroundColor` (string) : La couleur de fond de la modale.
- `modalTextColor` (string) : La couleur du texte de la modale.
- `modalBorderRadius` (string) : L'arrondis des coins de la modale.
- `modalBorderStyle` (string) : Le style de la bordure de la modale.
- `modalBorderWidth` (string) : L'épaisseur de la bordure de la modale.
- `modalBorderColor` (string) : La couleur de la bordure de la modale.
- `modalButtonBackgroundColor` (string) : La couleur de fond du bouton
- `modalButtonTextColor` (string) : La couleur du texte du bouton.
- `modalButtonRadius` (string) : L'arrondis des coins du bouton de la modale.
- `modalButtonBorderStyle` (string) : Le style de la bordure du bouton de la modale.
- `modalButtonBorderWidth` (string) : L'épaisseur du bouton de la bordure de la modale.
- `modalButtonBorderColor` (string) : La couleur de la bordure du bouton de la modale.