import { useParams } from 'react-router-dom';
import StudyHub from '@/components/projectDetail/StudyHub';
import G2G from '@/components/projectDetail/G2G';
function ProjectDetailPage() {
  const params = useParams();
  switch (params.project_name) {
    case 'StudyHub':
      return <StudyHub />;
    case 'G2G':
      return <G2G />;
  }
}
export default ProjectDetailPage;
