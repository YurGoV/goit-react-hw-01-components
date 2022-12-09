import css from 'components/Statistics/Statistics.module.css';
import PropTypes from 'prop-types';
import { StatisticsItem } from '../StatisticsItem/StatisticsItem';

export const Statistics = (props) => {
  const {title, stats} = props;
  const titleUp = title.toUpperCase();
  return <section className={css.statistics}>
    <h2 className={css.title}>{titleUp}</h2>
    <ul className={css.statList}>
      {stats.map(({label, percentage, id}) => (
        <StatisticsItem
          key={id}
          label={label}
          percentage={percentage}
        />
      ))}
    </ul>
  </section>
}

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
stats: PropTypes.arrayOf(
  PropTypes.exact({
id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  })
)};
