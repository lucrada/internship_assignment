import Header from './components/Header'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'
import Table1 from './pages/table1.page';
import Table2 from './pages/table2.page';
import Table3 from './pages/table3.page';
import Table4 from './pages/table4.page';
import Table5 from './pages/table5.page';
import NotFound from './pages/NotFound.page';

function App() {
  return (
    <div className='container'>
      <Header />
      <Routes>
        <Route path='/' element={<Table1 />} />
        <Route path='/table2' element={<Table2 />} />
        <Route path='/table3' element={<Table3 />} />
        <Route path='/table4' element={<Table4 />} />
        <Route path='/table5' element={<Table5 />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;