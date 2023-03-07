const resultArr = [];
function getCurPageWords() {
  const arr = Array.from(
    document.querySelectorAll(".index_wordName__1lkbV")
  ).map((e) => e.textContent);
  console.log("当前复习：", arr);
  resultArr.push(...arr);
  return arr;
}
// 新词
getCurPageWords();
document.querySelectorAll(".index_navItem__1Fbwq")[2].click();
setTimeout(() => {
  getCurPageWords(); // 第一页
  document.querySelectorAll(".index_pageContainer__2l7E1 li")[4].click(); // 第二页
  getCurPageWords();
  document.querySelectorAll(".index_pageContainer__2l7E1 li")[4].click(); // 第三页
  getCurPageWords();
  console.log("-------------", resultArr);
}, 2000);
