import React from 'react';

interface ApplyButtonProps extends React.ComponentProps<'a'> {
  applyLink?: string;
}

export const ApplyButton = ({ applyLink, className }: ApplyButtonProps) => {
  return (
    <a target='_blank' href={applyLink} className={className} rel='noreferrer'>
      Apply now
    </a>
  );
};

