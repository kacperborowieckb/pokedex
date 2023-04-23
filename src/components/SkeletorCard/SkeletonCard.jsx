import './skeletonCard.scss';

const SkeletonCard = () => {
  return (
    <article className="card skeletonCard">
      <p className="card__id skeletonCard__id"></p>
      <div className="card__img skeletonCard__img-container">
        <div className="skeletonCard__img"></div>
      </div>
      <h2 className="card__name skeletonCard__name"></h2>
      <section className="card__type skeletonCard__type"></section>
    </article>
  );
};

export default SkeletonCard;
