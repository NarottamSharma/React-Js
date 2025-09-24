import { Suspense } from 'react'
// import AdvForm from './components/AdvForm'
import FetchTodo from './components/FetchTodo'

const App = () => {
  return (
    // <div>
    //   {/* <Form/> */}
    //   <AdvForm/>
    // </div>
    <Suspense fallback={<h2>Loading...</h2>}>
      <FetchTodo />
    </Suspense>
  )
}

export default App