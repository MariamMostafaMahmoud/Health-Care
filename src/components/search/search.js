// import React from "react";
// // css
// import './_search.scss';
// const SearchBar=()=>{
//     return(
//        <section>
//         <div>

//         </div>
//         <div className="search-bar">
//          <form>
//                     <input type="text" class="form-control" placeholder="Type to search"/>
                    
//          </form>
//         </div>
//        </section>
//     );
// }
// export default SearchBar;


import React, { useState } from 'react';
import './_search.scss'; // استيراد ملف الـ SCSS

const SearchModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <div>
            <button onClick={openModal} className="btn btn-primary">Open Search</button>

            {isOpen && (
                <div className="search-modal">
                    <div className="search-content">
                        <button className="close-btn" onClick={closeModal}>X</button>
                        <input type="text" placeholder="Type to search" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default SearchModal;
