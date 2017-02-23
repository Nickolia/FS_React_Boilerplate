import OptionsPageComponent from '../../pages/optionsPage/OptionsPageComponent';
import pageApi from '../../utilits/pageApi';

export default {
    path: '/author/:id',
    onEnter: pageApi.getPage,
    getComponent(nextState, cb) {
        require.ensure([], () => {
            cb(null, OptionsPageComponent);
        });
    },
};
