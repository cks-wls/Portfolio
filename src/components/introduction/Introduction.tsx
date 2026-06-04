import TechBtn from '@/components/common/TechBtn';
import { focusText } from '@/constant/focusText';
function Introduction() {
  return (
    <div
      id="About"
      className="w-full flex flex-col lg:flex-row lg:gap-12 lg:justify-center"
    >
      {/* 이름 및 자기소개 파트 */}
      <div>
        <p className="text-xs text-gray-500 mb-3 font-light sm:text-sm">
          PORTFOLIO / 2026
        </p>
        <p className="text-2xl text-gray-400 font-light sm:text-3xl">
          기술의 가치를 사용자의 경험에서 찾습니다.
        </p>
        <h1 className="text-5xl font-bold ml-1 sm:text-6xl">황찬진</h1>
        <p className="text-lg font-light text-gray-500 mt-7 leading-normal sm:text-xl">
          <strong className="text-black">기본에 충실한 설계</strong>와&nbsp;
          <strong className="text-black">사용자 중심의 인터페이스</strong>가
          만나는 지점에서 <br />
          디지털 경험을 만들어가는&nbsp;
          <strong className="text-black">프론트엔드 개발자</strong>입니다.
        </p>
        <p className="text-gray-400 mt-5 font-light text-xs sm:text-sm">
          2000.05.21
        </p>
      </div>
      {/* 경력 및 Focus파트 */}
      <div className="flex flex-col mt-28 gap-4 lg:mt-10">
        <p className="text-xs text-gray-400 font-extralight sm:text-sm">
          FOCUS
        </p>
        <div className="flex gap-2">
          {focusText.map((text) => {
            return <TechBtn key={text} text={text} />;
          })}
        </div>
      </div>
    </div>
  );
}
export default Introduction;
