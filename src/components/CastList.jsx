import React from 'react';
import { IMAGE_BASE_URL } from '../api';

const CastList = ({ cast }) => (
  <div className="cast-grid">
    {cast.map(member => (
      <div key={member.cast_id} className="cast-card">
        <img src={IMAGE_BASE_URL + member.profile_path} alt={member.name} />
        <p>{member.name}</p>
      </div>
    ))}
  </div>
);

export default CastList;
