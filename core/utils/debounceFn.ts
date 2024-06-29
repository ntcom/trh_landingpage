/**
 * fn debounce chạy hàm
 * @param {function} fn
 * @param {number} ms
 * @returns {fn}
 */

// export default function debounceFn(fn:any, ms:any) {
//     if (typeof fn !== 'function' || typeof ms !== 'number') return;
//     let timer: number | null | setTimeout;
//     return (_:any) => {
//         if(timer){
//             clearTimeout(timer);
//             timer = setTimeout((_:any) => {
//               timer = null;
//               fn.apply(this as any, arguments);
//             }, ms);
//         }
//     };
//   }
  
export default function debounceFn<T extends (...args: any[]) => void>(fn: T, ms: number): (...args: Parameters<T>) => void {
    if (typeof fn !== 'function' || typeof ms !== 'number') return () =>{};
  
    let timer: ReturnType<typeof setTimeout> | null;
  
    return (...args: Parameters<T>) => {
      if (timer) {
        clearTimeout(timer);
      }
  
      timer = setTimeout(() => {
        timer = null;
        fn(...args);
      }, ms);
    };
  }
  