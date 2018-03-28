import { branch, renderComponent } from 'recompose';
import { WrappedLoading } from '../components/Loading';


export default branch(({ loading = false }) => (!!loading), renderComponent(WrappedLoading));
