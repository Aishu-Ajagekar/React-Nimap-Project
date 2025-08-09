import { IMAGE_BASE_URL } from "../api";
import placeHolderImage from "../assets/cast_placeholder.png";

const CastList = ({ cast }) => (
  <div className="cast-scroll-container">
    {cast.map((member) => {
      console.log(member);
      return (
        <div key={member.cast_id || member.id} className="cast-card">
          <img
            src={
              member.profile_path
                ? IMAGE_BASE_URL + member.profile_path
                : placeHolderImage
            }
            alt={member.name}
          />
          <p>{member.name}</p>
        </div>
      );
    })}
  </div>
);

export default CastList;
