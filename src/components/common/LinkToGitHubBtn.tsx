import beforeHoverGitHubIcon from '@/assets/icons/gitBeforeHoverIcon.svg';
function LinkToGitHubBtn({ link }: { link: string }) {
  const linkToGithub = ({ link }: { link: string }) => {
    window.open(link, '_parent');
  };
  return (
    <button
      type="button"
      className="p-[6px_12px] h-8 inline-flex items-center justify-center border-2 border-black rounded-full gap-2 cursor-pointer"
      onClick={() => linkToGithub({ link })}
    >
      <img src={beforeHoverGitHubIcon} alt="GitHubLogo" />
      <p className="hidden sm:block sm:text-md sm:text-bold ">GitHub</p>
    </button>
  );
}
// 추후에 hover했을때 바뀌는 부분 체크하기
export default LinkToGitHubBtn;
