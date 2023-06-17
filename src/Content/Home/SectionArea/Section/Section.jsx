import './Section.scss';

function Section(props) {
  const isActive = props.active || false;

  return (
    <div className='section'>
      {isActive && (
        <div className="active-highlight">
        <div className="box"></div>
      </div>
      )}
      <p className={isActive ? 'active' : ''}>{props.label}</p>
    </div>
  );
}

export default Section;