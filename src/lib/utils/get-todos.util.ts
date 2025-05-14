export const getTodos = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}`, {
    cache: "no-store",
  });
  if (!response.ok) throw new Error("데이터 조회 중 오류가 발생했습니다");
  return response.json();
};
