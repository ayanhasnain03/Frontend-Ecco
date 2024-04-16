import Rating from '@mui/material/Rating';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const Ratings = ({ value }) => {
  // Determine if the component is controlled based on the value prop
  const isControlled = value !== undefined;

  const emptyStarColor = "#cccccc"; // Change this to your desired color

  const options = {
    value: isControlled ? value : null, // Pass null for uncontrolled state
    readOnly: true,
    precision: 0.5,
    emptyIcon: (
      <StarBorderIcon 
        fontSize="inherit" 
        style={{ color: emptyStarColor }} 
      />
    ),
  };

  return (
    <div className='flex flex-row items-center'>
    Ratings:  <Rating {...options} />
    </div>
  );
};

export default Ratings;
