import { Mail } from 'lucide-react';
import { BookOpen } from 'lucide-react';
import { LuGithub } from 'react-icons/lu';
function Footer() {
  return (
    <div className="w-[90%] mx-auto p-[64px_0] border-b border-gray-300 flex flex-col gap-12 md:flex-row">
      {/* 이름 및 소개부분 */}
      <section className="flex flex-col flex-wrap flex-1">
        <p className="text-xl font-light mb-1">Hwang Chanjin</p>
        <p className="text-sm text-gray-400 font-light mb-4">
          Frontend Developer
        </p>
        <p className="text-sm text-gray-600 font-light">
          기본에 충실한 설계와 컴포넌트의 확장성을 바탕으로 <br /> 서비스의
          완성도를 빠르게 높여가고, <br />
          맡은 바 결과물은 어떤 상황에서도{' '}
          <strong>
            집요하게 <br />
            책임지고
          </strong>
          &nbsp; 증명해 내는 프론트엔드 개발자입니다.
        </p>
      </section>
      {/* Connect 부분 */}
      <section className="flex flex-col gap-3 flex-1">
        <p className="text-sm flex flex-col mb-1">CONNECT</p>
        <a
          target="_blank"
          href="https://github.com/cks-wls"
          className="text-sm text-gray-500 font-light hover:text-black transition-colors flex items-center gap-2"
        >
          <LuGithub size={16} />
          Github
        </a>
        <a
          href="https://velog.io/@hhh8824"
          target="_blank"
          className="text-sm text-gray-500 font-light hover:text-black transition-colors flex items-center gap-2"
        >
          <BookOpen size={16} />
          Blog
        </a>
        <a
          href="mailto:slo0521@naver.com"
          target="_blank"
          className="text-sm text-gray-500 font-light hover:text-black transition-colors flex items-center gap-2"
        >
          <Mail size={16} />
          Email
        </a>
      </section>
      {/* Quick Links 부분 */}
      <section className="flex flex-col gap-3 flex-1">
        <p className="text-sm">QUICK LINKS</p>
        <a
          href="#About"
          className="text-sm text-gray-500 font-light hover:text-black transition-colors "
        >
          About
        </a>
        <a
          href="#Projects"
          className="text-sm text-gray-500 font-light hover:text-black transition-colors"
        >
          Projects
        </a>
      </section>
    </div>
  );
}
export default Footer;
