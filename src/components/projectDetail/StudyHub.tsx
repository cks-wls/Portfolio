import LinkToGitHubBtn from '@/components/common/LinkToGitHubBtn';
import LinkToFigmaBtn from '@/components/common/LinkToFigmaBtn';
import StateBtn from '@/components/common/StateBtn';
import DetailBtn from '@/components/common/DetailBtn';
import { ChevronLeft } from 'lucide-react';
import { Dot } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
function StudyHub() {
  const tech = [
    'React',
    'TypeScript',
    'TailwindCss',
    'MSW',
    'Tanstack-Query',
    'Zustand',
    'React-Hook-Form',
  ];
  const navigate = useNavigate();
  return (
    <div className="p-[64px_16px] gap-8 flex flex-col sm:px-6 lg:px-8">
      {/* 프로젝트 목록으로 */}
      <section
        className="text-sm inline-flex items-center gap-2 w-[150px] h-[30px] text-gray-500 hover:bg-gray-200 hover:text-black hover:rounded-md"
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
            <h2 className="text-4xl">StudyHub</h2>
            <StateBtn state="canceled" text="서비스 중단" />
          </div>
          {/* 링크 부분 */}
          <div className="flex gap-2">
            <LinkToGitHubBtn link="https://github.com/cks-wls/oz_externship_fe_04_team1" />
            <LinkToFigmaBtn link="https://www.figma.com/design/wODos4K4lXwQFCfPjL7jLA/%EC%9D%B5%EC%8A%A4%ED%84%B4%EC%8B%AD--StudyHub----13%EA%B8%B0?node-id=0-1&p=f&t=9fviBYz0AW3lJWn1-0" />
          </div>
        </section>
        {/* 간략한 설명 부분 */}
        <p className="text-lg text-gray-400 font-normal">
          온라인 강의와 스터디 문화를 결합한 IT 학습 플랫폼
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
        <h3 className="text-2xl font-semibold">1. 마이페이지 개발</h3>
        {/* 1-1 */}
        <h5 className="text-xl">1-1. 내정보</h5>
        <div className="flex flex-col gap-2">
          <section className="flex gap-2">
            <Dot />
            <p className="text-gray-400">사용자 정보 조회 및 렌더링</p>
          </section>
          <section className="flex gap-2">
            <Dot />
            <p className="text-gray-400">사용자 정보 수정 기능 구현</p>
          </section>
          <section className="flex gap-2">
            <Dot />
            <p className="text-gray-400">
              s3 Presigned Url api를 활용한 이미지 변경 구현
            </p>
          </section>
          <section className="flex gap-2">
            <Dot />
            <p className="text-gray-400">
              비밀번호 변경 플로우 구현(현재 비밀번호 검증 포함)
            </p>
          </section>
          <section className="flex gap-2">
            <Dot />
            <p className="text-gray-400">
              회원 탈퇴 기능 구현(탈퇴 사유 입력 및 유효성 검증)
            </p>
          </section>
        </div>
        {/* 1-2 */}
        <h5 className="text-xl">1-2. 북마크</h5>
        <div className="flex flex-col gap-2">
          <section className="flex gap-2">
            <Dot />
            <p className="text-gray-400">북마크 삭제 기능 구현</p>
          </section>
          <section className="flex gap-2">
            <Dot />
            <p className="text-gray-400">검색 기능을 통한 북마크 필터링 구현</p>
          </section>
        </div>
        {/* 1-3 */}
        <h5 className="text-xl">1-3. 지원 내역</h5>
        <div className="flex flex-col gap-2">
          <section className="flex gap-2">
            <Dot />
            <p className="text-gray-400">
              사용자가 지원한 내역 조회 및 목록 렌더링
            </p>
          </section>
          <section className="flex gap-2">
            <Dot />
            <p className="text-gray-400">지원 상세 정보 모달 구현</p>
          </section>
          <section className="flex gap-2">
            <Dot />
            <p className="text-gray-400">
              지원 상태 (대기 / 승인 / 거절 / 취소)표시 및 UI 처리
            </p>
          </section>
          <section className="flex gap-2">
            <Dot />
            <p className="text-gray-400">지원 상태 취소 기능 구현</p>
          </section>
          {/* 1-4 */}
          <h5 className="text-xl">1-4. 완료된 스터디</h5>
          <div className="flex flex-col gap-2">
            <section className="flex gap-2">
              <Dot />
              <p className="text-gray-400">완료된 스터디 목록 조회 및 렌더링</p>
            </section>
            <section className="flex gap-2">
              <Dot />
              <p className="text-gray-400">스터디 리뷰 작성 기능 구현</p>
            </section>
            <section className="flex gap-2">
              <Dot />
              <p className="text-gray-400">작성된 리뷰 수정 기능 구현</p>
            </section>
          </div>
        </div>
        <h3 className="text-2xl font-semibold mt-1">2. 공통 컴포넌트 개발</h3>
        <div className="flex flex-col gap-2">
          <section className="flex gap-2">
            <Dot />
            <p className="text-gray-400">
              전체 서비스에서 공통적으로 사용하는 Header / Footer 포함 레이아웃
              구현
            </p>
          </section>
          <section className="flex gap-2">
            <Dot />
            <p className="text-gray-400">
              마이페이지 전용 Side Navigation을 제작하여 사용자가 선택한 메뉴에
              따라 활성화 UI가 동적 변경하게 구현
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
export default StudyHub;
