import React from 'react';
import { apiRequest } from '../../utilits/actionCreators';

class abstractPages extends React.Component {
    constructor(props) {
        super(props);
        this.pageDom = this.getPrerenderDom();
        this.getPageState().then(() => {
            this.init();
        });
    }

    init() {
        this.pageDom = this.getPageDom();
        this.forceUpdate();
    }

    render() {
        return this.pageDom;
    }

    getPageDom() {
        return this.page();
    }

    getPrerenderDom() {
        return (
            <div>
                Обновление страницы!
            </div>
        );
    }

    getPageState() {
        return this.props.getPageState();
    }
}


function mapStateToProps(state) {
    return {
        ...state.pages
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getPageState() {
            return dispatch(apiRequest({url: GET_PAGE}))
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(abstractPages)
