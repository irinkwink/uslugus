
import starSVG from '../img/star.svg';
import starOSVG from '../img/star-o.svg';

export const createStars = (comments) => {
  const stars = Math.round(comments
    .reduce((acc, comment) => comment.stars + acc, 0) / comments.length) || 0
  
  const serviceStars = document.createElement('div');
  serviceStars.classList = 'service__stars stars';

  for (let i = 0; i < 5; i++) {
    const star = new Image(18, 18)
    star.classList = 'service__star';
    star.src = (stars > i) ? starSVG : starOSVG;

    if (i === 0) {
      star.alt = `Рейтинг специалиста ${stars} из 5`;
    } else {
      star.alt = '';
    }

    serviceStars.append(star);
  }

  return serviceStars;
};
