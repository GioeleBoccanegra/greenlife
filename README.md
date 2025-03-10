# GreenLife App

GreenLife è un'applicazione web sviluppata con React che aiuta gli utenti a monitorare e completare azioni quotidiane per ridurre la propria impronta ecologica. Ogni azione sostenibile può essere selezionata o deselezionata, e il conteggio delle azioni completate si aggiornerà automaticamente.
L'app è disponibile su [http://localhost:3000](https://gioele-boccanegra-greenlife-app.netlify.app/).

## Funzionalità

- Visualizza una lista di azioni sostenibili da completare ogni giorno.
- Ogni azione è accompagnata da una checkbox che l'utente può selezionare o deselezionare.
- Il conteggio delle azioni completate viene aggiornato ogni volta che una checkbox viene selezionata o deselezionata.
- Interfaccia semplice e reattiva.

## Tecnologie Utilizzate

- **React**: per la creazione dell'interfaccia utente.
- **useState**: per la gestione dello stato delle checkbox e del conteggio delle azioni completate.

## Installazione

1. **Clona il repository**:

   ```
   bash
   git clone https://github.com/GioeleBoccanegra/greenlife.git
   ```
2.**Accedi alla cartella del progetto**:

```
cd greenlife
```
3.**Installa le dipendenze**:
```
npm install
```
4.**Avvia il server di sviluppo**:
```
npm start

```

## Struttura del Progetto

- **`src/App.tsx`**: il componente principale dell'app che gestisce il conteggio delle azioni completate e la lista delle task.
- **`src/components/TaskItem.tsx`**: il componente per ogni singola azione sostenibile, che include una checkbox e un titolo per ogni task.

## Contribuire

Se desideri contribuire al progetto, sentiti libero di fare una **fork** e inviare una **pull request**. Ogni contributo è benvenuto!



