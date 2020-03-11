import React from 'react';

const mql = window.matchMedia(`(min-width: 800px)`);

/**
 * Simple sensor that will fire callback when mql query changes.
 */
export class DesktopSensor {
    constructor(onChange){
        mql.addListener(this.mediaQueryChanged);

        this.desktopMode = mql.matches;
        this.onChange = onChange;
    }

    mediaQueryChanged = () => {
        this.desktopMode = mql.matches;
        if(this.onChange){
            this.onChange(this.desktopMode);
        }
    }

    getState = () => {
        return this.desktopMode;
    }

    destroy = () => {
        mql.removeListener(this.mediaQueryChanged);
    }
}

class ResponsiveWrapper extends React.Component {

    constructor(props){
        super(props);

        this.desiredState = true;
        this.state = {
            desktopMode: mql.matches,
        };
    }

    mediaQueryChanged = () => {
        this.setState({ desktopMode: mql.matches});
    }
    
    componentWillMount() {
        mql.addListener(this.mediaQueryChanged);
    }

    componentWillUnmount() {
        mql.removeListener(this.mediaQueryChanged);
    }

    render() {
        if(this.state.desktopMode === this.desiredState){
            return this.props.children;
        }else{
            return '';
        }
    }
}

/**
 * Wrap components with this to show only in desktop mode.
 */
export class Desktop extends ResponsiveWrapper {

    constructor(props){
        super(props);

        this.desiredState = true;
    }
}

/**
 * Wrap components with this to show only in mobilemode.
 */
export class Mobile extends ResponsiveWrapper {

    constructor(props){
        super(props);

        this.desiredState = false;
    }
}
