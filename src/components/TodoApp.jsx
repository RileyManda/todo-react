import { Routes, Route } from 'react-router-dom';

import Home from '@/routes/Home';
import Layout from '@/components/Layout';


const TodoApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};
export default TodoApp;
