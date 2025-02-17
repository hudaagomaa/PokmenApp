import React from 'react';

export default function Pagination({ next, prev }) {
  return (
    <div>
    {next  &&   <button onClick={next}>NEXT PAGE</button>     }
    {prev &&   <button onClick={prev}> PREVIOUS PAGE</button>     }
      
    </div>
  );
}
/**<button onClick={prev}> PREVIOUS PAGE</button>

      <button onClick={next}>NEXT PAGE</button>
 */