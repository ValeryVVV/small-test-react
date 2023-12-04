import { InfinitySpin } from 'react-loader-spinner';
import style from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={style.BoxSpinner}>
      <InfinitySpin
        height={100}
        width={100}
        radius={5}
        color="#4fa94d"
        ariaLabel="ball-triangle-loading"
        wrapperClass={{}}
        wrapperStyle=""
        visible={true}
        className={style.Spinner}
      />
    </div>
  );
};