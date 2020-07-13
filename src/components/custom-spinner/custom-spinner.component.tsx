import { Spinner } from './custom-spinner.styles';

const CustomSpinner: React.FC = () => (
  <Spinner viewBox='0 0 50 50'>
    <circle
      className='path'
      cx='25'
      cy='25'
      r='20'
      fill='none'
      strokeWidth='2'
    />
  </Spinner>
);

export default CustomSpinner;
