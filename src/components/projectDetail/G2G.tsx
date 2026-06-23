import LinkToGitHubBtn from '@/components/common/LinkToGitHubBtn';
import LinkToFigmaBtn from '@/components/common/LinkToFigmaBtn';
import StateBtn from '@/components/common/StateBtn';
import DetailBtn from '@/components/common/DetailBtn';
import { Dot } from 'lucide-react';
import { ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
function G2G() {
  const tech = ['React', 'TypeScript', 'Scss', 'MSW'];
  const navigate = useNavigate();
  return (
    <div className="p-[64px_16px] gap-8 flex flex-col sm:px-6 lg:px-8">
      {/* 프로젝트 목록으로 */}
      <section
        className="text-sm inline-flex gap-2 items-center w-[150px] h-[30px] text-gray-500 hover:bg-gray-200 hover:text-black hover:rounded-md"
        onClick={() => navigate(-1)}
      >
        <ChevronLeft strokeWidth={1.5} />
        <p>프로젝트 목록으로</p>
      </section>
      {/* 이미지 들어갈 부분*/}
      {/* <p>이미지</p> */}
      {/* 제목, 설명, 기술버튼 */}
      <div className="flex flex-col gap-3">
        <section className="flex gap-3 items-center justify-between">
          {/* 제목 및 서비스 버튼 */}
          <div className="flex gap-2 items-center">
            <h2 className="text-4xl">G2G</h2>
            <StateBtn state="canceled" text="서비스 중단" />
          </div>
          {/* 링크 부분 */}
          <div className="flex gap-2">
            <LinkToGitHubBtn link="https://github.com/cks-wls/Frontend-G2G" />
            <LinkToFigmaBtn link="https://www.figma.com/design/pIfFlfkDcyGfZsZNGjPOgM/G2G--%EC%99%80%EC%9D%B4%EC%96%B4%ED%94%84%EB%A0%88%EC%9E%84?node-id=0-1&p=f&t=JKWWUxW6QxoRjtwv-0" />
          </div>
        </section>
        {/* 간략한 설명 부분 */}
        <p className="text-lg text-gray-400 font-normal">
          지역 생산자와 소비자를 바로 잇는 직거래 플랫폼
        </p>
        <div className="flex gap-2 flex-wrap mt-3">
          {tech.map((val, index) => (
            <DetailBtn text={val} key={index} />
          ))}
        </div>
      </div>
      {/* 주요 기능 개발 */}
      <div className="flex flex-col gap-3">
        <h1 className="text-4xl font-bold mb-1">주요 기능 개발</h1>
        <h3 className="text-2xl font-semibold">
          1. 회원 가입 및 로그인 기능 개발
        </h3>
        <div className="flex flex-col gap-2">
          <section className="flex gap-2">
            <Dot />
            <p className="text-gray-400">
              폼 입력값 기반 유효성 검사 및 에러 메시지 처리
            </p>
          </section>
          <section className="flex gap-2">
            <Dot />
            <p className="text-gray-400">
              이메일 인증 기반 회원가입 플로우 구현
            </p>
          </section>
        </div>
        {/* 1-2 */}
        <h3 className="text-2xl font-semibold">2. 상품 상세 페이지 개발</h3>
        <div className="flex flex-col gap-2">
          <section className="flex gap-2">
            <Dot />
            <p className="text-gray-400">
              옵션 선택, 이미지 프리뷰, 리뷰 렌더링 등 상세 데이터 구조화
            </p>
          </section>
          <section className="flex gap-2">
            <Dot />
            <p className="text-gray-400">
              재사용 가능한 모듈 단위로 컴포넌트를 분리하여 유지보수성 강화
            </p>
          </section>
        </div>
        {/* 1-3 */}
        <h3 className="text-2xl font-semibold">3. 공통 컴포넌트 개발</h3>
        <div className="flex flex-col gap-2">
          <section className="flex gap-2">
            <Dot />
            <p className="text-gray-400">
              다양한 페이지에서 활용 가능한 범용 Form 컴포넌트 구현
            </p>
          </section>
          <section className="flex gap-2">
            <Dot />
            <p className="text-gray-400">Props 기반의 유연한 PageNation 설계</p>
          </section>
          <section className="flex gap-2">
            <Dot />
            <p className="text-gray-400">
              프로젝트 전반의 UI 및 로직 일관성 강화
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
export default G2G;
