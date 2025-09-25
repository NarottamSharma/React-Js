import { Suspense } from 'react'
import FormUseAction from './components/FormUseAction'
// import AdvForm from './components/AdvForm'
// import FetchTodo from './components/FetchTodo'
// import Theme from './components/Theme'

const App = () => {
  return (
    // <div>
    //   {/* <Form/> */}
    //   <AdvForm/>
    // </div>
    <Suspense fallback={<h2>Loading...</h2>}>
      {/* <FetchTodo /> */}
      {/* <Theme/> */}
      <FormUseAction/>
    </Suspense>
  )
}

export default App