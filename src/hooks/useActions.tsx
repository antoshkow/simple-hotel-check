import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { handleLogin } from '../redux/actions/auth';

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(handleLogin, dispatch);
}
