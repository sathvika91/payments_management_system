import '@testing-library/jest-dom'

// Mock vue-router with Jest
jest.mock('vue-router', () => ({
  ...jest.requireActual('vue-router'),
  useRouter: () => ({
    push: jest.fn(),
    go: jest.fn(),
    back: jest.fn(),
  }),
  useRoute: () => ({
    params: {},
    query: {},
  }),
}));
