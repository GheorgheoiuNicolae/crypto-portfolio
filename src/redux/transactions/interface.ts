export interface TransactionsState {
  data: Data;
  status: Status;
  ui: UI;
}

interface Status {
  transactionsAreLoading: boolean;
  transactionsLoadSuccess: boolean;
  transactionsLoadError: any;
}
interface Data {
  raw: any[];
  byTicker: any[];
}
interface UI {
  showAddTransactionModal: boolean;
}