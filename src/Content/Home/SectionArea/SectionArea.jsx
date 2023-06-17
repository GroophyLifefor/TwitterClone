import './SectionArea.scss';
import Section from './Section/Section';

function SectionArea() {
  return (
    <div className='section-area'>
        <Section label="For You" active={true} />
        <Section label="Following" />
    </div>
  );
}

export default SectionArea;