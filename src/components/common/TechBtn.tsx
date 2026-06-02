function TechBtn({ text }: { text: string }) {
  return (
    <button
      type="button"
      className="text-xs text-gray-500 p-[4px_12px] h-6 border border-gray-300 inline-flex rounded-full items-center justify-center"
    >
      {text}
    </button>
  );
}

export default TechBtn;
