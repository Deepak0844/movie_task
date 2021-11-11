import { useState } from 'react';
import Badge from '@mui/material/Badge';
import ThumbUpSharpIcon from '@mui/icons-material/ThumbUpSharp';
import ThumbDownSharpIcon from '@mui/icons-material/ThumbDownSharp';

export function Counter() {
  const [like, setLike] = useState(0);
  const [disLike, setDisLike] = useState(0);
  const batchStyle={
    marginTop:"30px",
    marginLeft:"0px",
    width:"35px",
    color:"white",
  }
  return (
    <div>
      <button className="likedislikebtn" onClick={() => setLike(like + 1)}> <Badge style={batchStyle} badgeContent={like}color="primary">
      <ThumbUpSharpIcon/>
     </Badge></button>
      <button className="likedislikebtn" onClick={() => setDisLike(disLike + 1)}><Badge style={batchStyle} badgeContent={disLike} color="error">
      <ThumbDownSharpIcon/>
      </Badge></button>
    </div>
  );
}
