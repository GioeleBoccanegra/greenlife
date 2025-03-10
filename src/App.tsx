
import './App.css'
import { TaskItem } from './componets/taskItem'
import { useState } from "react";
function App() {
  const [nTaskFinite, setNTaskFinite] = useState(0);

  const tasks: string[] = ["evitare di sprecare acqua", "evitare sprechi di cibo", "fare raccolta differenziata", "utilizzare mezzi pubblici invece dell'auto"]

  const handleNTaskFinite = (isChecked: boolean) => {
    setNTaskFinite(prev => isChecked ? prev + 1 : prev - 1)
  }
  /*Viene chiamata quando una checkbox viene selezionata o deselezionata.
Il parametro isChecked è true se la checkbox è stata selezionata e false se è stata deselezionata.
setCheckedCount(prev => ...) aggiorna lo stato basandosi sul valore precedente (prev).*/

  return (
    <>
      <div className='greenlife-app'>
        <h1>greenlife</h1>
        {tasks?.map((task) => (
          <TaskItem key={task} task={task} onCheckboxChange={handleNTaskFinite} />
        ))}

        <p>azioni completate:{nTaskFinite}</p>

      </div>
    </>
  )
}

export default App


/*<div>{postList?.map((post) => (
      <Post post={post} />
    )*/