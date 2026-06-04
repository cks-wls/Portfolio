import Header from '@/components/header/Header';
import Introduction from '@/components/introduction/Introduction';
import EducationBox from '@/components/common/EducationBox';
import ProjectsBox from '@/components/common/ProjectsBox';
import { useEffect, useState } from 'react';
function App() {
  const [educationData, setEducationData] = useState([]);
  const [projectData, setProjectData] = useState([]);
  // 추후에 useEffect말고 tanstack-query로 변경할 예정
  useEffect(() => {
    fetch('/api/educationApi.json')
      .then((response) => response.json())
      .then((data) => setEducationData(data));
    fetch('/api/projectsApi.json')
      .then((response) => response.json())
      .then((data) => setProjectData(data));
  }, []);
  return (
    <>
      <header className="w-[90%] mx-auto mt-6">
        <Header />
      </header>
      <section className="w-[95%] mx-auto mt-24 lg:w-[70%]  lg:mt-40">
        <Introduction />
      </section>
      {/* education 파트 */}
      <section className="w-[95%] mx-auto pt-20 flex flex-col items-center gap-4">
        <h2 className="text-4xl font-light">Education</h2>
        <p className="text-lg text-gray-700 font-light mb-12">
          개발을 시작한 이례로 학습과 성장을 쌓아가고 있습니다.
        </p>
        {educationData.length > 0 &&
          educationData.map((value, index) => (
            <EducationBox key={index} education={value} />
          ))}
      </section>
      {/* projects 파트 */}
      <section className="pt-20 flex flex-col items-center">
        <h2 className="text-4xl font-light mb-4">Projects</h2>
        <p className="text-lg text-gray-700 font-light mb-12">
          이미지를 클릭하여 프로젝트의 상세 과정과 결과를 확인해 보세요.
        </p>
        {projectData.length > 0 &&
          projectData.map((value, index) => (
            <ProjectsBox key={index} index={index} projectData={value} />
          ))}
      </section>
    </>
  );
}

export default App;
