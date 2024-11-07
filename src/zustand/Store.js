import { create } from 'zustand';

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
    workType: '',
    progressClassification: '',
    companyName: '',
    title: '',
    content: '',
    requiredClient: 0,
    requiredServer: 0,
    requiredDesign: 0,
    requiredPlanner: 0,
    requiredAIEngineer: 0,
    startDateTime: '',
    endDateTime: '',
    estimatedCost: 0,
  },
  setProjectInfo: (newInfo) =>
    set((state) => ({
      projectInfo: {
        ...state.projectInfo,
        ...newInfo,
      },
    })),
}));

export default useStore;
