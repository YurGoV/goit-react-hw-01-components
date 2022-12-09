import css from 'components/StatisticsItem/StatisticsItem.module.css';
import PropTypes from 'prop-types';


export const StatisticsItem = ({ label, percentage }) => {
  // const {label, percentage} = props;

  return (
    <li className={css.item}>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </li>
  )
};

  StatisticsItem.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  };
