import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
    dir: './src'
})

const config = {
    testEnvironment: 'jest-environment-jsdom',
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.js']
}

export default createJestConfig(config)