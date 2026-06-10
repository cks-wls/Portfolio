import { Route, Routes } from 'react-router-dom';
import { ROUTE_PATHS } from '@/constant/routePaths';
import MainPage from '@/pages/MainPage';
import ProjectDetailPage from '@/pages/ProjectDetailPage';
function AppRoutes() {
  return (
    <Routes>
      <Route index element={<MainPage />} />
      <Route
        path={ROUTE_PATHS.PROJECT_DETAIL(`:project_name`)}
        element={<ProjectDetailPage />}
      />
    </Routes>
  );
}
export default AppRoutes;
