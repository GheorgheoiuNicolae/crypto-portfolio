export interface PortfoliosState {
  all: any[];
  status: Status;
  shouldCreatePortfolio: boolean;
}

interface Status {
  portfoliosAreLoading: boolean;
  portfoliosLoadSuccess: boolean;
  portfoliosLoadError: any;
}
