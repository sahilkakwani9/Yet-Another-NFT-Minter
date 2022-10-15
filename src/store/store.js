import create from 'zustand'

const useStore = create((set) => ({
  currentAccount: null,
  setCurrentAccount: (value) => set({currentAccount: value}),
}))

export default useStore;