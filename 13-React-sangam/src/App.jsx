// import './App.css'
import Profile from './components/profile'
import Cart from './components/cart'
import './index.css'

function App() {
  const name = 'Narottam';
  return (
    <div>
      <h1 className='font-bold bg-neutral-400 text-pink-700 text-5xl p-2 m-3 ' >Root Component</h1>
      <Profile/>
      <Cart name={name} age={21} city='vizag' />
    </div>
  )
}

export default App
