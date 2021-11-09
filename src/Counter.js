import { useState } from 'react';
import Badge from '@mui/material/Badge';

export function Counter() {
  const [like, setLike] = useState(0);
  const [disLike, setDisLike] = useState(0);
  return (
    <div>
      <button className="likedislikebtn" onClick={() => setLike(like + 1)}> <Badge badgeContent={like} color="primary">👍
      </Badge></button>
      <button className="likedislikebtn" onClick={() => setDisLike(disLike + 1)}><Badge badgeContent={disLike} color="error">👎
      </Badge></button>
    </div>
  );
}
