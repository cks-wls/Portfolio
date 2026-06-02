function ProjectsBox() {
  return (
    <div className="flex flex-col">
      <div className="border border-red-500">이미지 부분</div>
      <div className="border border-green-500">텍스트 부분</div>
    </div>
  );
}
// 이후에 데이터 받아와서 map으로 매핑하는 것 필요
export default ProjectsBox;
