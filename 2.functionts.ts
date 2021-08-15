function addNumber (a: number, b: number): number {
  return a + b
}
export default addNumber

export const addStrings = (str1: string, str2: string = ''): string =>
  `${str1} ${str2}`

//union type
export const format = (title: string, param: string | number): string =>
  `${title} ${param}`

//void function
export const printFormat = (title: string, param: string | number): void =>
  console.log(`${title} ${param}`)

//Promise
export const fetchData = (url: string): Promise<string> =>
  Promise.resolve(`Data from ${url}`)

//rest parametrs
export const introduction = (greetings: string, ...names: string[]): string => {
  return `${greetings} ${names.join(' ')}`
}
