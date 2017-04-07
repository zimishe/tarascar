/**
 * Created by eugene on 24.03.17.
 */
import React, { Component } from 'react'
import store from './../../store/store'
import { connect } from 'react-redux'
// eslint-disable-next-line 
import { setRoutes } from './../../actions/setRoutes'

import FoundRoute from './foundRoute'
import { userChooseFinalRoute } from './../../actions/support/modals/userChooseRoute'

const mapDispatchToProps = function(dispatch) {
    return {
        dispatch,
        chooseRoute: (routeID, route, event) => {
            let map = window.map;

            if (route.length > 0) {
                route.forEach((el) => {
                    el.polylines.forEach(polyline => polyline.setMap(null));
                });
                
                route[routeID].polylines.forEach(polyline => {
                    polyline.setMap(map)
                });
                
                store.dispatch(userChooseFinalRoute(route[routeID]));
            }
        },
        showReserveModal: () => {
            let reserveModal = document.querySelector('.modal__summary'),
                isLogged = store.getState().isLogged,
                formModal = document.querySelector('.forms-modal');
            
            if ((reserveModal !== null) && (isLogged === true)) {
                reserveModal.classList.add('active');
                document.body.classList.add('active');
            }   else {
                formModal.classList.toggle('active');
                document.body.classList.add('active');
            }
        }
    };
};


const mapStateToProps = function() {
    let data = store.getState();

    return {
        data : data
    }
};

class UserFoundRoutes extends Component {
    render() {
        let foundRoutes = this.props.data.foundRoutes;
        
        function checkRoutes() {
            if (foundRoutes.length > 0) {
                return <h2>За даним запитом знайдені такі поїздки:</h2>
            }   else {
                return <h2>На жаль, за вашим запитом не знайдено жодної поїздки</h2>
            }
        }
        
        return (
            <div className="routes-list ss-container">
                {checkRoutes()}
                       
                <div className="single-routes">
                    {
                        foundRoutes.map((el, i) =>
                            <FoundRoute 
                                key={i}
                                id={i}
                                driverID={el.owner_id}
                                routeID={el.id}
                                carID={el.cars_id}
                                from={el.start_name}
                                to={el.end_name}
                                startDate={new Date(el.date_start)}
                                duration={el.duration}
                                price={el.price}
                                seats={el.quantity}
                                routeColor={el.pathColor}
                                foundRoutes={foundRoutes}
                                chooseRoute={this.props.chooseRoute}
                                showReserveModal={this.props.showReserveModal}
                            />
                        )
                    }
                </div>
            </div>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserFoundRoutes)