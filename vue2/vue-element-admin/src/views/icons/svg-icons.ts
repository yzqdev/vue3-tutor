
// const routeFiles = import.meta.glob('@/icons/svg/*.svg',   )
// console.log(routeFiles)
// let svgIcons=[]
// for (const path in routeFiles) {
//     console.log(routeFiles[path])
//
//   svgIcons.push(routeFiles[path] )
// }
import ids from 'virtual:svg-icons-names'
console.log(`%c获取icon列表`,`color:red;font-size:16px;background:transparent`)
console.log(ids)
export default ids
