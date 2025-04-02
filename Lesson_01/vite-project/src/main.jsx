import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";

import { legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './Home_Works/Redux/productsReducer.js'


import './index.css'
import App1 from './App1'

const store = createStore(reducer)

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <App1></App1>
    </BrowserRouter>
  </Provider>
)


//StrictMode render the page twice
//   <StrictMode>
//     {/* <App1_React_Ex_DynamicRendering /> */}
//     {/* <Persons /> */}
//     {/* <Ex3_Components_Communication_Parent/> */}
//     {/* <App1/> */}
//     {/* <Ex4_Access_Server /> */}
//     {/* <AccessServerEx01/> */}
//     {/* <Users/> */}
//     <Ex6_ComponentLifeCycle/>
//   </StrictMode>,
// )
