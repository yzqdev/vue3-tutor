import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer'

const modules = import.meta.glob('./**/*.ts', {
  import: 'default',
  eager: true
})

const mockModules: any[] = []
Object.keys(modules).forEach(async (key) => {
  if (key.includes('_')) {
    return
  }
  mockModules.push(...(modules[key] as any))
})
console.log(mockModules)
console.log('models')
console.log(modules)

export function setupProdMockServer() {
  createProdMockServer(mockModules)
}
