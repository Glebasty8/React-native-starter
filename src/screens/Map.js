import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import styled from 'styled-components';

const Container = styled.View`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    justifyContent: flex-end;
    align-items: center;
`;

const Map = styled(MapView)`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`;

const MapScreen = () => {
    return (
        <Container>
            <Map
                region={{
                    latitude: 50.016425,
                    longitude: 36.226386,
                    latitudeDelta: 0.1,
                    longitudeDelta: 0.1,
                }}
            >
                <Marker
                    coordinate={{
                        latitude: 50.016425,
                        longitude: 36.226386,
                    }}
                    title="Kofein"
                    description="This this Kofein cafe"
                />
            </Map>
        </Container>
    );
};

export default MapScreen;
