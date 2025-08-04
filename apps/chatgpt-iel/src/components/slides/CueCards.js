import React from 'react';
import { IconChalkboardTeacher } from '@tabler/icons-react';
import PropTypes from 'prop-types'; 
import CardSwiper from '@site/src/components/slides';

// You might want to add PropTypes for better type checking
const CueCards = ({ cardsData, title = "Cartões de apoio.", open = false }) => {
  return (
    <details open={open}>
      <summary>
        <i>{title}
        <span
          style={{
            verticalAlign: "middle",
            display: "inline-block",
            marginLeft: "4px", // small gap from text
            padding: "0px", // removes extra space from inline-block
            lineHeight: "0px",     // removes extra space from inline-block
          }}
        >
          <IconChalkboardTeacher />
        </span></i>
      </summary>
      <CardSwiper cards={cardsData} />
    </details>
  );
};

CueCards.propTypes = {
  cardsData: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      backgroundColor: PropTypes.string.isRequired,
    })
  ).isRequired,
  title: PropTypes.string,
  open: PropTypes.bool, // Adicione esta linha
};

export default CueCards;