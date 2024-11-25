import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
const useStore = create((set) => ({
  sortingCriteria: 'best',
  setSorting: (sort) => set({ sortingCriteria: sort }),
  registInfo: '',
  setRegistInfo: (info) => set({ registInfo: info }),
  clientInfo: '',
  setClientInfo: (info) => set({ clientInfo: info }),
  registPage: 0,
  setRegistPage: (page) => set({ registPage: page }),
  detailPage: 1,
  setDetailPage: {
    set: (page) => set({ detailPage: page }),
    increment: () =>
      set((state) => {
        const nextIncrement = Math.ceil(state.detailPage / 5) * 5 + 1;
        return {
          detailPage:
            nextIncrement > state.totalPage ? state.totalPage : nextIncrement,
        };
      }),
    decrement: () =>
      set((state) => {
        const prevDecrement = Math.floor((state.detailPage - 1) / 5) * 5;
        return { detailPage: prevDecrement < 1 ? 1 : prevDecrement };
      }),
  },
  totalPage: 59,
  setTotalPage: (page) => set({ totalPage: page }),
  projectInfo: {
    userId: 0,
    title: '',
    content: '',
    estimatedCost: '',
    progressClassification: '',
    workType: '',
    requiredOccupationList: [],
    startDate: '',
    endDate: '',
  },
  setProjectInfo: (newInfo) =>
    set((state) => ({
      projectInfo: {
        ...state.projectInfo,
        ...newInfo,
      },
    })),
  updateOccupation: (occupationName, newOccupation) =>
    set((state) => {
      const existingOccupation = state.projectInfo.requiredOccupationList.find(
        (occupation) => occupation.occupationName === occupationName,
      );

      if (existingOccupation) {
        const updatedList = state.projectInfo.requiredOccupationList.map(
          (occupation) => {
            if (occupation.occupationName === occupationName) {
              return {
                ...occupation,
                ...newOccupation,
              };
            }
            return occupation;
          },
        );
        return {
          projectInfo: {
            ...state.projectInfo,
            requiredOccupationList: updatedList,
          },
        };
      } else {
        return {
          projectInfo: {
            ...state.projectInfo,
            requiredOccupationList: [
              ...state.projectInfo.requiredOccupationList,
              { occupationName, ...newOccupation },
            ],
          },
        };
      }
    }),
}));

const usePersistentStore = create(
  persist(
    (set) => ({
      isLogin: false,
      setIsLogin: (login) => set({ isLogin: login }),
    }),
    {
      name: 'login-storage',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);

export { useStore, usePersistentStore };
