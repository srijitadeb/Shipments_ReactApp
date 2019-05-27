import * as React from 'react';

type commonProps = {
  pillItems: any;
};
const CommonTemplate = (props: commonProps) => {
  const { pillItems } = props;
  if (pillItems.description) {
    return (
      <div>
        <span
          className="pillItem"
          title={`type: ${pillItems.type} | volume: ${pillItems.volume}`}
        >
          {' '}
          {pillItems.description}
        </span>
      </div>
    );
  } else {
    return (
      <div>
        <span className="pillItem" title={`type: ${pillItems.type}`}>
          {' '}
          {pillItems.type}
        </span>
      </div>
    );
  }
};

export default CommonTemplate;
