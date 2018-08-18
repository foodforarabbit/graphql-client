import React from 'react';
import { Link } from 'react-router-dom';

const AuthorLink = ({ author }) => {
  return <Link to={`/author/${author.id}`}>{`${author.firstName} ${author.lastName}`}</Link>;
}

export default AuthorLink;