function DetailBtn({ text }: { text: string }) {
  return (
    <button
      type="button"
      className="text-xs text-blue-600 bg-sky-100 p-[4px_12px] h-6  inline-flex rounded-full items-center justify-center"
    >
      {text}
    </button>
  );
}

export default DetailBtn;
