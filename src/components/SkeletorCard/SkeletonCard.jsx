import './skeletonCard.scss';

const SkeletonCard = () => {
  return (
    <div className="card skeletonCard">
      <p className="card__id skeletonCard__id"></p>
      <div className="card__img skeletonCard__img-container">
        <div className="skeletonCard__img"></div>
      </div>
      <h2 className="card__name skeletonCard__name"></h2>
      <div className="card__type skeletonCard__type"></div>
    </div>
  );
};

export default SkeletonCard;
