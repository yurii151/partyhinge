import { Close, Favorite } from "@mui/icons-material";
import { IconButton } from "@mui/material";

function SwipeButtons(props) {
  return (
    <div className="swipe-buttons">
      <IconButton onClick={() => props.onLeftSwipe()}>
        <Close fontSize="large" className="swipe-buttons-close" />
      </IconButton>
      <IconButton onClick={() => props.onRightSwipe()}>
        <Favorite fontSize="large" className="swipe-buttons-favorite" />
      </IconButton>
    </div>
  )
}

export default SwipeButtons;