import { Routes, Route } from 'react-router-dom';

import Home from '@/routes/Home';
import NotMatch from '@/routes/NotMatch';
import Layout from '@/components/Layout';


const TodoApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="*" element={<NotMatch />} />
      </Route>
    </Routes>
  );
};
export default TodoApp;
