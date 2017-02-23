import IndexPageConstructor from '../../pages/indexPage/IndexPageConstructor';
import pageApi from '../../utilits/pageApi';

export default {
    onEnter: pageApi.getPage,
    getComponent(nextState, cb) {
        require.ensure([], () => {
            cb(null, IndexPageConstructor);
        });
    },
};
