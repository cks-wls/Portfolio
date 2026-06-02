import type { stateType } from '@/type/stateType';
function StateBtn({ state, text }: { state?: stateType; text: string }) {
  let style;
  switch (state) {
    case 'pending':
      style = 'bg-orange-200 text-orange-800';
      break;
    case 'inProgress':
      style = 'bg-blue-200 text-blue-800';
      break;
    case 'completed':
      style = 'bg-green-200 text-green-800';
      break;
    case 'canceled':
      style = 'bg-red-500 text-white';
      break;
    default:
      style = 'bg-green-600 text-white';
  }
  return (
    <button
      type="button"
      className={`p-[2px_8px] h-5 inline-flex items-center justify-center rounded-full  text-xs ${style}`}
    >
      {text}
    </button>
  );
}
export default StateBtn;
