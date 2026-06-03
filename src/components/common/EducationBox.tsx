import type { EducationType } from '@/type/educationType';
import StateBtn from '@/components/common/StateBtn';
import UseStackBtn from '@/components/common/UseStackBtn';
import { GraduationCap } from 'lucide-react';
import { MapPin } from 'lucide-react';
import { Calendar } from 'lucide-react';
import { BookCheck } from 'lucide-react';
import { Dot } from 'lucide-react';

function EducationBox({ education }: { education: EducationType }) {
  return (
    <>
      <div className="border border-gray-300 rounded-xl w-full p-[24px_48px] mb-12 flex flex-col gap-6">
        {/* 제목 부분 */}
        <header>
          <div className="flex gap-2 items-center">
            <GraduationCap size={20} />
            <p className="text-xl font-semibold">{education.company}</p>
            <StateBtn state={education.state} text={education.stateText} />
          </div>
          <section>
            <p className="text-lg font-normal text-gray-500 mt-2">
              {education.course}
            </p>
          </section>
          <section className="flex flex-col gap-2 mt-2">
            <section className="flex gap-2 items-center">
              <MapPin color="#6a7282" size={16} />
              <p className="text-sm text-gray-500 ">{education.location}</p>
            </section>
            <section className="flex gap-2 items-center">
              <Calendar color="#6a7282" size={16} />
              <p className="text-sm text-gray-500">{education.duration}</p>
            </section>
          </section>
        </header>
        {/* 주요 성과 및 활동 부분 */}
        <main>
          <section className="flex gap-2 items-center mb-3">
            <BookCheck size={18} />
            <p className="text-base font-medium">주요 성과 및 활동</p>
          </section>
          {education.description?.map((val) => (
            <div className="flex gap-2">
              <Dot />
              <p key={val} className="text-sm text-gray-500">
                {val}
              </p>
            </div>
          ))}
        </main>
        {/* 습득역량 부분 */}
        <footer>
          <p className="text-base font-medium mb-3">습득 역량</p>
          <div className="flex gap-2 flex-wrap">
            {education.achievement?.map((val) => (
              <UseStackBtn text={val} />
            ))}
          </div>
        </footer>
      </div>
    </>
  );
}
// 이후에 데이터 받아와서 map으로 매핑하는 것 필요
export default EducationBox;
