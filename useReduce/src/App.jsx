import React, { useReducer } from 'react'


function App() {

   const initialstete = {count: 0}

   const [state, dispatch] = useReducer(reducer, initialstete)
       function reducer (state , action){
              
         if(action.type === "increase" ){
            
           return {count: state.count+1}
           
    
         }
         if(action.type =="decrease" ){
            
           return {count: state.count-1}
           

         }

       }
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
      <div className="w-full max-w-sm rounded-2xl bg-white shadow-xl border border-slate-200 p-8 text-center">
        <h1 className="text-6xl font-bold text-slate-800">{state.count}</h1>

        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            className="rounded-lg bg-emerald-600 px-5 py-2 text-base font-semibold text-white transition hover:bg-emerald-700 active:scale-95"
            onClick={() => {
              dispatch({ type: "increase" })
            }}
          >
            Increase
          </button>
          <button
            className="rounded-lg bg-rose-600 px-5 py-2 text-base font-semibold text-white transition hover:bg-rose-700 active:scale-95"
            onClick={() => {
              dispatch({ type: "decrease" })
            }}
          >
            Decrease
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
