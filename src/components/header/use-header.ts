import { useHistory } from 'react-router';

const useHeader = () => {
  const history = useHistory();

  const path = history.location.pathname.replace('/', '') || 'home';

  const onClick = (props: { key: string }) => {
    history.push(props.key);
  };

  return { onClick, path };
};

export default useHeader;
