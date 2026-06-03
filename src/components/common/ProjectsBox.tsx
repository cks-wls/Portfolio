import type { ProjectsType } from '@/type/projectsType';
import StateBtn from '@/components/common/StateBtn';
import TechBtn from '@/components/common/TechBtn';
import LinkToGitHubBtn from '@/components/common/LinkToGitHubBtn';
import LinkToFigmaBtn from '@/components/common/LinkToFigmaBtn';
import arrowIcon from '@/assets/icons/arrow.svg';
function ProjectsBox({ projectData }: { projectData: ProjectsType }) {
  return (
    <div className="flex flex-col w-full">
      {/* gif 및 projectDetail이동 부분 */}
      <div className="relative">
        <video autoPlay muted playsInline>
          <source src={projectData.videoUrl} />
        </video>
        {/* overlay */}
        <div className="absolute bg-black opacity-50 w-full h-full top-0"></div>
        {/* detail 페이지 이동 부분 */}
        <div className="absolute top-0 text-white flex flex-col  gap-4 w-full h-full justify-center items-center">
          <p className="text-6xl">{projectData.title}</p>
          <section className="cursor-pointer hover:[transform:translateX(20px)] transition-transform duration-500">
            <p className="text-xl text-center">Project Detail</p>
            <img src={arrowIcon} />
          </section>
        </div>
      </div>
      {/* 간략한 설명부분 */}
      <section className="p-6 flex flex-col">
        {/* description 부분 */}
        <p className="text-sm font-normal text-gray-500 mb-2">
          {projectData.description}
        </p>
        {/* 제목 및 상태버튼 */}
        <div className="flex gap-2 items-center mb-4">
          <h1 className="text-4xl font-bold">{projectData.title}</h1>
          <StateBtn state={projectData.state} text={projectData.stateText} />
        </div>
        {/* 제작기간 부분 */}
        <div className="flex gap-5 items-center mb-3">
          <p className="text-sm text-gray-600 font-semibold">제작기간</p>
          <p className="text-sm text-gray-400 font-light">
            {projectData.period}
          </p>
        </div>
        {/* 사용 기술 스택 부분 */}
        <div className="flex gap-2 flex-wrap mb-6">
          {projectData.techStack?.map((value) => (
            <TechBtn text={value} />
          ))}
        </div>
        {/* 링크 */}
        <div className="flex flex-wrap gap-2">
          <LinkToGitHubBtn link={projectData.githubUrl} />
          <LinkToFigmaBtn link={projectData.figmaUrl} />
        </div>
      </section>
    </div>
  );
}
// 이후에 데이터 받아와서 map으로 매핑하는 것 필요
export default ProjectsBox;
