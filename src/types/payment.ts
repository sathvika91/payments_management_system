export interface Payment {
  id: string
  user: string
  amount: number
  category: 'UPI' | 'Card' | 'Wallet' | 'Bank'
  status: 'Success' | 'Pending' | 'Failed'
  date: string
}
