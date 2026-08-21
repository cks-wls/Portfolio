import figmaBeforeHover from '@/assets/icons/figmaBeforeHover.svg';
function LinkToFigmaBtn({ link }: { link: string }) {
  const linkToFigma = ({ link }: { link: string }) => {
    window.open(link, '_parent');
  };
  return (
    <button
      type="button"
      className="p-[6px_12px] h-8 inline-flex items-center justify-center border-2 border-black rounded-full gap-2 cursor-pointer"
      onClick={() => linkToFigma({ link })}
    >
      <img src={figmaBeforeHover} alt="FigmaLogo" />
      <p className="hidden sm:block sm:text-md sm:text-extrabold">프로토타입</p>
    </button>
  );
}
// 추후에 hover했을때 바뀌는 부분 체크하기
export default LinkToFigmaBtn;
