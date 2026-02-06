import { vi } from 'vitest'

// Mock vue-router with partial mocking
vi.mock('vue-router', async (importOriginal) => {
  const actual = await importOriginal() as any
  return {
    ...actual,
    useRouter: () => ({
      push: vi.fn(),
      go: vi.fn(),
      back: vi.fn(),
    }),
    useRoute: () => ({
      params: {},
      query: {},
    }),
  }
})
