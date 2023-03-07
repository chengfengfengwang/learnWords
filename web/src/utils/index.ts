export const highlightWord = (sentence: string, word: string) => {
  const reg = new RegExp(`(${word})`, 'g');
  return sentence.replace(reg, '<span class="font-bold">$1</span>').replace(/^(.+)$/gm, '<div>$1</div>')
}
export const getIndex = () => {
  const index = localStorage.getItem('index') || '0';
  return Number(index)
}
export const setIndex = (index: number) => {
  return localStorage.setItem('index', index+'') 
}
export const getParentMessageId = () => {
  return localStorage.getItem('parentMessageId') || '';
}
export const setParentMessageId = (id: string) => {
  return localStorage.setItem('parentMessageId', id) 
}