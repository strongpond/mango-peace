import React from 'react';
import '../Filter/Filter.scss';
class SelectRatingComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { idx, stateKey, handleIdx, ratingCurrentIdx } = this.props;
    return (
      <>
        <button
          type="button"
          ratingCurrentIdx={ratingCurrentIdx}
          stateKey="ratingCurrentIdx"
          onClick={() => handleIdx(stateKey, idx)}
          className={ratingCurrentIdx === idx ? 'selectList on' : 'selectList'}
        >
          {this.props.title}
        </button>
      </>
    );
  }
}
export default SelectRatingComponent;
