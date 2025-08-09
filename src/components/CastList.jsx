// src/components/CastList.jsx
import React from 'react';
import { IMAGE_BASE_URL } from '../api';

const CastList = ({ cast }) => (
  <div className="cast-scroll-container">
    {cast.map(member => (
      <div key={member.cast_id || member.id} className="cast-card">
        <img
          src={
            member.profile_path
              ? IMAGE_BASE_URL + member.profile_path
              : 'https://via.placeholder.com/100x150?text=No+Image'
          }
          alt={member.name}
        />
        <p>{member.name}</p>
      </div>
    ))}
  </div>
);

export default CastList;
