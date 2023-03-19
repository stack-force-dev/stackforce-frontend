type statusStep = 'active' | 'unactive' | 'success';

export interface stepActiveInputs {
  type: statusStep;
  is_adaptive: statusStep;
  state: statusStep;
  start_date: statusStep;
}
export const stepActiveData: stepActiveInputs = {
  type: 'active',
  is_adaptive: 'unactive',
  state: 'unactive',
  start_date: 'unactive',
};
