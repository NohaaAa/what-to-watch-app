import development from './development';
import production from './production';

const environments = () => {
    let currentEnv = development;
    if (process.env.NEXT_PUBLIC_APP_ENV) {
        let environment = process.env.NEXT_PUBLIC_APP_ENV;
        if (environment.trim() === 'development') {
            currentEnv = development;
        } else if (environment.trim() === 'production') {
            currentEnv = production;
        }
    }
    return currentEnv;
};
const environmentsVariables = environments();
export default environmentsVariables;
