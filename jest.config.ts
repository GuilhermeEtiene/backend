import { compilerOptions } from './tsconfig.json'
import { pathsToModuleNameMapper } from 'ts-jest'

export default {
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>' }),
  clearMocks: true,
  coverageProvider: 'v8',
  preset: 'ts-jest',
  testMatch: ['**/__tests__/**/*.test.ts'],
  coveragePathIgnorePatterns: ['/node_modules/'],
  testEnvironment: 'node'
}
