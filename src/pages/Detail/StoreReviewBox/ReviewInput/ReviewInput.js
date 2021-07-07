import React from 'react';

import './ReviewInput.scss';

class ReviewInput extends React.Component {
  state = {
    isTextValid: false,
    isRatingValid: false,
    reviewRating: [false, false, false, false, false],
  };

  handleReviewInput = e => {
    e.target.value.length > 9
      ? this.setState({ isTextValid: true })
      : this.setState({ isTextValid: false });
  };

  handleReviewRating = e => {
    const { reviewRating } = this.state;

    const clickedIndex = parseInt(e.target.attributes.idx.value);
    const copiedRating = [...reviewRating];

    for (let i = 0; i < clickedIndex + 1; i++) {
      copiedRating[i] = true;
    }

    for (let i = 6 - (5 - clickedIndex); i < 5; i++) {
      copiedRating[i] = false;
    }

    this.setState({
      isRatingValid: true,
      reviewRating: copiedRating,
    });
  };

  render() {
    const { handleReviewRating, handleReviewInput } = this;
    const { reviewRating, isTextValid, isRatingValid } = this.state;

    return (
      <form>
        <p className="reviewTitle">
          <b>더피자보이즈</b>에 대한 솔직한 리뷰를 써주세요
        </p>
        <div className="reviewRatingBox">
          <i
            onClick={handleReviewRating}
            idx="0"
            className={`fa-star ${reviewRating[0] ? 'fas' : 'far'}`}
          ></i>
          <i
            onClick={handleReviewRating}
            idx="1"
            className={`fa-star ${reviewRating[1] ? 'fas' : 'far'}`}
          ></i>
          <i
            onClick={handleReviewRating}
            idx="2"
            className={`fa-star ${reviewRating[2] ? 'fas' : 'far'}`}
          ></i>
          <i
            onClick={handleReviewRating}
            idx="3"
            className={`fa-star ${reviewRating[3] ? 'fas' : 'far'}`}
          ></i>
          <i
            onClick={handleReviewRating}
            idx="4"
            className={`fa-star ${reviewRating[4] ? 'fas' : 'far'}`}
          ></i>
        </div>
        <textarea
          onChange={handleReviewInput}
          className="reviewInputBox"
          placeholder="주문하신 메뉴는 어떠셨나요? 식당의 분위기와 서비스도 궁금해요!"
        />
        <button
          className="reviewSubmitBtn"
          disabled={isTextValid && isRatingValid ? false : true}
        >
          리뷰작성
        </button>
      </form>
    );
  }
}

export default ReviewInput;
