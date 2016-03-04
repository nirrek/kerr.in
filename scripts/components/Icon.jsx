import React from 'react';
let { string, number, object, oneOfType } = React.PropTypes;

export default React.createClass({
  propTypes: {
    icon: string.isRequired,
    size: oneOfType([
      string,
      number
    ]),
    viewBox: string,
    style: object,
    ctx: string,
  },

  getDefaultProps() {
    return {
      size: 24
    };
  },

  _mergeStyles(...args) {
    // This is the m function from "CSS in JS" and can be extracted to a mixin
    return Object.assign({}, ...args);
  },

  renderGraphic() {
    switch (this.props.icon) {
      case 'arrow-back':
        return (
          <g><path d="M20 11h-12.17l5.59-5.59-1.42-1.41-8 8 8 8 1.41-1.41-5.58-5.59h12.17v-2z"></path></g>
        );
      case 'post-github':
        return (
          <g><path d="M7.2 6.6h-.1c-.5 1.4-.2 2.3-.1 2.6-.6.7-1 1.6-1 2.6 0 3.8 2.4 4.6 4.6 4.9-.2 0-.6.2-.8.8-.4.2-1.8.7-2.6-.7 0 0-.5-.8-1.3-.9 0 0-.8 0-.1.5 0 0 .6.3.9 1.3 0 0 .5 1.7 3 1.1v3.1h5v-3.5c0-1-.4-1.5-.8-1.8 2.2-.2 4.6-1 4.6-4.8 0-1.1-.4-2-1-2.6.1-.3.4-1.2-.1-2.6 0 0-.8-.3-2.7 1-.8-.2-1.6-.3-2.5-.3-.8 0-1.7.1-2.5.3-1.4-1-2.2-1-2.6-1zm12.8 15.4h-16c-1.1 0-2-.9-2-2v-16c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2z"></path></g>
        );
      case 'open-in-new':
        return (
          <g><path d="M19 19h-14v-14h7v-2h-7c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zm-5-16v2h3.59l-9.83 9.83 1.41 1.41 9.83-9.83v3.59h2v-7h-7z"></path></g>
        );
      case 'expand-more':
        return (
          <g><path d="M16.59 8.59l-4.59 4.58-4.59-4.58-1.41 1.41 6 6 6-6z"></path></g>
        );
      case 'chevron-right':
        return (
          <g><path d="M10 6l-1.41 1.41 4.58 4.59-4.58 4.59 1.41 1.41 6-6z"></path></g>
        );
      case 'paperplane':
        return (
          <g><path d="M50 2c26.468 0 48 21.533 48 48 0 26.468-21.532 48-48 48C23.533 98 2 76.468 2 50 2 23.533 23.533 2 50 2m0-2C22.386 0 0 22.386 0 50s22.386 50 50 50 50-22.386 50-50S77.614 0 50 0z"/><path d="M16.346 49.322l-.023 1.8 21.703 10.853 10.85 21.702 1.803-.023 29-62-.784-.548-.547-.782-62.004 28.998zM74.04 24.545L38.57 60.012 19.066 50.26 74.04 24.544zm-24.3 56.388l-9.754-19.507L75.453 25.96 49.74 80.932z"/></g>
        );
      case 'briefcase':
        return (
          <g><path d="M50 2c26.468 0 48 21.533 48 48 0 26.468-21.532 48-48 48C23.533 98 2 76.468 2 50 2 23.533 23.533 2 50 2m0-2C22.386 0 0 22.386 0 50s22.386 50 50 50 50-22.386 50-50S77.614 0 50 0z"/><path d="M74 35v34H25V35h49m2-2H23v38h53V33z"/><path d="M74 35v10H25V35h49m2-2H23v14h53V33z"/><path d="M54 47v4h-9v-4h9m2-2H43v8h13v-8zM42.354 34c-.216-.308-.354-.663-.354-1.04v-1.335C42 30.522 43.115 30 44.218 30h10.564c1.103 0 2.218.522 2.218 1.625v1.334c0 .377-.138.73-.354 1.04h2.183c.1-.335.17-.68.17-1.04v-1.335c0-2.2-2.018-3.625-4.218-3.625H44.218C42.018 28 40 29.425 40 31.625v1.334c0 .36.07.705.172 1.04h2.182z"/></g>
        );
      case 'person':
        return (
          <g><path d="M50 2c26.468 0 48 21.533 48 48 0 26.468-21.532 48-48 48C23.533 98 2 76.468 2 50 2 23.533 23.533 2 50 2m0-2C22.386 0 0 22.386 0 50s22.386 50 50 50 50-22.386 50-50S77.614 0 50 0z"/><path d="M50 30.786c5.29 0 9.594 4.304 9.594 9.594 0 2.715-1.17 5.32-3.21 7.143l-2.838 2.54 3.703.788C66.787 53.157 73.365 60 74.05 67H25.95c.682-7 7.26-13.844 16.8-16.15l3.702-.84-2.84-2.514c-2.038-1.824-3.208-4.414-3.208-7.13 0-5.29 4.304-9.58 9.594-9.58m0-2c-6.403 0-11.594 5.19-11.594 11.594 0 3.435 1.502 6.51 3.875 8.634-10.648 2.573-18.387 10.22-18.387 19.39 0 .235.013.596.023.596h52.168c.01 0 .023-.36.023-.597 0-9.168-7.738-16.87-18.39-19.443 2.374-2.123 3.876-5.172 3.876-8.607 0-6.402-5.19-11.567-11.593-11.567z"/></g>
        );
    }
  },

  render() {
    let styles = {
      fill: "currentcolor",
      verticalAlign: "middle",
      width: this.props.size, // CSS instead of the width attr to support non-pixel units
      height: this.props.size // Prevents scaling issue in IE
    };

    let ctxStyle;
    if (this.props.ctx === 'button') {
      ctxStyle = {
        marginRight: '.3em',
        position: 'relative',
        top: -2,
      };
    }

    return (
      <svg viewBox={this.props.viewBox} preserveAspectRatio="xMidYMid meet" fit
        style={this._mergeStyles(
          styles,
          ctxStyle,
          this.props.style // This lets the parent pass custom styles
        )}>
          {this.renderGraphic()}
      </svg>
    );
  }
});
