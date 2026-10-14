import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div className="main-layout flex-1 flex flex-col">
      <Outlet />
    </div>
  );
};

export default MainLayout;
