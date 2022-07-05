import React, { useState } from 'react';

const InfiniteText = () => {
    const [name, setText] = useState("");

    const handleChange = (e) => {
      setText(e.target.value);
    }
      

    return (
        <div className="infinite-text">
            <form>
                <input type="text" value={name} onChange={handleChange} />
            </form>
        </div>
    );
    
}

export default InfiniteText;
