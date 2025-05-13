const TodoCard = () => {
  return (
    <article className="flex flex-col border bg-white rounded-md px-5 py-5">
      <ul className="flex flex-col gap-3">
        <li className="font-bold text-black">프론트엔드 개발과제 하기</li>
        <li className="text-black">
          탠스택쿼리 상태관리로 개발 과제 CRUD 구현하기{" "}
        </li>
      </ul>
      <div className="flex flex-row gap-1 justify-end mt-5">
        <button className=" px-3 py-1 bg-green-700 rounded-md text-white">
          완료
        </button>
        <button className=" px-3 py-1 bg-orange-400 rounded-full text-white">
          edit
        </button>
        <button className=" px-3 py-1 bg-red-700 rounded-full text-white">
          &times;
        </button>
      </div>
    </article>
  );
};

export default TodoCard;
