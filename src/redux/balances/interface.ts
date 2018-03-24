export interface BalancesState {
  data: Data;
  status: Status;
  ui: Ui;
}

interface Status {
  balancesAreLoading: boolean;
  balancesLoadSuccess: boolean;
  balancesLoadError: any;
}
interface Data {
  raw: any[];
}
interface Ui {
  showAddBalanceModal: false;
}