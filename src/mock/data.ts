import type { User } from '@/types/user'
import type { Payment } from '@/types/payment'

import { ref } from 'vue'
export const users = ref<User[]>([
  { id: 1, name: 'Riya Shah', email: 'riya@example.com', role: 'Customer', status: 'Active' },
  { id: 2, name: 'Aman Verma', email: 'aman@example.com', role: 'Merchant', status: 'Active' },
  { id: 3, name: 'Priya Patel', email: 'priya@example.com', role: 'Admin', status: 'Inactive' }
])

export const payments: Payment[] = [
  { id: 'P101', user: 'Riya Shah', amount: 1200, category: 'UPI', status: 'Success', date: '2026-02-01' },
  { id: 'P102', user: 'Aman Verma', amount: 500, category: 'Card', status: 'Pending', date: '2026-02-02' },
  { id: 'P103', user: 'Priya Patel', amount: 750, category: 'Wallet', status: 'Failed', date: '2026-02-02' }
]
