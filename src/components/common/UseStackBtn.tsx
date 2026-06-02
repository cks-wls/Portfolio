function UseStackBtn({ text }: { text: string }) {
  return (
    <button
      className={`bg-gray-200  p-[2px_8px] h-5 inline-flex items-center justify-center rounded-full  text-xs `}
    >
      {text}
    </button>
  );
}
export default UseStackBtn;
