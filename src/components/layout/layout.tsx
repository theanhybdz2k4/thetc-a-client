import { Outlet } from 'react-router';
interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='bg-tertiary flex'>
      <div className='flex w-[calc(100vw-6rem)] flex-1 flex-col'>
        <main className='flex-1'>{children || <Outlet />}</main>
      </div>
    </div>
  );
};

export default Layout;