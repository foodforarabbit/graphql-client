import React from 'react';

const VoteStyle = ({ votes }) => <span style={{color: votes >= 0 ? 'green' : 'red'}}>{`${votes}`}</span>

export default VoteStyle;