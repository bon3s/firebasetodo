import MainRouter from 'modules/navigation/router/MainRouter';
import { RouterProps, withRouter } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';

interface Props extends RouterProps {}

const App = (props: Props) => {
    return <MainRouter history={props.history} />;
};

export default withRouter(App);
